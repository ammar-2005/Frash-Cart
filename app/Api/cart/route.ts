import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

 export async function GET(req:NextRequest){
   const token = await  getToken({req : req})
   if(!token) return NextResponse.json({message : 'unauthorized' , statusbar:401})
       const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
      method: "GET",
      headers: {
        token: token.token,
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) { 
      return NextResponse.json({message : 'unauthorized' , statusbar:401})
    }
    const payload = await res.json
    return  NextResponse.json(payload)
}