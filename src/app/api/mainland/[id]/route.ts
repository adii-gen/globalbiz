import { db } from "@/db";
import {  mainlandDetailsTable } from "@/db/schema";
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

    // Fetch details using mainland id
    const details = await db
      .select()
      .from(mainlandDetailsTable)
      .where(eq(mainlandDetailsTable.id, id));

    // Check if details found
    if (!details || details.length === 0) {
      return NextResponse.json(
        { success: false, message: "Mainland details not found" },
        { status: 404 }
      );
    }

    // Return with caching headers
    return NextResponse.json(
      {
        success: true,
        data: {
          details: details,
        },
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        }
      }
    );

  } catch (error) {
    console.error("Mainland Fetch Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch mainland details",
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

// POST - Create new mainland detail
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Mainland ID is required" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.title || !body.description) {
      return NextResponse.json(
        { success: false, message: "Title and description are required" },
        { status: 400 }
      );
    }

    const newDetail = await db
      .insert(mainlandDetailsTable)
      .values({
        ...body,
        mainlandId: id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        data: newDetail[0],
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Mainland Create Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create mainland detail" },
      { status: 500 }
    );
  }
}

// PUT - Update mainland detail
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
      .update(mainlandDetailsTable)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(mainlandDetailsTable.id, id))
      .returning();

    if (!updated || updated.length === 0) {
      return NextResponse.json(
        { success: false, message: "Mainland detail not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated[0],
    });

  } catch (error) {
    console.error("Mainland Update Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update mainland detail" },
      { status: 500 }
    );
  }
}

// DELETE - Delete mainland detail
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
      .delete(mainlandDetailsTable)
      .where(eq(mainlandDetailsTable.id, id))
      .returning();

    if (!deleted || deleted.length === 0) {
      return NextResponse.json(
        { success: false, message: "Mainland detail not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mainland detail deleted successfully",
    });

  } catch (error) {
    console.error("Mainland Delete Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete mainland detail" },
      { status: 500 }
    );
  }
}