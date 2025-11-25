import { db } from "@/db";
import { eq } from "drizzle-orm";

import { blogs } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET(req:Request) {    
    const {searchParams}=new URL(req.url)
    const id=searchParams.get("id");

    try {
        if(id){
            const blog= await db.select().from(blogs).where(eq(blogs.id,id))
                         return NextResponse.json({ success: true, blog });

        }
        const blog= await db.select().from(blogs);
             return NextResponse.json({ success: true, blog });

    } catch (error) {
        return NextResponse.json(
      { success: false, error:error},
      { status: 500 }
    );
    }
    
}