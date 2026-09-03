"use client"
import React from 'react'

import { BarLoader } from 'react-spinners'
export default function loading() {
  return (
    <div className="flex items-center justify-center p-4 h-screen bg-gray-100">
      <BarLoader color="#059669"/>
    </div>
  )
}
