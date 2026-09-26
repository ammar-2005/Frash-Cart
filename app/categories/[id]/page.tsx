import { getSingleCategory } from '@/app/api/service/Categories'
import Link from 'next/link';
import Image from 'next/image';
import { AArrowDown } from 'lucide-react'
import React from 'react'
type CategoryDetailsProps  ={
    params: Promise<{id: string}>
}

export default async function CategoryDetails({params} :CategoryDetailsProps ) {

    const {id} = await params
    const category = await getSingleCategory(id)
  return (
  <>
    <div className="mx-auto max-w-7xl px-5 py-12">
        {/* breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-emerald-600">Categories</Link>
        <span>/</span>
        <span className="text-slate-900">{category.name}</span>
      </div>

      {/* category card */}
      <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <div className="relative mx-auto size-56 overflow-hidden rounded-xl bg-slate-50 p-6 sm:size-64">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="mt-6 text-2xl font-extrabold text-slate-900">{category.name}</h1>
        <p className="mt-1 text-sm text-gray-400">/{category.slug}</p>

        <Link
          href={`/shop?category=${category._id}`}
          className="mt-6 rounded-md bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View {category.name} Products
        </Link>
      </div>
    </div>
  </>
  )
}
