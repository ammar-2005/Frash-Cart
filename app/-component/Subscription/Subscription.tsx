import React from 'react'
import { EnvelopeIcon, ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { SparklesIcon, TruckIcon, TagIcon } from '@heroicons/react/24/outline'

const perks = [
  { icon: SparklesIcon, label: 'Fresh Picks Weekly' },
  { icon: TruckIcon, label: 'Free Delivery Codes' },
  { icon: TagIcon, label: 'Members-Only Deals' },
]

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.365 1.43c0 1.14-.415 2.07-1.244 2.79-.828.72-1.835 1.14-2.86 1.05-.09-1.11.435-2.19 1.2-2.88.81-.75 2.07-1.2 2.905-1.11zM20.62 17.31c-.36.84-.54 1.2-1.005 1.94-.645 1.035-1.56 2.325-2.685 2.335-1 .01-1.26-.66-2.615-.65-1.355.01-1.64.66-2.64.65-1.125-.01-1.995-1.17-2.64-2.205C6.99 16.94 6.6 13.9 7.68 11.95c.735-1.34 2.055-2.19 3.48-2.2 1.11-.01 2.16.75 2.84.75.68 0 1.95-.93 3.29-.79.56.02 2.13.225 3.14 1.7-.08.05-1.875 1.095-1.855 3.26.02 2.585 2.27 3.44 2.045 4.64z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.6 2.4c-.35.2-.6.6-.6 1.1v17c0 .5.25.9.6 1.1l9.4-9.6L3.6 2.4Z" />
      <path d="M14.6 12l2.9-2.95 3.6 2.07c.85.5.85 1.26 0 1.76l-3.6 2.07L14.6 12Z" />
      <path d="M13 12.7l-9.2 9.4c.15.05.32.08.5.08.2 0 .4-.05.58-.15l10.6-6.1L13 12.7Z" />
      <path d="M13 11.3l2.48-3.03L4.88 2.17c-.18-.1-.38-.15-.58-.15-.18 0-.35.03-.5.08L13 11.3Z" />
    </svg>
  )
}

export default function Subscription() {
  return (
    <section className="mx-auto my-10 max-w-7xl px-4">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
          {/* newsletter card */}
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <EnvelopeIcon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                  Newsletter
                </p>
                <p className="text-xs text-gray-400">50,000+ subscribers</p>
              </div>
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Get the Freshest Updates{' '}
              <span className="text-emerald-600">Delivered Free</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Weekly recipes, seasonal offers &amp; exclusive member perks.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {perks.map((perk) => (
                <span
                  key={perk.label}
                  className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700"
                >
                  <perk.icon className="size-3.5" />
                  {perk.label}
                </span>
              ))}
            </div>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Subscribe
                <ArrowRightIcon className="size-4" />
              </button>
            </form>

            <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
              <ShieldCheckIcon className="size-3.5" />
              Unsubscribe anytime. No spam, ever.
            </p>
          </div>

          {/* mobile app card */}
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white sm:p-8">
            <span className="flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
              <SparklesIcon className="size-3.5" />
              Mobile App
            </span>

            <h3 className="mt-4 text-xl font-extrabold sm:text-2xl">Shop Faster on Our App</h3>
            <p className="mt-2 text-sm text-slate-300">
              Get app-exclusive deals &amp; 15% off your first order.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2.5 text-left transition hover:bg-white/15"
              >
                <AppleIcon className="size-6" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase text-slate-300">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2.5 text-left transition hover:bg-white/15"
              >
                <GooglePlayIcon className="size-6" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase text-slate-300">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </span>
              </button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5 text-amber-400" />
                ))}
              </div>
              4.9 · 100K+ downloads
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}