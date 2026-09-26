import React from 'react'
import { ChevronRightIcon, UserCircleIcon, MapPinIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import ProfileComp from '../-commponent/ProfileComp/ProfileComp'

export default function ProfilePage() {
  const accountCards = [
    { title: 'Personal Info', description: 'Update your profile details', icon: UserCircleIcon },
    { title: 'My Addresses', description: 'Manage shipping locations', icon: MapPinIcon },
    { title: 'Orders', description: 'Track your purchase history', icon: ShoppingBagIcon },
  ]

  return (
    <div className="mx-auto max-w-10xl px-4 py-6">
      <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-600/90 via-emerald-500/70 to-emerald-400/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-center px-6">
          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <a href="/" className="hover:text-white">Home</a>
            <ChevronRightIcon className="size-3.5" />
            <span className="text-white">Profile</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <UserCircleIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">My Profile</h1>
              <p className="text-sm text-white/85">Manage your account and preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {accountCards.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Icon className="size-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </div>
        ))}
      </div>
      
       <ProfileComp />
    </div>
   
  )
}
