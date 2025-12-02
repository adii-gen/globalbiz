

// import { db } from "@/db";
// import {  MainlandTable, mainlandDetailsTable } from "@/db/schema";
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
//     const mainland = await db
//       .select()
//       .from(MainlandTable)
//       .where(eq(MainlandTable.slug, slug))
//       .limit(1);

//     if (!mainland.length) {
//       return NextResponse.json(
//         { success: false, message: "Freezone not found" },
//         { status: 404 }
//       );
//     }

//     // Fetch details using freezone id
//     const details = await db
//       .select()
//       .from(mainlandDetailsTable)
//       .where(eq(mainlandDetailsTable.mainlandId, mainland[0].id))
//       .limit(1);

//     return NextResponse.json({
//       success: true,
//       data: {
//         ...mainland[0],
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



// import { db } from "@/db";
// import { MainlandTable, mainlandDetailsTable } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { NextResponse } from "next/server";

// // In-memory cache with TTL
// const cache = new Map<string, { data: any; expiresAt: number }>();
// const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

// // Cache cleanup interval (runs every 10 minutes)
// if (typeof setInterval !== 'undefined') {
//   setInterval(() => {
//     const now = Date.now();
//     for (const [key, value] of cache.entries()) {
//       if (value.expiresAt < now) {
//         cache.delete(key);
//       }
//     }
//   }, 10 * 60 * 1000);
// }

// function getCacheKey(slug: string): string {
//   return `mainland:${slug}`;
// }

// function getFromCache(slug: string) {
//   const cacheKey = getCacheKey(slug);
//   const cached = cache.get(cacheKey);
  
//   if (cached && cached.expiresAt > Date.now()) {
//     return cached.data;
//   }
  
//   // Remove expired cache
//   if (cached) {
//     cache.delete(cacheKey);
//   }
  
//   return null;
// }

// function setCache(slug: string, data: any) {
//   const cacheKey = getCacheKey(slug);
//   cache.set(cacheKey, {
//     data,
//     expiresAt: Date.now() + CACHE_TTL,
//   });
// }

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ slug: string }> }
// ) {
//   try {
//     const { slug } = await context.params;

//     if (!slug) {
//       return NextResponse.json(
//         { success: false, message: "Slug is required" },
//         { status: 400 }
//       );
//     }

//     // Check cache first
//     const cachedData = getFromCache(slug);
//     if (cachedData) {
//       return NextResponse.json({
//         success: true,
//         data: cachedData,
//         cached: true,
//       });
//     }

//     // Single optimized query with JOIN
//     const result = await db
//       .select({
//         id: MainlandTable.id,
//         name: MainlandTable.name,
//         slug: MainlandTable.slug,
//         details: {
//           id: mainlandDetailsTable.id,
//           mainlandId: mainlandDetailsTable.mainlandId,
//           description: mainlandDetailsTable.description,
//           benefits: mainlandDetailsTable.benefits,
//           licenseTypes: mainlandDetailsTable.licenseTypes,
//           buesinessProcess: mainlandDetailsTable.buesinessProcess,
//           createdAt: mainlandDetailsTable.createdAt,
//           updatedAt: mainlandDetailsTable.updatedAt,
//         },
//       })
//       .from(MainlandTable)
//       .leftJoin(
//         mainlandDetailsTable,
//         eq(MainlandTable.id, mainlandDetailsTable.mainlandId)
//       )
//       .where(eq(MainlandTable.slug, slug))
//       .limit(1);

//     if (!result.length) {
//       return NextResponse.json(
//         { success: false, message: "Mainland not found" },
//         { status: 404 }
//       );
//     }

//     const mainland = result[0];
//     const responseData = {
//       id: mainland.id,
//       name: mainland.name,
//       slug: mainland.slug,
//       details: mainland.details.id ? mainland.details : null,
//     };

//     // Store in cache
//     setCache(slug, responseData);

//     return NextResponse.json({
//       success: true,
//       data: responseData,
//       cached: false,
//     });
//   } catch (error) {
//     console.error("Mainland Fetch Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// // Optional: Cache invalidation endpoint
// export async function DELETE(
//   req: Request,
//   context: { params: Promise<{ slug: string }> }
// ) {
//   try {
//     const { slug } = await context.params;
//     const cacheKey = getCacheKey(slug);
//     cache.delete(cacheKey);

