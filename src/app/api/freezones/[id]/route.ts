import { db } from "@/db";
import { FreezoneDetailsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest, 
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // Validate ID
    if (!id || id.trim() === '') {
      return NextResponse.json(
        { success: false, message: "Valid ID is required" },
        { status: 400 }
      );
    }

    // Fetch details using freezone id
    const details = await db
      .select()
      .from(FreezoneDetailsTable)
      .where(eq(FreezoneDetailsTable.id, id))
      .limit(1);

    // Check if details found
    if (!details || details.length === 0) {
      return NextResponse.json(
        { success: false, message: "Freezone details not found" },
        { status: 404 }
      );
    }

    // Return with caching headers
    return NextResponse.json(
      {
        success: true,
        data: {
          details: details[0],
        },
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        }
      }
    );

  } catch (error) {
    console.error("Freezone Fetch Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch freezone details",
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// PUT - Update freezone detail
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const updated = await db
      .update(FreezoneDetailsTable)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(FreezoneDetailsTable.id, id))
      .returning();

    if (!updated || updated.length === 0) {
      return NextResponse.json(
        { success: false, message: "Freezone detail not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated[0],
    });

  } catch (error) {
    console.error("Freezone Update Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update freezone detail" },
      { status: 500 }
    );
  }
}

// DELETE - Delete freezone detail
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(FreezoneDetailsTable)
      .where(eq(FreezoneDetailsTable.id, id))
      .returning();

    if (!deleted || deleted.length === 0) {
      return NextResponse.json(
        { success: false, message: "Freezone detail not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Freezone detail deleted successfully",
    });

  } catch (error) {
    console.error("Freezone Delete Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete freezone detail" },
      { status: 500 }
    );
  }
}