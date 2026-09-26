'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { AddressesResponseType } from '@/app/api/types/AddressType'
import { CartResponseType } from '@/app/api/types/CartType'
import { createCashOrder } from '@/app/api/action/OrderAction/createCashOrder'
import { createCheckoutSession } from '@/app/api/action/OrderAction/createCheckoutSession'
import { toast } from '@/components/ui/toast'
import {
  MapPinIcon,
  CreditCardIcon,
  BanknotesIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

type PaymentMethod = 'cash' | 'online'

export default function CheckoutComp() {
  const router = useRouter()
  const query = useQueryClient()

  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)
  const [useNewAddress, setUseNewAddress] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash')

  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [phone, setPhone] = useState('')

  const { data: cartData } = useQuery<CartResponseType>({
    queryKey: ['getCart'],
    queryFn: async () => {
      const res = await fetch('/api/cart')
      if (!res.ok) throw new Error('Error to call api')
      return res.json()
    },
  })

  const { data: addressesData } = useQuery<AddressesResponseType>({
    queryKey: ['getAddresses'],
    queryFn: async () => {
      const res = await fetch('/api/addresses')
      if (!res.ok) throw new Error('Error to call api')
      return res.json()
    },
  })

  const { mutate: placeCashOrder, isPending: isCashPending } = useMutation({
    mutationFn: createCashOrder,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Order placed successfully' })
      query.invalidateQueries({ queryKey: ['getCart'] })
      router.push('/orders')
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed to place order' })
    },
  })

  const { mutate: placeOnlineOrder, isPending: isOnlinePending } = useMutation({
    mutationFn: createCheckoutSession,
    onSuccess: (data) => {
      if (data?.session?.url) {
        window.location.href = data.session.url
      } else {
        toast.add({ type: 'error', description: 'Could not start payment session' })
      }
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed to start payment' })
    },
  })

  function handlePlaceOrder() {
    if (!cartData?.cartId) {
      toast.add({ type: 'error', description: 'Your cart is empty' })
      return
    }

    let shippingAddress

    if (useNewAddress || !selectedAddressId) {
      if (!city || !street || !phone) {
        toast.add({ type: 'error', description: 'Please fill in all address fields' })
        return
      }
      shippingAddress = { details: street, phone, city }
    } else {
      const selected = addressesData?.data.find((a) => a._id === selectedAddressId)
      if (!selected) {
        toast.add({ type: 'error', description: 'Please select an address' })
        return
      }
      shippingAddress = { details: selected.details, phone: selected.phone, city: selected.city }
    }

    if (paymentMethod === 'cash') {
      placeCashOrder({ cartId: cartData.cartId, shippingAddress })
    } else {
      placeOnlineOrder({ cartId: cartData.cartId, shippingAddress })
    }
  }

  const isPlacing = isCashPending || isOnlinePending

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        <ChevronRightIcon className="size-3.5" />
        <Link href="/cart" className="hover:text-emerald-600">Cart</Link>
        <ChevronRightIcon className="size-3.5" />
        <span className="text-slate-900">Checkout</span>
      </div>

      <h1 className="mb-1 text-2xl font-extrabold text-slate-900">Complete Your Order</h1>
      <p className="mb-8 text-sm text-gray-500">Review your items and complete your purchase</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* left: address + payment */}
        <div className="flex flex-col gap-6">
          {/* shipping address */}
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <div className="bg-emerald-600 px-6 py-4">
              <h2 className="flex items-center gap-2 font-semibold text-white">
                <MapPinIcon className="size-5" />
                Shipping Address
              </h2>
              <p className="text-xs text-emerald-50">Where should we deliver your order?</p>
            </div>

            <div className="flex flex-col gap-3 p-6">
              {addressesData?.data && addressesData.data.length > 0 && (
                <>
                  <p className="text-sm font-medium text-slate-700">Saved Addresses</p>
                  {addressesData.data.map((address) => (
                    <button
                      key={address._id}
                      type="button"
                      onClick={() => {
                        setSelectedAddressId(address._id)
                        setUseNewAddress(false)
                      }}
                      className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${
                        selectedAddressId === address._id && !useNewAddress
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{address.name}</p>
                        <p className="text-xs text-gray-500">
                          {address.details}, {address.city}
                        </p>
                        <p className="text-xs text-gray-500">{address.phone}</p>
                      </div>
                      {selectedAddressId === address._id && !useNewAddress && (
                        <CheckCircleIcon className="size-5 text-emerald-600" />
                      )}
                    </button>
                  ))}
                </>
              )}

              <button
                type="button"
                onClick={() => setUseNewAddress(true)}
                className={`flex items-center gap-2 rounded-lg border border-dashed p-4 text-sm font-medium transition ${
                  useNewAddress
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-gray-300 text-gray-500 hover:border-emerald-300'
                }`}
              >
                <PlusCircleIcon className="size-5" />
                Use a different address
              </button>

              {useNewAddress && (
                <div className="mt-2 flex flex-col gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">City *</label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Cairo, Alexandria, Giza"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Street Address *</label>
                    <input
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Street name, building number, floor, apartment..."
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Phone Number *</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01xxxxxxxxx"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* payment method */}
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <div className="bg-emerald-600 px-6 py-4">
              <h2 className="flex items-center gap-2 font-semibold text-white">
                <CreditCardIcon className="size-5" />
                Payment Method
              </h2>
              <p className="text-xs text-emerald-50">Choose how you&apos;d like to pay</p>
            </div>

            <div className="flex flex-col gap-3 p-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${
                  paymentMethod === 'cash'
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
              >
                <span className="flex items-center gap-3">
                  <BanknotesIcon className="size-6 text-emerald-600" />
                  <span>
                    <p className="text-sm font-semibold text-slate-900">Cash on Delivery</p>
                    <p className="text-xs text-gray-500">Pay when your order arrives at your doorstep</p>
                  </span>
                </span>
                {paymentMethod === 'cash' && <CheckCircleIcon className="size-5 text-emerald-600" />}
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('online')}
                className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${
                  paymentMethod === 'online'
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
              >
                <span className="flex items-center gap-3">
                  <CreditCardIcon className="size-6 text-emerald-600" />
                  <span>
                    <p className="text-sm font-semibold text-slate-900">Pay Online</p>
                    <p className="text-xs text-gray-500">Secure payment with Credit/Debit Card via Stripe</p>
                  </span>
                </span>
                {paymentMethod === 'online' && <CheckCircleIcon className="size-5 text-emerald-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* right: order summary */}
        <div className="h-fit rounded-xl border border-slate-200 p-6">
          <h2 className="mb-4 font-semibold text-slate-900">Order Summary</h2>

          <div className="flex flex-col gap-3">
            {cartData?.data.products.map((product) => (
              <div key={product._id} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {product.product.title} × {product.count}
                </span>
                <span className="font-medium text-slate-900">{product.count * product.price} EGP</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-slate-900">{cartData?.data.totalCartPrice} EGP</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-emerald-600">FREE</span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
            <span className="font-semibold text-slate-900">Total</span>
            <span className="text-xl font-extrabold text-emerald-600">
              {cartData?.data.totalCartPrice} EGP
            </span>
          </div>

          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={isPlacing}
            className="mt-6 w-full rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {isPlacing ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  )
}