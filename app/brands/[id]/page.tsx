import { getSingleBrand } from '@/app/api/brands/brandsApi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type BrandDetailsProps  = {
  params: Promise < {id : string}>
}

export default async function BrandDetails({params} : BrandDetailsProps) {
  const {id} = await params
  const brand = await getSingleBrand(id)

  return (
   <>
     <div className="mx-auto max-w-8xl px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <Link href="/brands" className="hover:text-emerald-600">Brands</Link>
        <span>/</span>
        <span className="text-slate-900">{brand.name}</span>
      </div>
 
      {/* brand card */}
      <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <div className="relative mx-auto size-56 overflow-hidden rounded-xl bg-slate-50 p-6 sm:size-64">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="object-contain p-2"
          />
        </div>
 
        <h1 className="mt-6 text-2xl font-extrabold text-slate-900">{brand.name}</h1>
        <p className="mt-1 text-sm text-gray-400">/{brand.slug}</p>
 
        <p className="mt-6 text-xs text-gray-400">
          Added on{' '}
          {new Date(brand.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
 
        <Link
          href={`/shop?brand=${brand._id}`}
          className="mt-6 rounded-md bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View {brand.name} Products
        </Link>
      </div>
    </div>
   </>
  )
}
