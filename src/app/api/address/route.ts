import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { Address } from "@/db/schema";

// =========================
//      CREATE (POST)
// =========================
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { officeName, officeAddress, phone, email } = body;

    // Basic validation
    if (!officeName || !officeAddress || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const newAddress = await db
      .insert(Address)
      .values({
        officeName,
        officeAddress,
        phone,
        email,
      })
      .returning();

    return NextResponse.json({ success: true, data: newAddress[0] });
  } catch (error) {
    console.error("POST Address Error:", error);
    return NextResponse.json(
      { success: false, error: error},
      { status: 500 }
    );
  }
}

// =========================
//      READ (GET)
// =========================
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const item = await db.select().from(Address).where(eq(Address.id, id));
      return NextResponse.json({ success: true, data: item[0] || null });
    }

    const all = await db.select().from(Address);
    return NextResponse.json({ success: true, data: all });
  } catch (error) {
    console.error("GET Address Error:", error);
    return NextResponse.json(
      { success: false, error:error},
      { status: 500 }
    );
  }
}

// =========================
//      UPDATE (PUT)
// =========================
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing id in search params" },
        { status: 400 }
      );
    }

    const data = await request.json();

    // Basic validation
    if (!data.officeName || !data.officeAddress || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const updated = await db
      .update(Address)
      .set({
        officeName: data.officeName,
        officeAddress: data.officeAddress,
        phone: data.phone,
        email: data.email,
        updatedAt: new Date(),
      })
      .where(eq(Address.id, id))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        { success: false, error: "Address not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated[0] });
  } catch (error) {
    console.error("PUT Address Error:", error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
}

// =========================
//      DELETE (DELETE)
// =========================
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing id in search params" },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(Address)
      .where(eq(Address.id, id))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        { success: false, error: "Address not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: deleted[0] });
  } catch (error) {
    console.error("DELETE Address Error:", error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
}