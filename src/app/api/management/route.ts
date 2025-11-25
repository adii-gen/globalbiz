import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { ManagementDetails } from "@/db/schema";

// ----------------------
// GET (all or one by id)
// ----------------------
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const item = await db
        .select()
        .from(ManagementDetails)
        .where(eq(ManagementDetails.id, id));

      return NextResponse.json(item[0] || null);
    }

    const all = await db.select().from(ManagementDetails);
    return NextResponse.json(all);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

// ----------------------
// POST (Create)
// ----------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const created = await db
      .insert(ManagementDetails)
      .values({
        Name: body.Name,
        Designation: body.Designation,
        Description: body.Description,
      })
      .returning();

    return NextResponse.json(created[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

// ----------------------
// PUT (Update using searchParam id)
// ----------------------
export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id is required in search params" },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();

    const updated = await db
      .update(ManagementDetails)
      .set({
        Name: body.Name,
        Designation: body.Designation,
        Description: body.Description,
        updatedAt: new Date(),
      })
      .where(eq(ManagementDetails.id, id))
      .returning();

    return NextResponse.json(updated[0]);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

// ----------------------
// DELETE (Using searchParam id)
// ----------------------
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id is required in search params" },
      { status: 400 }
    );
  }

  try {
    const removed = await db
      .delete(ManagementDetails)
      .where(eq(ManagementDetails.id, id))
      .returning();

    return NextResponse.json(removed[0]);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}
