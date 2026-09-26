import React from 'react'
import CartComp from '../-commponent/CartComp/CartComp'
import { ShoppingBagIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Cart() {
  return (
    <div className="mx-auto max-w-10xl px-4 py-6">
      <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-600/90 via-emerald-500/70 to-emerald-400/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-center px-6">
          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <a href="/" className="hover:text-white">Home</a>
            <ChevronRightIcon className="size-3.5" />
            <span className="text-white">Cart</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <ShoppingBagIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">My Cart</h1>
              <p className="text-sm text-white/85">Review your products before checkout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CartComp />
      </div>
    </div>
  )
}
