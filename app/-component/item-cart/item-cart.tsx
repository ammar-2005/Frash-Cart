import React from 'react'
import { TruckIcon, ShieldCheckIcon, ArrowUturnLeftIcon, PhoneIcon } from '@heroicons/react/24/outline'

const items = [
  {
    icon: TruckIcon,
    title: 'Free Shipping',
    description: 'On orders over 500 EGP',
    bg: 'bg-sky-100',
    color: 'text-sky-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Payment',
    description: '100% secure transactions',
    bg: 'bg-emerald-100',
    color: 'text-emerald-500',
  },
  {
    icon: ArrowUturnLeftIcon,
    title: 'Easy Returns',
    description: '14-day return policy',
    bg: 'bg-orange-100',
    color: 'text-orange-500',
  },
  {
    icon: PhoneIcon,
    title: '24/7 Support',
    description: 'Dedicated support team',
    bg: 'bg-purple-100',
    color: 'text-purple-500',
  },
]

export default function ItemCart() {
  return (
    <div className="bg-gray-50 py-10 w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bg} ${item.color}`}
            >
              <item.icon className="size-6" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}