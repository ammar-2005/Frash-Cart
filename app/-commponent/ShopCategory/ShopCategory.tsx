import { getShopCategory } from '@/app/Api/Service/Categories'
import Link from "next/link"
import Image from 'next/image'
import React from 'react'

export default async function ShopCategory() {
  const data = await getShopCategory()

  return (
    <section className="my-7 bg-white p-5 ">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-slate-900">
          <span className="h-10 w-1 rounded-full bg-emerald-600" />
          Shop By <span className="text-emerald-600">Category</span>
        </h2>
        <a className="text-xs text-emerald-600 transition-colors hover:text-emerald-700" href="/categories">
          View All Categories <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map((category) => (
          <Link href={`/categories/${category.slug}`} className="flex min-h-30 flex-col items-center justify-center border border-slate-100 px-2 py-3 transition-shadow hover:shadow-md" 
          key={category._id}>  
       
            <Image
              src={category.image}
              alt={category.name}
              width={64}
              height={64}
              className="h-20 w-20 rounded-full object-cover"
            />
            <h3 className="mt-3 text-center text-xl font-medium text-slate-700">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
