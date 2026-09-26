'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData"
import { ShippingAddress } from "@/app/api/types/OrderType"

export async function createCashOrder({
  cartId,
  shippingAddress,
}: {
  cartId: string
  shippingAddress: ShippingAddress
}) {
  const token = await getTokenFun()

  if (!token) {
    throw new Error("Unauthorized")
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`, {
      method: "POST",
      body: JSON.stringify({ shippingAddress }),
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