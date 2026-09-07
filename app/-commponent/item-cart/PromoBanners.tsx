import React from 'react'
import { FireIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const items = [
  {
    icon: FireIcon,
    name: 'Deal of the Day',
    title: 'Fresh Organic Fruits',
    description: 'Get up to 40% off on selected organic fruits',
    discount: '40% OFF',
    code: 'ORGANIC40',
    btn: 'Shop Now',
    bg: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
    btnColor: 'text-emerald-700',
  },
  {
    icon: SparklesIcon,
    name: 'New Arrivals',
    title: 'Exotic Vegetables',
    description: 'Discover our latest collection of premium vegetables',
    discount: '25% OFF',
    code: 'FRESH25',
    btn: 'Explore Now',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    btnColor: 'text-orange-600',
  },
]

export default function PromoBanners() {
  return (
    <div className="w-full my-5 py-10 bg-white">
      {/* two banners */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-5 px-5 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className={`flex flex-col gap-4 rounded-2xl p-8 text-white ${item.bg}`}
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              <item.icon className="size-4" />
              {item.name}
            </span>

            <h2 className="text-2xl font-extrabold">{item.title}</h2>

            <p className="text-sm text-white/90">{item.description}</p>

            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-extrabold">{item.discount}</h3>
              <p className="text-sm text-white/80">
                Use code: <span className="font-bold text-white">{item.code}</span>
              </p>
            </div>

            <button
              type="button"
              className={`mt-2 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold ${item.btnColor} transition hover:bg-white/90`}
            >
              {item.btn}
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}