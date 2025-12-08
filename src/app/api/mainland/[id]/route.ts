

import { db } from "@/db";
import {  MainlandTable, mainlandDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    // Await the params first
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );
    }

    // Fetch main freezone by id
   
    // Fetch details using freezone id
    const details = await db
      .select()
      .from(mainlandDetailsTable)
      .where(eq(mainlandDetailsTable.id, id));

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

