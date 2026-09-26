import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

export async function GET(req:NextRequest) {

    const token = await getToken({req, screen:process.env.NEXTAUTH_SECRET})
    
    if(!token){
        return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
    }
    
    const res = await fetch ('https://ecommerce.routemisr.com/api/v1/wishlist' ,{
           method: "GET",
    headers: {
      token: token.token as string,
      "Content-Type": "application/json",
    },
    })
    if(!res.ok){
         return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
    }
    const payload = await res.json()
    return NextResponse.json(payload)
}