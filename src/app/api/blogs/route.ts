import { db } from "@/db";
import { eq, desc } from "drizzle-orm";
import { blogs } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

// In-memory cache
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET(req: NextRequest) {    
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const now = Date.now();

    // Single blog by ID
    if (id?.trim()) {
      const cacheKey = `blog:${id}`;
      const cached = cache.get(cacheKey);

      // Return cached if valid
      if (cached && now - cached.timestamp < CACHE_DURATION) {
        return NextResponse.json(
          { success: true, data: cached.data, cached: true },
          { 
            headers: { 
              'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' 
            } 
          }
        );
      }

      // Fetch from DB
      const blog = await db
        .select()
        .from(blogs)
        .where(eq(blogs.id, id))
        .limit(1);

      if (!blog || blog.length === 0) {
        return NextResponse.json(
          { success: false, message: "Blog not found" },
          { status: 404 }
        );
      }

      const responseData = blog[0];

      // Update cache
      cache.set(cacheKey, { data: responseData, timestamp: now });

      return NextResponse.json(
        { success: true, data: responseData, cached: false },
        { 
          headers: { 
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' 
          } 
        }
      );
    }

    // All blogs
    const cacheKey = 'blogs:all';
    const cached = cache.get(cacheKey);

    // Return cached if valid
    if (cached && now - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json(
        { success: true, blog: cached.data, cached: true },
        { 
          headers: { 
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' 
          } 
        }
      );
    }

    // Fetch from DB
    const allBlogs = await db
      .select()
      .from(blogs)
    //   .orderBy(desc(blogs.createdAt));

    // Update cache
    cache.set(cacheKey, { data: allBlogs, timestamp: now });

    return NextResponse.json(
      { success: true, blog: allBlogs, cached: false },
      { 
        headers: { 
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' 
        } 
      }
    );

  } catch (error) {
    console.error("Blog Fetch Error:", error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.content) {
      return NextResponse.json(
        { success: false, message: "Title and content are required" },
        { status: 400 }
      );
    }

    const newBlog = await db
      .insert(blogs)
      .values({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    // Clear all caches
    cache.clear();

    return NextResponse.json(
      { success: true, data: newBlog[0] },
      { status: 201 }
    );

  } catch (error) {
    console.error("Blog Create Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create blog" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updated = await db
      .update(blogs)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(blogs.id, id))
      .returning();

    if (!updated || updated.length === 0) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    // Clear all caches
    cache.clear();

    return NextResponse.json({
      success: true,
      data: updated[0],
    });

  } catch (error) {
    console.error("Blog Update Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(blogs)
      .where(eq(blogs.id, id))
      .returning();

    if (!deleted || deleted.length === 0) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    // Clear all caches
    cache.clear();

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error) {
    console.error("Blog Delete Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete blog" },
      { status: 500 }
    );
  }
}