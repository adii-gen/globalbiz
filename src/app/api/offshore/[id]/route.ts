import { db } from "@/db";
import { offshoreDetailsTable } from "@/db/schema";
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

    // Fetch details with optimized query
    const details = await db
      .select()
      .from(offshoreDetailsTable)
      .where(eq(offshoreDetailsTable.id, id))
      .limit(1);

    // Check if details found
    if (!details || details.length === 0) {
      return NextResponse.json(
        { success: false, message: "Offshore details not found" },
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
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        }
      }
    );

  } catch (error) {
    console.error("Offshore Fetch Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch offshore details",
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Add POST/PUT/DELETE methods if needed
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
      .update(offshoreDetailsTable)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(offshoreDetailsTable.id, id))
      .returning();

    if (!updated || updated.length === 0) {
      return NextResponse.json(
        { success: false, message: "Offshore details not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated[0],
    });

  } catch (error) {
    console.error("Offshore Update Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update offshore details" },
      { status: 500 }
    );
  }
}

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
      .delete(offshoreDetailsTable)
      .where(eq(offshoreDetailsTable.id, id))
      .returning();

    if (!deleted || deleted.length === 0) {
      return NextResponse.json(
        { success: false, message: "Offshore details not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Offshore details deleted successfully",
    });

  } catch (error) {
    console.error("Offshore Delete Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete offshore details" },
      { status: 500 }
    );
  }
}