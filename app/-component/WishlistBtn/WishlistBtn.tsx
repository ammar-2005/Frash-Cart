'use client'
import { addToWishlist } from '@/app/api/action/WishlistAction/addToWishlist'
import { toast } from '@/components/ui/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function WishlistBtn({ prodId, cls }: { prodId: string; cls?: string }) {
  const query = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      toast.add({
        type: 'success',
        description: 'Product added to wishlist',
      })
      query.invalidateQueries({ queryKey: ['getWishlist'] })
    },
    onError: () => {
      toast.add({
        type: 'error',
        description: 'Login first',
      })
    },
  })

  return (
    <button
      type="button"
      aria-label="Add to wishlist"
      onClick={(e) => {
        e.preventDefault()
        mutate(prodId)
      }}
      className={
        cls ??
        'flex size-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-emerald-600 hover:text-white'
      }
    >
      <HeartIcon className="size-4" />
    </button>
  )
}