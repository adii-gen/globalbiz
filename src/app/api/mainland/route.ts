import { db } from "@/db";
import { mainlandDetailsTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const mainland= await db.select({
                id: mainlandDetailsTable.id,
                name: mainlandDetailsTable.name
              }).from(mainlandDetailsTable);
        return NextResponse.json({
            success:true,
            data:mainland,
        })
    } catch (error) {
        return NextResponse.json({
            success:false,message:"Failed to get Mainland",error},{status:500}
        );
        
    }
}