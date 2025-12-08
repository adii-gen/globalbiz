import { db } from "@/db";
import { offshoreDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );
    }

    const details = await db
      .select()
      .from(offshoreDetailsTable)
      .where(eq(offshoreDetailsTable.id, id))
      .limit(1);

    return NextResponse.json({
      success: true,
      data: {
        details: details[0],
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
