

// import { db } from "@/db";
// import {  offshoreTable, offshoreDetailsTable } from "@/db/schema";
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
//     const offshore = await db
//       .select()
//       .from(offshoreTable)
//       .where(eq(offshoreTable.slug, slug))
//       .limit(1);

//     if (!offshore.length) {
//       return NextResponse.json(
//         { success: false, message: "offshore not found" },
//         { status: 404 }
//       );
//     }

//     // Fetch details using freezone id
//     const details = await db
//       .select()
//       .from(offshoreDetailsTable)
//       .where(eq(offshoreDetailsTable.offshoreId , offshore[0].id))
//       .limit(1);

//     return NextResponse.json({
//       success: true,
//       data: {
//         ...offshore[0],
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



import { db } from "@/db";
import { offshoreTable, offshoreDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    // Single query with JOIN - gets ALL fields automatically
    const result = await db
      .select()
      .from(offshoreTable)
      .leftJoin(offshoreDetailsTable, eq(offshoreDetailsTable.offshoreId, offshoreTable.id))
      .where(eq(offshoreTable.slug, slug))
      .limit(1);

    if (!result.length) {
      return NextResponse.json(
        { success: false, message: "offshore not found" },
        { status: 404 }
      );
    }

    // Drizzle returns: { offshore: {...}, offshore_details: {...} }
    const offshore = result[0].offshore;
    const details = result[0].offshore_details;

    return NextResponse.json({
      success: true,
      data: {
        ...offshore,
        details: details || null,
      },
    });
  } catch (error) {
    console.error("Offshore Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}