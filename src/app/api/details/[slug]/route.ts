// // app/api/details/[slug]/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { db } from '@/db';
// import { eq } from 'drizzle-orm';
// import { details } from '@/db/schema';

// // Type definitions
// interface LicenseType {
//   image?: string | null;
//   heading: string;
//   description?: string | null;
// }

// interface BusinessProcess {
//   image?: string | null;
//   heading: string;
//   description?: string | null;
// }

// interface SubFreezone {
//   name: string;
//   benefits: string[] | null;
//   description: string | null;
//   businessEntitiesAllowed: Array<{
//     title: string;
//     description?: string | null;
//   }>;
// }

// interface BusinessEntity {
//   title: string;
//   description?: string | null;
// }

// interface DetailData {
//   id: string;
//   name: string;
//   slug: string;
//   description: string | null;
//   benefits: string[] | null;
//   licenseTypes: LicenseType[] | null;
//   subFreezones: SubFreezone[] | null;
//   businessEntities: BusinessEntity[] | null;
//   buesinessProcess: BusinessProcess[] | null;
//   understanding: any | null;
//   prerequisites: any | null;
//   perks: any[] | null;
//   createdAt: string;
//   updatedAt: string;
// }



// // In-memory cache
// const cache = new Map<string, { data: DetailData; timestamp: number }>();
// const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   const startTime = Date.now();

//   try {
//     const { slug } = await params;

//     if (!slug) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Slug parameter is required",
//           data: null
//         },
//         { status: 400 }
//       );
//     }

//     // Check cache first
//     const cached = cache.get(slug);
//     const now = Date.now();

//     if (cached && (now - cached.timestamp) < CACHE_TTL) {
//       const responseTime = Date.now() - startTime;
//       return NextResponse.json(
//         {
//           success: true,
//           message: "Details fetched successfully",
//           data: cached.data
//         },
//         {
//           status: 200,
//           headers: {
//             'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
//             'X-Cache': 'HIT',
//             'X-Response-Time': `${responseTime}ms`
//           }
//         }
//       );
//     }

//     // Fetch from database using Drizzle
//     const result = await db
//       .select()
//       .from(details)
//       .where(eq(details.slug, slug))
//       .limit(1);

//     if (!result || result.length === 0) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Details not found",
//           data: null
//         },
//         { status: 404 }
//       );
//     }

//     const data = result[0];

//     // Transform dates to strings
//     const transformedData: DetailData = {
//       ...data,
//       createdAt: data.createdAt.toISOString(),
//       updatedAt: data.updatedAt.toISOString(),
//     };

//     // Update cache
//     cache.set(slug, { data: transformedData, timestamp: now });

//     // Clean up old cache entries
//     if (cache.size > 100) {
//       const entries = Array.from(cache.entries());
//       entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
//       entries.slice(0, 50).forEach(([key]) => cache.delete(key));
//     }

//     const responseTime = Date.now() - startTime;

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Details fetched successfully",
//         data: transformedData
//       },
//       {
//         status: 200,
//         headers: {
//           'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
//           'X-Cache': 'MISS',
//           'X-Response-Time': `${responseTime}ms`
//         }
//       }
//     );
//   } catch (error) {
//     console.error('Error fetching details:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Internal server error",
//         data: null
//       },
//       { status: 500 }
//     );
//   }
// }

// export const dynamic = 'force-dynamic';
// export const revalidate = 300;



// Type definitions
// app/api/details/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { details } from '@/db/schema';

// Type definitions matching database schema
// interface LicenseType {
//   image?: string;
//   heading: string;
//   description?: string;
// }

// interface BusinessProcess {
//   image?: string;
//   heading: string;
//   description?: string;
// }

// interface SubFreezone {
//   name: string;
//   description?: string;
//   image?: string;
//   benefits?: string[];
//   businessEntitiesAllowed?: Array<{
//     title: string;
//     description?: string;
//   }>;
// }

// interface BusinessEntity {
//   title: string;
//   description?: string;
// }

// interface DetailData {
//   id: string;
//   name: string;
//   slug: string;
//   description: string | null;
//   benefits: string[] | null;
//   licenseTypes: LicenseType[] | null;
//   subFreezones: SubFreezone[] | null;
//   businessEntities: BusinessEntity[] | null;
//   buesinessProcess: BusinessProcess[] | null;
//   understanding: any | null;
//   prerequisites: any | null;
//   perks: any[] | null;
//   createdAt: string;
//   updatedAt: string;
// }

export interface LicenseType {
  image?: string;
  heading: string;
  description?: string;
}

export interface BusinessProcess {
  image?: string;
  heading: string;
  description?: string;
}

export interface BusinessEntity {
  title: string;
  description?: string;
}

export interface SubFreezone {
  name: string;
  description?: string;
  image?: string;
  benefits?: string[];
  businessEntitiesAllowed?: {
    title: string;
    description?: string;
  }[];
}

export interface Perk {
  image?: string;
  description?: string;
}

export interface DetailData {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  benefits: string[] | null;
  licenseTypes: LicenseType[] | null;
  subFreezones: SubFreezone[] | null;
  businessEntities: BusinessEntity[] | null;
  buesinessProcess: BusinessProcess[] | null;
  understanding: string[] | null;
  prerequisites: string[] | null;
  perks: Perk[] | null;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: DetailData;
}

export async function GET(
  request: NextRequest,
{ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug parameter is required",
          data: null
        },
        { status: 400 }
      );
    }

    const result = await db
      .select()
      .from(details)
      .where(eq(details.slug, slug))
      .limit(1);

    if (!result || result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Details not found",
          data: null
        },
        { status: 404 }
      );
    }

    const data = result[0];

    const transformedData: DetailData = {
      ...data,
      createdAt: data.createdAt.toISOString(),
      updatedAt: data.updatedAt.toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Details fetched successfully",
        data: transformedData
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching details:', error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        data: null
      },
      { status: 500 }
    );
  }
}