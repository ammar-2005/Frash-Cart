import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  console.log('=== DEBUG: token from getToken ===', token)

  if (!token) {
    console.log('=== DEBUG: no token found, returning 401 ===')
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "GET",
    headers: {
      token: token.token as string,
      "Content-Type": "application/json",
    },
  })

  console.log('=== DEBUG: external API status ===', res.status)

  if (!res.ok) {
    const errorBody = await res.text()
    console.log('=== DEBUG: external API error body ===', errorBody)
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  const payload = await res.json()
  return NextResponse.json(payload)
}  