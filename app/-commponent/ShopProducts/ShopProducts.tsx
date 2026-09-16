'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import ProductCart from '@/app/-commponent/ProductCart/ProductCart'
import { ProductType } from '@/app/api/types/ProductType'

export default function ShopProducts({ products }: { products: ProductType[] }) {
  const [keyword, setKeyword] = useState('')

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <div >
      {/* search bar */}
      <div className="relative w-full sm:max-w-xs flex item-center">
        <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400 mt-2" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-400 mt-5"
        />
      </div>

      {/* products grid */}
      {filteredProducts.length === 0 ? (
        <p className="py-16 text-center text-gray-500 ">No products found.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
          {filteredProducts.map((product) => (
            <ProductCart product={product} key={product._id} />
          ))}
        </div>
      )}
    </div>
  )
}