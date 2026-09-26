import React from 'react'
import WishlistComp from '../-component/WishlistComp/WishlistComp'
import { HeartIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Wishlist() {
  return (
    <div className="mx-auto max-w-10xl ">


      <div className="mt-6">
        <WishlistComp />
      </div>
    </div>
  )
}
