'use client'
import React from 'react'
import { getCart } from '@/app/api/action/CartActiona/getCart';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CartResponseType, product2 } from '../../api/types/CartType';
import Link from 'next/link'
import { Square3Stack3DIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { deleteCart } from '@/app/api/action/deleteCart';
import { toast } from '@/components/ui/toast';
import { upDateCart } from '@/app/api/action/upDateCart';



export default function CartComp() {
  const query = useQueryClient()
    
    // call api
    const { data:cartData , isLoading } = useQuery<CartResponseType>({
        queryKey:['getCart'],
        queryFn: async () => {
            const res = await fetch('/api/cart')
            if(!res.ok) throw new Error(' Error to call api')
                return res.json()
        }
    })
    // delete item
    const{data:deleteData ,mutate:deleteCartItem ,} = useMutation({
      mutationFn: deleteCart ,
      onSuccess: () => {
       toast.add({
         type:'success',
         description:'Product Delete Successfully'
       })
       query.invalidateQueries({queryKey:['getCart']})
      },
      onError: () => {
         toast.add({
         type:'error',
         description:'Failed'
       })
      }
    })

    // upDate Cart
        const{data:upDateCartItem ,mutate:updateCartItem ,} = useMutation({
      mutationFn: upDateCart ,
      onSuccess: () => {
       toast.add({
         type:'success',
         description:'Product UpDate Successfully'
       })
       query.invalidateQueries({queryKey:['getCart']})
      },
      onError: () => {
         toast.add({
         type:'error',
         description:'Failed'
       })
      }
    })
    // handleupdate
    function HandleUpdateCart(prodId:string , count:number){
      updateCartItem({prodId , count})

    }

  if(isLoading) {
    return <h2>
       Loading...
    </h2>
  }

  return (
   <>
   {cartData?.numOfCartItems ? <section className="w-full bg-white dark:bg-[#0A2025]  ">
    
    <div className="inset-0 bg-linear-to-r from-emerald-600/90 via-emerald-500/70 to-emerald-400/40 py-10 px-10 rounded-xl ">
      {/* breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRightIcon className="size-3.5" />
              <span className="text-white">
                  Shopping Cart
              </span>
              
            </div>
          <h1 className="text-start text-white text-[25px] font-semibold leading-9.5">
                Shopping Cart
        </h1>
        
            <p className="text-start text-white text-xl font-normal leading-5.5 mt-5">
               You have  <span  className="text-green-300"> {cartData?.numOfCartItems} item </span> in your Cart 
              
           </p>
    </div>

  <div className="flex items-start mt-8 gap-6">
    {/* tables */}
    <div className="bg-white p-4 w-200 rounded-xl">
      <table className="w-full bg-white rounded-xl">
        <thead>
          <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-3.5 tracking-wide">
            <th className="text-left px-2 py-2">Product</th>
            <th className="px-2 py-2">price</th>
            <th className="px-2 py-2">Quantity</th>
            <th className="px-2 py-2">Subtotal</th>
            <th className="w-7 px-2 py-2" />
          </tr>
        </thead>
        <tbody>
          {cartData?.data.products.map( (product) =>  <tr className="text-center" key={product._id}>
            <td className="px-2 py-2 text-left align-top">
             <img src={product.product.imageCover} alt={product.product.title}  className="w-20 h-20 object-cover rounded-md" />
            </td>
            <td className="px-2 py-2">{product.price} EGP</td>
          <td className="p-2 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
  {/* btn - count */}
  <svg
    onClick={() => HandleUpdateCart(product.product._id, product.count - 1)}
    width={14}
    height={15}
    className="cursor-pointer"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.33398 7.5H11.6673" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

  {/* count number */}
  <span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">
    {product.count}
  </span>

  {/* btn + count */}
  <svg
    onClick={() => HandleUpdateCart(product.product._id, product.count + 1)}
    className="cursor-pointer relative"
    width={14}
    height={15}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</td>
            <td className="px-2 py-2">{product.count * product.price}</td>
            {/* Delete button */}
            <td className="px-2 py-2">
              <svg onClick={() => {deleteCartItem(product.product._id)}} width={24} className="cursor-pointer" height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z" stroke="#CCCCCC" strokeMiterlimit={10} />
                <path d="M16 8.5L8 16.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 16.5L8 8.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </td>
          </tr>)}
         
         
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-400">
            <td className="px-2 py-2" colSpan={3}>
              <button className="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]">
                Return to shop
              </button>
            </td>
            <td className="px-2 py-2" colSpan={2}>
              <button className="px-8 py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]">
                Update Cart
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div className="w-106 bg-white rounded-lg p-6">
      <h2 className="text-[#191919] mb-2 text-xl font-medium leading-7.5">
        Cart Total
      </h2>
      <div className="w-94 py-3 justify-between items-center flex">
        <span className="text-[#4c4c4c] text-base font-normal leading-normal">Total:</span><span className="text-[#191919] text-base font-semibold leading-tight">{cartData?.data.totalCartPrice} EGP</span>
      </div>
      <div className="w-94 py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
        <span className="text-[#4c4c4c] text-sm font-normal leading-5.25">Shipping:</span><span className="text-[#191919] text-sm font-medium leading-5.25">Free</span>
      </div>
      <div className="w-94 py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
        <span className="text-[#4c4c4c] text-sm font-normal leading-5.25">Subtotal:</span>
        <span className="text-[#191919] text-sm font-medium leading-5.25">{cartData?.numOfCartItems}</span>
      </div>
      <Link
        href="/addresses"
        className="block w-94 text-white mt-5 px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight"
      >
        Proceed to checkout
      </Link>
    </div>
  </div>

  
</section> : <h2 className="text-center py-10 text-xl font-semibold text-slate-500">Your cart is empty</h2>   }
   

   
   
   </>

  )
}
