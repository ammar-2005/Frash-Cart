import { getAllProduct } from '@/app/Api/Service/ProductApi'
import ProductCart from '../ProductCart/ProductCart'
import { ProductType } from '@/app/Api/types/ProductType'

export default async function FeaturedProduct() {
  const data: ProductType[] = await getAllProduct()

  return (
    <>
    {/* heading */}
    <div className="flex items-center gap-4 mt-5 m-4">
  <span className="h-10 w-1.5 rounded-full bg-emerald-600"></span>
  <h2 className="text-4xl font-extrabold text-slate-900">
    Featured <span className="text-emerald-600">Products</span>
  </h2>
    </div>
    {/* call api for all product  */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product) => (
          <ProductCart product={product} key={product._id} />
        ))}
      </div>
    </>
  )
}
