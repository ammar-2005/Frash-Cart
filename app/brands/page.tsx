import Link from 'next/link'
import { getAllBrands } from '../api/brands/brandsApi'

export default async function Brands() {
  const brands = await getAllBrands()

  return (
    <>
      <div className="relative h-48 overflow-hidden sm:h-56">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/90 via-purple-500/60 to-purple-400/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mx-5 my-7 flex items-center gap-3 text-white">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-white/70"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            <div className=" text-white">
              <h2>Brands</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-xl bg-white/20 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
            </div>

            <div className="flex flex-col gap-1 text-white">
              <h2 className="text-2xl font-bold">Top Brands</h2>
              <p className="text-sm text-white/80">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <Link key={brand._id} href={`/brands/${brand._id}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex aspect-square items-center justify-center bg-slate-50 p-6">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-30 w-30 object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-slate-800 group-hover:text-green-600">
                  {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
