


// import { db } from "@/db";
// import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
// import { eq } from "drizzle-orm";
// import { NextResponse } from "next/server";

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     if (!params?.id) {
//       return NextResponse.json(
//         { success: false, message: "Freezone ID is required" },
//         { status: 400 }
//       );
//     }

//     // Fetch Freezone + Details in parallel for efficiency
//     const [freezone, details] = await Promise.all([
//       db
//         .select()
//         .from(FreezonesTable)
//         .where(eq(FreezonesTable.id, params.id))
//         .limit(1),

//       db
//         .select()
//         .from(FreezoneDetailsTable)
//         .where(eq(FreezoneDetailsTable.freezoneId, params.id))
//         .limit(1),
//     ]);

//     if (!freezone.length) {
//       return NextResponse.json(
//         { success: false, message: "Freezone not found" },
//         { status: 404 }
//       );
//     }

//     // Clean response shape
//     const response = {
//       ...freezone[0],
//       details: details.length ? details[0] : null,
//     };

//     return NextResponse.json({ success: true, data: response });
//   } catch (error) {
//     console.error("Freezone Fetch Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

import { db } from "@/db";
import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    if (!params?.slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    // Step 1: Fetch base freezone using slug
    const freezone = await db
      .select()
      .from(FreezonesTable)
      .where(eq(FreezonesTable.slug, params.slug))
      .limit(1);

    if (!freezone.length) {
      return NextResponse.json(
        { success: false, message: "Freezone not found" },
        { status: 404 }
      );
    }

    // Step 2: Fetch details using returned freezone ID
    const details = await db
      .select()
      .from(FreezoneDetailsTable)
      .where(eq(FreezoneDetailsTable.freezoneId, freezone[0].id))
      .limit(1);

    return NextResponse.json({
      success: true,
      data: {
        ...freezone[0],
        details: details.length ? details[0] : null,
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