//     return NextResponse.json({
//       success: true,
//       message: "Cache cleared",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: "Failed to clear cache" },
//       { status: 500 }
//     );
//   }
// }


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/db";
import { MainlandTable, mainlandDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// In-memory cache with TTL
const cache = new Map<string, { data: any; expiresAt: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCacheKey(slug: string): string {
  return `mainland:${slug}`;
}

function getFromCache(slug: string) {
  const cacheKey = getCacheKey(slug);
  const cached = cache.get(cacheKey);
  
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }
  
  if (cached) {
    cache.delete(cacheKey);
  }
  
  return null;
}

function setCache(slug: string, data: any) {
  const cacheKey = getCacheKey(slug);
  cache.set(cacheKey, {
    data,
    expiresAt: Date.now() + CACHE_TTL,
  });
}

export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const startTime = performance.now();
  const timings: Record<string, number> = {};

  try {
    // Parse params
    const paramsStart = performance.now();
    const { slug } = await context.params;
    timings.parseParams = performance.now() - paramsStart;

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    // Check cache
    const cacheStart = performance.now();
    const cachedData = getFromCache(slug);
    timings.cacheCheck = performance.now() - cacheStart;

    if (cachedData) {
      timings.total = performance.now() - startTime;
      return NextResponse.json({
        success: true,
        data: cachedData,
        cached: true,
        timings,
      });
    }

    // Database query - SELECT fields flat, not nested
    const dbStart = performance.now();
    const result = await db
      .select({
        // Mainland fields
        id: MainlandTable.id,
        name: MainlandTable.name,
        slug: MainlandTable.slug,
        // Details fields - flattened
        detailsId: mainlandDetailsTable.id,
        detailsMainlandId: mainlandDetailsTable.mainlandId,
        description: mainlandDetailsTable.description,
        benefits: mainlandDetailsTable.benefits,
        licenseTypes: mainlandDetailsTable.licenseTypes,
        buesinessProcess: mainlandDetailsTable.buesinessProcess,
        detailsCreatedAt: mainlandDetailsTable.createdAt,
        detailsUpdatedAt: mainlandDetailsTable.updatedAt,
      })
      .from(MainlandTable)
      .leftJoin(
        mainlandDetailsTable,
        eq(MainlandTable.id, mainlandDetailsTable.mainlandId)
      )
      .where(eq(MainlandTable.slug, slug))
      .limit(1);
    
    timings.dbQuery = performance.now() - dbStart;

    if (!result.length) {
      timings.total = performance.now() - startTime;
      return NextResponse.json(
        { success: false, message: "Mainland not found", timings },
        { status: 404 }
      );
    }

    // Process response - restructure the data
    const processStart = performance.now();
    const mainland = result[0];
    
    const responseData = {
      id: mainland.id,
      name: mainland.name,
      slug: mainland.slug,
      details: mainland.detailsId ? {
        id: mainland.detailsId,
        mainlandId: mainland.detailsMainlandId,
        description: mainland.description,
        benefits: mainland.benefits,
        licenseTypes: mainland.licenseTypes,
        buesinessProcess: mainland.buesinessProcess,
        createdAt: mainland.detailsCreatedAt,
        updatedAt: mainland.detailsUpdatedAt,
      } : null,
    };
    timings.processResponse = performance.now() - processStart;

    // Cache the result
    const setCacheStart = performance.now();
    setCache(slug, responseData);
    timings.setCache = performance.now() - setCacheStart;

    timings.total = performance.now() - startTime;

    return NextResponse.json({
      success: true,
      data: responseData,
      cached: false,
      timings,
    });
  } catch (error) {
    console.error("Mainland Fetch Error:", error);
    timings.total = performance.now() - startTime;
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
        timings 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const cacheKey = getCacheKey(slug);
    cache.delete(cacheKey);

    return NextResponse.json({
      success: true,
      message: "Cache cleared",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to clear cache" },
      { status: 500 }
    );
  }
}