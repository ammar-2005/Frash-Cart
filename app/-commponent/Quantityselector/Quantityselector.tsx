"use client"

import React from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function QuantitySelector({ available }: { available: number }) {
  const [quantity, setQuantity] = React.useState(1)

  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1))
  const increase = () => setQuantity((prev) => Math.min(available, prev + 1))

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">Quantity</label>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-lg border border-gray-300">
          <button
            type="button"
            onClick={decrease}
            aria-label="Decrease quantity"
            className="flex size-10 items-center justify-center text-slate-600 hover:text-emerald-600 disabled:opacity-40"
            disabled={quantity <= 1}
          >
            <MinusIcon className="size-4" />
          </button>
          <span className="w-8 text-center text-base font-medium text-slate-900">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increase}
            aria-label="Increase quantity"
            className="flex size-10 items-center justify-center text-slate-600 hover:text-emerald-600 disabled:opacity-40"
            disabled={quantity >= available}
          >
            <PlusIcon className="size-4" />
          </button>
        </div>
        <span className="text-sm text-slate-400">{available} available</span>
      </div>
    </div>
  )
}