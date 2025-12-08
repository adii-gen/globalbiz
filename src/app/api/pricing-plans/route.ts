import { NextRequest, NextResponse } from 'next/server';
import { asc, eq, and } from 'drizzle-orm';
import { PricingPlanTable } from '@/db/schema';
import { db } from '@/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const isActive = searchParams.get('isActive');
    const isFeatured = searchParams.get('isFeatured');

    // Build where conditions
    const conditions = [];
    if (isActive !== null) {
      conditions.push(eq(PricingPlanTable.isActive, isActive === 'true'));
    }
    if (isFeatured !== null) {
      conditions.push(eq(PricingPlanTable.isFeatured, isFeatured === 'true'));
    }

    // Default: only show active plans if no filters specified
    if (conditions.length === 0) {
      conditions.push(eq(PricingPlanTable.isActive, true));
    }

    const pricingPlans = await db
      .select()
      .from(PricingPlanTable)
      .where(and(...conditions))
      .orderBy(asc(PricingPlanTable.order));

    return NextResponse.json(
      { success: true, data: pricingPlans },
      { 
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pricing plans' },
      { status: 500 }
    );
  }
}