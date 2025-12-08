import { db } from "@/db";
import { offshoreDetailsTable, offshoreTable } from "@/db/schema";
import { NextResponse } from "next/server";

// export async function GET(){
//     try {
//         const offshore= await db.select({id:offshoreDetailsTable.id,name:offshoreDetailsTable.Name}).from(offshoreDetailsTable);
//         return NextResponse.json({
//             success:true,
//             data:offshore,
//         })
//     } catch (error) {
//         return NextResponse.json({
//             success:false,message:"Failed to get Mainland",error},{status:500}
//         );
        
//     }
// }


export async function GET() {
  const start = Date.now();
  
  try {
    const dbStart = Date.now();
    const offshore = await db
      .select({
        id: offshoreDetailsTable.id,
        name: offshoreDetailsTable.Name
      })
      .from(offshoreDetailsTable);
    
    console.log('DB query time:', Date.now() - dbStart, 'ms');
    console.log('Total time:', Date.now() - start, 'ms');
    
    return NextResponse.json({
      success: true,
      data: offshore,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to get data" },
      { status: 500 }
    );
  }
}