import React from 'react'
import { getShopCategory } from '@/app/api/Service/Categories'
import Link from 'next/link'
import Image from 'next/image'
import { Square3Stack3DIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default async function Categories() {
  const data = await getShopCategory()

  return (
    <>
      <div className="mx-auto max-w-10xl px-4 py-">
        {/* header */}
        <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
          <div className="absolute inset-0 bg-linear-to-r from-emerald-600/90 via-emerald-500/70 to-emerald-400/40" />

          <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-center px-6">
            {/* breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRightIcon className="size-3.5" />
              <span className="text-white">Categories</span>
            </div>

            {/* info */}
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Square3Stack3DIcon className="size-6 text-white" />
              </div>

              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                  All Categories
                </h1>
                <p className="text-sm text-white/85">
                  Browse our wide range of product categories
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* show Categories */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="group flex flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-center text-sm font-semibold text-slate-800">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}