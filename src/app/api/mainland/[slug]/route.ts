

import { db } from "@/db";
import {  MainlandTable, mainlandDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    // Await the params first
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    // Fetch main freezone by slug
    const mainland = await db
      .select()
      .from(MainlandTable)
      .where(eq(MainlandTable.slug, slug))
      .limit(1);

    if (!mainland.length) {
      return NextResponse.json(
        { success: false, message: "Freezone not found" },
        { status: 404 }
      );
    }

    // Fetch details using freezone id
    const details = await db
      .select()
      .from(mainlandDetailsTable)
      .where(eq(mainlandDetailsTable.mainlandId, mainland[0].id))
      .limit(1);

    return NextResponse.json({
      success: true,
      data: {
        ...mainland[0],
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
