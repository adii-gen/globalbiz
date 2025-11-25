/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { blogs } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: any
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const blog = await db.select().from(blogs).where(eq(blogs.id, id));

    if (!blog || blog.length === 0) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Return the first blog (should be only one with that ID)
    return NextResponse.json({ success: true, blog: blog[0] });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to fetch blog",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}