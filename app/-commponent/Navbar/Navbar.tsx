"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  HeadsetIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import logo from '../../images/freshcart-logo.svg'

const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Fruits & Vegetables",
    href: "/categories/fruits-vegetables",
    description: "Fresh produce sourced daily from local farms.",
  },
  {
    title: "Dairy & Eggs",
    href: "/categories/dairy-eggs",
    description: "Milk, cheese, yogurt and everything in between.",
  },
  {
    title: "Bakery",
    href: "/categories/bakery",
    description: "Freshly baked bread, pastries and desserts.",
  },
  {
    title: "Beverages",
    href: "/categories/beverages",
    description: "Juices, sodas, water and hot drinks.",
  },
  {
    title: "Snacks",
    href: "/categories/snacks",
    description: "Chips, sweets and everything for a quick bite.",
  },
  {
    title: "Household",
    href: "/categories/household",
    description: "Cleaning supplies and everyday essentials.",
  },
]

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Categories", href: "/categories" },
  { title: "Brands", href: "/brands" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [accountOpen, setAccountOpen] = React.useState(false)

  return (
    <NavigationMenu className="max-w-full w-full bg-white border-b border-gray-300 sticky top-0 z-50">
      <NavigationMenuList className="w-full flex items-center gap-4 px-4 py-3">
        {/* logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logo}
            alt="FreshCart"
            width={130}
            height={40}
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        {/* search - desktop only */}
        <div className="hidden lg:flex flex-1 max-w-xl">
          <div className="flex w-full items-center rounded-full bg-white border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
            />
            <button
              type="button"
              aria-label="Search"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 flex items-center justify-center transition-colors"
            >
              <SearchIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* nav links - desktop only */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <Link href="/" className="text-sm font-medium hover:text-green-600">
                  Home
                </Link>
              }
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <Link href="/shop" className="text-sm font-medium hover:text-green-600">
                  Shop
                </Link>
              }
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-medium">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                {categories.map((category) => (
                  <ListItem key={category.title} title={category.title} href={category.href}>
                    {category.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <Link href="/brands" className="text-sm font-medium hover:text-green-600">
                  Brands
                </Link>
              }
            />
          </NavigationMenuItem>
        </div>

        {/* right icons - desktop only */}
        <div className="hidden lg:flex items-center gap-5 shrink-0 ml-auto">
          <Link href="/support" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
            <HeadsetIcon className="size-6" />
            <span className="flex flex-col leading-tight text-xs">
              <span className="text-gray-500">Support</span>
              <span className="font-semibold text-gray-800">24/7 Help</span>
            </span>
          </Link>

          <Link href="/wishlist" className="text-gray-700 hover:text-green-600">
            <HeartIcon className="size-6" />
          </Link>

          <Link href="/cart" className="text-gray-700 hover:text-green-600">
            <ShoppingCartIcon className="size-6" />
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setAccountOpen((prev) => !prev)}
              aria-label="Account"
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full flex items-center justify-center transition-colors"
            >
              <UserIcon className="size-5" />
            </button>

            {accountOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2 flex flex-col">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-green-600"
                  onClick={() => setAccountOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-green-600"
                  onClick={() => setAccountOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* right icons - mobile only */}
        <div className="flex lg:hidden items-center gap-4 ml-auto">
          <Link href="/wishlist" className="text-gray-700 hover:text-green-600">
            <HeartIcon className="size-6" />
          </Link>

          <Link href="/cart" className="text-gray-700 hover:text-green-600">
            <ShoppingCartIcon className="size-6" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menu"
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full flex items-center justify-center transition-colors"
          >
            {mobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </NavigationMenuList>

      {/* mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-300 bg-gray-100 px-4 py-4 flex flex-col gap-4">
          {/* search */}
          <div className="flex items-center rounded-full bg-white border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
            />
            <button
              type="button"
              aria-label="Search"
              className="bg-green-600 text-white px-4 py-2.5 flex items-center justify-center"
            >
              <SearchIcon className="size-5" />
            </button>
          </div>

          {/* nav links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-green-600"
              >
                {link.title}
              </Link>
            ))}

            <span className="py-2 px-2 text-sm font-medium text-gray-500">Categories</span>
            <div className="flex flex-col pl-4">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1.5 px-2 rounded-md text-sm hover:bg-gray-200 hover:text-green-600"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-300" />

          {/* support */}
          <Link
            href="/support"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600"
          >
            <HeadsetIcon className="size-5" />
            Support - 24/7 Help
          </Link>

          {/* auth */}
          <div className="flex gap-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center border border-green-600 text-green-600 rounded-md py-2 text-sm font-medium hover:bg-green-50"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center bg-green-600 text-white rounded-md py-2 text-sm font-medium hover:bg-green-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div>
          </Link>
        }
      />
    </li>
  )
}