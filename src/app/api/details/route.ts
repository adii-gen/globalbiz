/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";
import { details } from "@/db/schema";
import { sql } from "drizzle-orm";

// TypeScript interface for incoming data
interface DetailInput {
  name: string;
  slug: string;
  description?: string;

  benefits?: string[];
  licenseTypes?: {
    image?: string;
    heading: string;
    description?: string;
  }[];
  subFreezones?: {
    name: string;
    description?: string;
    image?: string;
    benefits?: string[];
    businessEntitiesAllowed?: {
      title: string;
      description?: string;
    }[];
  }[];
  businessEntities?: {
    title: string;
    description?: string;
  }[];
  buesinessProcess?: {
    image?: string;
    heading: string;
    description?: string;
  }[];
  understanding?: string[];
  prerequisites?: string[];
  perks?: {
    image?: string;
    description?: string;
  }[];
}

// ================================
// ✔ POST API (Single + Array Both)
// ================================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Convert single object → array
    const payload: DetailInput[] = Array.isArray(body) ? body : [body];

    // Validation
    for (const item of payload) {
      if (!item.name || !item.slug) {
        return NextResponse.json(
          {
            success: false,
            message: "Each entry must include 'name' and 'slug'",
          },
          { status: 400 }
        );
      }
    }

    // Insert all items
    const result = await db.insert(details).values(payload).returning();

    return NextResponse.json(
      {
        success: true,
        message: "Details inserted successfully",
        data: result,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Error inserting details:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// ================================
// ✔ GET ALL RECORDS
// ================================
// export async function GET() {
//   try {
//     const result = await db.select().from(details);

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Details fetched successfully",
//         data: result,
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("❌ Error fetching details:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Internal Server Error",
//       },
//       { status: 500 }
//     );
//   }
// }
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const result = await db
      .select()
      .from(details)
      .limit(limit)
      .offset(offset);

    // Get total count for pagination
    const [{ count }] = await db
      .select({ count: sql`count(*)` })
      .from(details);

    return NextResponse.json(
      {
        success: true,
        message: "Details fetched successfully",
        data: result,
        pagination: {
          page,
          limit,
          total: Number(count),
          totalPages: Math.ceil(Number(count) / limit)
        }
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error fetching details:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}