import React from 'react'
import ShopProducts from '../-component/ShopProducts/ShopProducts';
import { getAllProduct } from '@/app/api/service/ProductApi';
import { Square3Stack3DIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default async function Shop() {
  const products = await getAllProduct()
  
  return (
   <>
   
    <div className="mx-auto max-w-10xl px-4 py-1">
      {/* header  */}
     <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-600/90 via-emerald-500/70 to-emerald-400/40" />

          <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-center px-6">
            {/* breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRightIcon className="size-3.5" />
              <span className="text-white">All Products</span>
            </div>

            {/* info */}
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Square3Stack3DIcon className="size-6 text-white" />
              </div>

              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                  All Products
                </h1>
                <p className="text-sm text-white/85">
                  Explore our complete product collection
                </p>
              </div>
            </div>
          </div>
      </div>
      {/* cart products */}
      <ShopProducts products={products} />

    </div>
   
   </>
  )
}
