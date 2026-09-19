'use client'
import React from 'react'
import { getCart } from '@/app/api/action/CartActiona/getCart';
import { useQuery } from '@tanstack/react-query';



export default  function cartComp() {
    // await  getCart()
    const { data:cartData } = useQuery({
        queryKey:['getCart'],
        queryFn: async () => {
            const res = await fetch('/api/cart')
            if(!res.ok) throw new Error(' Error to call api')
                return res.json()
        }
    })
  return (
    <div>cartComp</div>
  )
}
