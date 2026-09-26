 'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function MyProvider({children}: {children:React.ReactNode}) {
  return <SessionProvider>
    {/* app */}
    {children}
  </SessionProvider>
}
