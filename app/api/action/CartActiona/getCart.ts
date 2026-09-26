'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData"

export async function getCart() {
  const token = await getTokenFun()

  if (!token) {
    throw new Error("Unauthorized")
  }

  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
      method: "GET",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      throw new Error("Unauthorized")
    }
 const payload = await res.json()
    return payload
  } catch (error) {
    throw new Error("Unauthorized")
  }
}   