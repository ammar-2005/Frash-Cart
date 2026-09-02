"use client"
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ArrowPathIcon, EyeIcon } from '@heroicons/react/24/outline'
import { PlusIcon, StarIcon } from '@heroicons/react/24/solid'
import { ProductType } from '@/app/Api/types/ProductType'

export default function ProductCart({ product }: { product: ProductType }) {
  const rating = product.ratingsAverage ?? 0
  const ratingsCount = product.ratingsQuantity ?? 0

  return (
    <div className="group relative w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl  mx-5 ">
      {/* floating action icons */}
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        <button
          type="button"
          aria-label="Add to wishlist"
          className="flex size-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-emerald-600 hover:text-white"
        >
          <HeartIcon className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Compare"
          className="flex size-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-emerald-600 hover:text-white"
        >
          <ArrowPathIcon className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Quick view"
          className="flex size-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-emerald-600 hover:text-white"
        >
          <EyeIcon className="size-4" />
        </button>
      </div>
       {/* product item */}
      <Link href={`/ProductDetails/${product._id}`}>
      {/* details item */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageCover}
            alt={product.title}
            width={500}
            height={500}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {product.priceAfterDiscount && (
            <span className="absolute left-0 top-0 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
              Sale
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-col">
          <p className="text-xs font-medium text-slate-400">{product.category?.name}</p>
          <h2 className="mt-1 line-clamp-1 text-base font-bold text-slate-900">
            {product.title}
          </h2>

          <div className="mt-2 flex items-center gap-1.5">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`size-4 ${
                    i < Math.round(rating) ? 'text-amber-400' : 'text-slate-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-slate-400">
              {rating.toFixed(1)} ({ratingsCount})
            </span>
          </div>

          <div className="mt-2 flex items-end justify-between">
            <div>
              {product.priceAfterDiscount ? (
                <div className="flex items-center gap-2">
                  <p className="text-xl font-extrabold text-slate-900">
                    {product.priceAfterDiscount} EGP
                  </p>
                  <p className="text-sm text-slate-400 line-through">{product.price} EGP</p>
                </div>
              ) : (
                <p className="text-xl font-extrabold text-slate-900">{product.price} EGP</p>
              )}
            </div>

            <button
              type="button"
              aria-label="Add to cart"
              onClick={(e) => e.preventDefault()}
              className="flex size-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition hover:bg-emerald-700"
            >
              <PlusIcon className="size-5" />
            </button>
          </div>
        </div>

      </Link>
    </div>
  )
}