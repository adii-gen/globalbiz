
// import { db } from "@/db";
// import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { NextResponse } from "next/server";

// export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
//   try {
//     // Await the params first
//     const { slug } = await context.params;

//     if (!slug) {
//       return NextResponse.json(
//         { success: false, message: "Slug is required" },
//         { status: 400 }
//       );
//     }

//     // Fetch main freezone by slug
//     const freezone = await db
//       .select()
//       .from(FreezonesTable)
//       .where(eq(FreezonesTable.slug, slug))
//       .limit(1);

//     if (!freezone.length) {
//       return NextResponse.json(
//         { success: false, message: "Freezone not found" },
//         { status: 404 }
//       );
//     }

//     // Fetch details using freezone id
//     const details = await db
//       .select()
//       .from(FreezoneDetailsTable)
//       .where(eq(FreezoneDetailsTable.freezoneId, freezone[0].id))
//       .limit(1);

//     return NextResponse.json({
//       success: true,
//       data: {
//         ...freezone[0],
//         details: details.length ? details[0] : null,
//       },
//     });
//   } catch (error) {
//     console.error("Freezone Fetch Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }




/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/db";
import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// In-memory cache: Map of slug -> freezone data
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    // Await the params
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    const now = Date.now();
    const cached = cache.get(slug);

    // Return cached data if valid
    if (cached && now - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json(
        {
          success: true,
          data: cached.data,
          cached: true,
        },
        {
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        }
      );
    }

    // OPTIMIZATION 1: Use a single JOIN query instead of two separate queries
    const result = await db
      .select({
        // Freezone fields
        id: FreezonesTable.id,
        name: FreezonesTable.name,
        slug: FreezonesTable.slug,
        // createdAt: FreezonesTable.createdAt,
        // updatedAt: FreezonesTable.updatedAt,
        // Details fields
        details: {
          description: FreezoneDetailsTable.description,
          benefits: FreezoneDetailsTable.benefits,
          licenseTypes: FreezoneDetailsTable.licenseTypes,
          businessEntities: FreezoneDetailsTable.businessEntities,
          subFreezones: FreezoneDetailsTable.subFreezones,
        },
      })
      .from(FreezonesTable)
      .leftJoin(
        FreezoneDetailsTable,
        eq(FreezonesTable.id, FreezoneDetailsTable.freezoneId)
      )
      .where(eq(FreezonesTable.slug, slug))
      .limit(1);

    if (!result.length) {
      return NextResponse.json(
        { success: false, message: "Freezone not found" },
        { status: 404 }
      );
    }

    const responseData = {
      id: result[0].id,
      name: result[0].name,
      slug: result[0].slug,
      // createdAt: result[0].createdAt,
      // updatedAt: result[0].updatedAt,
      details: result[0].details,
    };

    // Update cache
    cache.set(slug, {
      data: responseData,
      timestamp: now,
    });

    return NextResponse.json(
      {
        success: true,
        data: responseData,
        cached: false,
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Freezone Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// OPTIONAL: Add a revalidation endpoint to clear cache
export async function POST(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    
    // Clear specific cache entry
    if (slug) {
      cache.delete(slug);
      return NextResponse.json({
        success: true,
        message: `Cache cleared for ${slug}`,
      });
    }
    
    // Clear all cache
    cache.clear();
    return NextResponse.json({
      success: true,
      message: "All cache cleared",
    });
  } catch (error) {
    console.error("Error Occured to create freezone:", error);
    return NextResponse.json(
      
      { success: false, message: "Failed to clear cache" },
      { status: 500 }
    );
  }
}