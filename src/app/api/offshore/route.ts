import { db } from "@/db";
import { offshoreTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const offshore= await db.select().from(offshoreTable);
        return NextResponse.json({
            success:true,
            data:offshore,
        })
    } catch (error) {
        return NextResponse.json({
            success:false,message:"Failed to get Mainland",error},{status:500}
        );
        
    }
}