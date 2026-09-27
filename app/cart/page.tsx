import React from 'react'
import CartComp from '../-component/CartComp/CartComp'
import { ShoppingBagIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Cart() {
  return (
    <div className="mx-auto max-w-10xl px-4 py-6">
      

      <div className="mt-6">
        <CartComp />
      </div>
    </div>
  )
}
