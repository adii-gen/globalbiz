import { db } from "@/db";
import { FreezonesTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const freezones = await db.select().from(FreezonesTable);

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
