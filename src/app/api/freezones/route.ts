import { db } from "@/db";
import { FreezoneDetailsTable, FreezonesTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const freezones = await db.select({id:FreezoneDetailsTable.id,name:FreezoneDetailsTable.name}).from(FreezoneDetailsTable);

    return NextResponse.json({
      success: true,
      data: freezones,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch freezones", error },
      { status: 500 }
    );
  }
}



// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { db } from "@/db";
// import { FreezoneDetailsTable, FreezonesTable } from "@/db/schema";
// import { NextResponse } from "next/server";

// // Cache variables
// let cachedData: any = null;
// let cacheTimestamp = 0;
// const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// // Must be named exactly "GET" for Next.js to recognize it
// export async function GET() {
//   try {
//     const now = Date.now();
    
//     // Return cached data if still valid
//     if (cachedData && (now - cacheTimestamp) < CACHE_DURATION) {
//       return NextResponse.json(
//         {
//           success: true,
//           data: cachedData,
//           cached: true,
//         },
//         {
//           headers: {
//             'Cache-Control': 'public, s-maxage=3600',
//           },
//         }
//       );
//     }

//     // Fetch fresh data
//     const freezones = await db.select().from(FreezoneDetailsTable);
    
//     // Update cache
//     cachedData = freezones;
//     cacheTimestamp = now;

//     return NextResponse.json(
//       {
//         success: true,
//         data: freezones,
//         cached: false,
//       },
//       {
//         headers: {
//           'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
//         },
//       }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: "Failed to fetch freezones", error },
//       { status: 500 }
//     );
//   }
// }