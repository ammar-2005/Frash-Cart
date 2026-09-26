'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData"
import { Order } from "@/app/api/types/OrderType"

export async function getUserOrders(userId: string): Promise<Order[]> {
  const token = await getTokenFun()

  if (!token) {
    throw new Error("Unauthorized")
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, {
      method: "GET",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch user orders")
    }

    return await res.json()
  } catch (error) {
    console.error("Error fetching user orders:", error)
    return []
  }
}