
import { db } from "@/db";
import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    // Await the params first
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    // Fetch main freezone by id
   
    // Fetch details using freezone id
    const details = await db
      .select()
      .from(FreezoneDetailsTable)
      .where(eq(FreezoneDetailsTable.id, id))
      .limit(1);

    return NextResponse.json({
      success: true,
      data: {
       
        details: details[0],
      },
    });
  } catch (error) {
    console.error("Freezone Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}




// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { db } from "@/db";
// import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { NextResponse } from "next/server";

// // In-memory cache: Map of id -> freezone data
// const cache = new Map<string, { data: any; timestamp: number }>();
// const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     // Await the params
//     const { id } = await context.params;

//     if (!id) {
//       return NextResponse.json(
//         { success: false, message: "Slug is required" },
//         { status: 400 }
//       );
//     }

//     const now = Date.now();
//     const cached = cache.get(id);

//     // Return cached data if valid
//     if (cached && now - cached.timestamp < CACHE_DURATION) {
//       return NextResponse.json(
//         {
//           success: true,
//           data: cached.data,
//           cached: true,
//         },
//         {
//           headers: {
//             "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
//           },
//         }
//       );
//     }

//     // OPTIMIZATION 1: Use a single JOIN query instead of two separate queries
//     const result = await db
//       .select().from(FreezoneDetailsTable).where(eq(FreezoneDetailsTable.id,id))

//     const responseData = {
//      data:result[0]
//     };

//     // Update cache
//     cache.set(id, {
//       data: responseData,
//       timestamp: now,
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         data: responseData,
//         cached: false,
//       },
//       {
//         headers: {
//           "Cache-Control":
//             "public, s-maxage=3600, stale-while-revalidate=86400",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("Freezone Fetch Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// // OPTIONAL: Add a revalidation endpoint to clear cache
// // export async function POST(
// //   req: Request,
// //   context: { params: Promise<{ id: string }> }
// // ) {
// //   try {
// //     const { slug } = await context.params;
    
// //     // Clear specific cache entry
// //     if (slug) {
// //       cache.delete(slug);
// //       return NextResponse.json({
// //         success: true,
// //         message: `Cache cleared for ${slug}`,
// //       });
// //     }
    
// //     // Clear all cache
// //     cache.clear();
// //     return NextResponse.json({
// //       success: true,
// //       message: "All cache cleared",
// //     });
// //   } catch (error) {
// //     console.error("Error Occured to create freezone:", error);
// //     return NextResponse.json(
      
// //       { success: false, message: "Failed to clear cache" },
// //       { status: 500 }
// //     );
// //   }
// // }