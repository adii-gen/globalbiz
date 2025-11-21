import { db } from "@/db";
import { FreezonesTable, FreezoneDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Fetch freezone base info
    const freezone = await db
      .select()
      .from(FreezonesTable)
      .where(eq(FreezonesTable.id, params.id))
      .limit(1);

    if (!freezone.length)
      return NextResponse.json(
        { success: false, message: "Freezone not found" },
        { status: 404 }
      );

    // Fetch extra details
    const details = await db
      .select()
      .from(FreezoneDetailsTable)
      .where(eq(FreezoneDetailsTable.freezoneId, params.id))
      .limit(1);

    return NextResponse.json({
      success: true,
      data: {
        ...freezone[0],
        details: details.length ? details[0] : null,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error fetching freezone", error },
      { status: 500 }
    );
  }
}
