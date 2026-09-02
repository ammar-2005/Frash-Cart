import React from 'react'
import { getSingleProduct } from '../../Api/Service/ProductApi'
import Image from 'next/image'
import { PlusIcon, StarIcon } from '@heroicons/react/24/solid'
import QuantitySelector from '@/app/-commponent/Quantityselector/Quantityselector'
import Link from 'next/link'
type ProductDetailsProps = {
  params: Promise<{ id: string }>
}
export default async function ProductDetails({ params }: ProductDetailsProps) {
   const { id } = await params
  const data = await getSingleProduct(id)
    const rating = data.ratingsAverage ?? 0
      const ratingsCount = data.ratingsQuantity ?? 0
  return (
    <>
    <div className="bg-white my-7 flex item-center gap-3 mx-5 ">
        <Link href='/'>
        <div className=" flex gap-2 hover:text-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
          Home
        </div>
        </Link>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        </div>
        <div className=" hover:text-green-400">
            <h2>
              Details Product
            </h2>
        </div>
    </div>

      <div className="bg-white mt-5">
  <div className="container mx-auto px-4 py-8">
    {/* all img */}
    <div className="flex flex-wrap -mx-4 ">
      {/* Product Images */}
      <div className="w-full md:w-1/2 px-4 mb-8">
       <Image src={data.imageCover} alt={data.title} width={500} height={500} className="w-full h-auto rounded-lg shadow-md mb-4" />
        {/* all  4-img */}
        <div className="flex gap-4 py-4 justify-center overflow-x-auto">

           {data.images.map((imgSrc) => {
              return   <Image
      key={imgSrc}
    src={imgSrc}
    alt={data.title}
    width={90}
    height={90}
    className="w-full h-auto rounded-lg shadow-md mb-4 cursor-pointer"
  />
           })}

        </div>

      </div>
      {/* Product Details */}
      <div className="w-full md:w-1/2 px-4">
       <div className='flex items-center gap-5 mb-5' >
         <h2 className="text-xl font-semibold mb-2 bg-green-100 p-3 rounded-2xl text-green-400">
           {data.category.name}
        </h2>
        <h3 className='text-xl font-semibold  p-3 rounded-2xl bg-gray-100   mb-2'>
          {data.brand.name}
        </h3>
       </div>
       
        <p className="text-black mb-4 text-4xl font-bold">
          {data.title}
        </p>
        <div className="flex items-center mb-4 ">
            <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`size-6 ${
                              i < Math.round(rating) ? 'text-amber-400' : 'text-slate-200'
                            }`}
                          />
                        ))}
                         <span className="text-sm text-slate-600">
              {rating.toFixed(1)} ({ratingsCount})
            </span>
                      </div>
        </div>
        <div className="mb-4  ">
             {data.priceAfterDiscount ? (
                <div className="flex items-center gap-2">
                  <p className="text-xl font-extrabold text-slate-900">
                    {data.priceAfterDiscount} EGP
                  </p>
                  <p className="text-sm text-slate-400 line-through">{data.price} EGP</p>
                </div>
              ) : (
                <p className="text-xl font-extrabold text-slate-900">{data.price} EGP</p>
              )}
        </div>
        {data.quantity > 0 ? (
  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-5">
    <span className="size-2 rounded-full bg-emerald-500"></span>
    In Stock
  </span>
) : (
  <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
    <span className="size-2 rounded-full bg-red-500"></span>
    Out of Stock
  </span>
)}
<div className="  border-b-2 border-gray-100 "></div>
        
        <p className="text-gray-700 my-6">
          {data.description}
        </p>
      
        <QuantitySelector available={data.quantity}/>

      <div className="my-6 w-full bg-slate-50 px-6 py-4 rounded-xl flex items-center justify-between">
  <h2 className="text-sm text-slate-500">
    Total Price:
  </h2>

  <div className="text-xl font-extrabold text-emerald-600">
    {data.price.toFixed(2)} EGP
  </div>
</div>
       
     <div className="flex gap-4 mb-6 mt-9">
  <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
    Add to Cart
  </button>

  <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white shadow-md transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-5">
      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
    </svg>
    Buy Now
  </button>
    </div>
  <div className="  border-b-2 border-gray-100 "></div> 
       
      </div>
    </div>
  </div>
     </div>

    
    </>
  )
}
