'use client'
import { addToCart } from '@/app/api/action/CartActiona/AddToCart'
import { toast } from '@/components/ui/toast'
import { useMutation } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

export default  function AddBtn({cls , child ,prodId} : {cls:string , child:ReactNode , prodId:string}) {
    // call API

      async function handleAddToCart(){
         mutate(prodId)
       }
       const { data , mutate} = useMutation({
        mutationFn:addToCart,
        onSuccess:() =>{
           toast.add({
            type:'success',
            description:' the Product added to cart'
          })

        },
        onError:() =>{
            toast.add({
            type:'error',
            description:' Login first  '
          })

        },


       })

  return (
    <>
    <button onClick={handleAddToCart} className={cls}>
        {child}
    </button>
    
    
    </>
  )
}
