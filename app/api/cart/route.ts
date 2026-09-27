import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "@/app/next-auth/authOption"

export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await getServerSession(authOptions)
  const token = session?.user?.token

  if (!token) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "GET",
    cache: 'no-store',
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 })
  }

  const payload = await res.json()
  return NextResponse.json(payload)
}