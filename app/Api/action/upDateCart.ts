'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData"

export async function upDateCart({prodId , count} : {prodId: string , count:number}) {
  const token = await getTokenFun()

  if (!token) {
    throw new Error("Unauthorized")
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${prodId}`, {
      method: "PUT",
      body: JSON.stringify({ count: count }),
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      throw new Error("Unauthorized")
    }

    return await res.json()
  } catch (error) {
    throw new Error("Unauthorized")
  }
}   