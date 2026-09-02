import Link from 'next/link'
import Image from 'next/image'
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

function Twitter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.24 3H21l-6.55 7.49L22.2 21h-6.02l-4.71-6.17L5.98 21H3.2l7.02-8.02L2.4 3h6.16l4.26 5.64L18.24 3Zm-1.05 16.17h1.67L7.9 4.73H6.1l11.1 14.44Z" />
    </svg>
  )
}

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Youtube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  )
}

import logo from '../../images/freshcart-logo.svg'

const perks = [
  {
    icon: Truck,
    title: 'Free Shipping',
    subtitle: 'On orders over 500 EGP',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    subtitle: '14-day return policy',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    subtitle: '100% secure checkout',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    subtitle: 'Contact us anytime',
  },
]

const shopLinks = [
  { title: 'All Products', href: '/shop' },
  { title: 'Categories', href: '/categories' },
  { title: 'Brands', href: '/brands' },
  { title: 'Electronics', href: '/categories/electronics' },
  { title: "Men's Fashion", href: '/categories/mens-fashion' },
  { title: "Women's Fashion", href: '/categories/womens-fashion' },
]

const accountLinks = [
  { title: 'My Account', href: '/account' },
  { title: 'Order History', href: '/account/orders' },
  { title: 'Wishlist', href: '/wishlist' },
  { title: 'Shopping Cart', href: '/cart' },
  { title: 'Sign In', href: '/login' },
  { title: 'Create Account', href: '/register' },
]

const supportLinks = [
  { title: 'Contact Us', href: '/contact' },
  { title: 'Help Center', href: '/help' },
  { title: 'Shipping Info', href: '/shipping' },
  { title: 'Returns & Refunds', href: '/returns' },
  { title: 'Track Order', href: '/track-order' },
]

const legalLinks = [
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms of Service', href: '/terms' },
  { title: 'Cookie Policy', href: '/cookie-policy' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
]

export default function Footer() {
  return (
    <footer className="w-full mt-15">
      {/* perks strip */}
      <div className="bg-emerald-50 px-4 py-6 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-emerald-100">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-center gap-3 lg:px-6 lg:first:pl-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <perk.icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">{perk.title}</p>
                <p className="truncate text-xs text-slate-500">{perk.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* main footer */}
      <div className="bg-slate-900 px-4 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Link href="/" className="inline-flex items-center rounded-md bg-white px-3 py-2">
              <Image src={logo} alt="FreshCart" width={120} height={32} className="h-7 w-auto" />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              FreshCart is your one-stop destination for quality products. From fashion to
              electronics, we bring you the best brands at competitive prices with a seamless
              shopping experience.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-300">
              <a href="tel:+18001234567" className="flex items-center gap-2 hover:text-emerald-500">
                <Phone className="size-4 text-emerald-500" />
                +1 (800) 123-4567
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-2 hover:text-emerald-500"
              >
                <Mail className="size-4 text-emerald-500" />
                support@freshcart.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-emerald-500" />
                123 Commerce Street, New York, NY 10001
              </span>
            </div>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-emerald-600 hover:text-white"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* shop */}
          <FooterColumn title="Shop" links={shopLinks} />

          {/* account */}
          <FooterColumn title="Account" links={accountLinks} />

          {/* support */}
          <FooterColumn title="Support" links={supportLinks} />

          {/* legal */}
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="rounded border border-slate-700 px-2 py-1">Visa</span>
            <span className="rounded border border-slate-700 px-2 py-1">Mastercard</span>
            <span className="rounded border border-slate-700 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { title: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-slate-400 hover:text-emerald-500">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}