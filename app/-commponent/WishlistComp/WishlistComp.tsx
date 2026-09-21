'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { WishlistResponseType } from '@/app/api/types/WishlistType'
import { removeFromWishlist } from '@/app/api/action/WishlistAction/removeFromWishlist'
import { toast } from '@/components/ui/toast'
import { HeartIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function WishlistComp() {
  const query = useQueryClient()

  const { data: wishlistData, isLoading } = useQuery<WishlistResponseType>({
    queryKey: ['getWishlist'],
    queryFn: async () => {
      const res = await fetch('/api/wishlist')
      if (!res.ok) throw new Error('Error to call api')
      return res.json()
    },
  })

  const { mutate: removeItem } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Product removed from wishlist' })
      query.invalidateQueries({ queryKey: ['getWishlist'] })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed to remove product' })
    },
  })

  if (isLoading) {
    return <h2 className="py-10 text-center text-gray-500">Loading...</h2>
  }

  return (
    <div className="mx-auto max-w-8xl ">
      {/* header */}
      <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/90 via-rose-400/70 to-rose-300/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRightIcon className="size-3.5" />
            <span className="text-white">Wishlist</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <HeartIcon className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">My Wishlist</h1>
              <p className="text-sm text-white/85">
                {wishlistData?.count ?? 0} product{(wishlistData?.count ?? 0) !== 1 && 's'} saved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* products */}
      {!wishlistData?.count ? (
        <p className="py-16 text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {wishlistData.data.map((product) => (
            <div
              key={product._id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => removeItem(product._id)}
                aria-label="Remove from wishlist"
                className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-500 hover:text-white"
              >
                <XMarkIcon className="size-4" />
              </button>

              <Link href={`/ProductDetails/${product._id}`}>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 line-clamp-1 text-sm font-bold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm font-extrabold text-emerald-600">{product.price} EGP</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}