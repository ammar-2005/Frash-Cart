import { getServerSession } from "next-auth"
import { authOptions } from "@/app/next-auth/authOption"
export async function getTokenFun() {
  const session = await getServerSession(authOptions)
  return session?.user?.token
}