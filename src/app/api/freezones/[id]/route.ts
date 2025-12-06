
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

    // Fetch main freezone by slug
    // const freezone = await db
    //   .select()
    //   .from(FreezonesTable)
    //   .where(eq(FreezonesTable.id, id))
    //   .limit(1);

    // if (!freezone.length) {
    //   return NextResponse.json(
    //     { success: false, message: "Freezone not found" },
    //     { status: 404 }
    //   );
    // }

    // Fetch details using freezone id
    const details = await db
      .select()
      .from(FreezoneDetailsTable)
      .where(eq(FreezoneDetailsTable.freezoneId, id))
      .limit(1);

    return NextResponse.json({
      success: true,
      data: {
        details: details,
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
