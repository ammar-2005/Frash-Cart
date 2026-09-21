'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AddressesResponseType } from '@/app/api/types/AddressType'
import { addAddress } from '@/app/api/action/AddressAction/addAddress'
import { removeAddress } from '@/app/api/action/AddressAction/removeAddress'
import { toast } from '@/components/ui/toast'
import { MapPinIcon, PhoneIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

type AddressFormValues = {
  name: string
  details: string
  phone: string
  city: string
}

export default function AddressComp() {
  const query = useQueryClient()
  const [showForm, setShowForm] = useState(false)

  const { data: addressesData, isLoading } = useQuery<AddressesResponseType>({
    queryKey: ['getAddresses'],
    queryFn: async () => {
      const res = await fetch('/api/addresses')
      if (!res.ok) throw new Error('Error to call api')
      return res.json()
    },
  })

  const { register, handleSubmit, reset } = useForm<AddressFormValues>({
    defaultValues: { name: '', details: '', phone: '', city: '' },
  })

  const { mutate: addNewAddress, isPending: isAdding } = useMutation({
    mutationFn: addAddress,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Address added successfully' })
      query.invalidateQueries({ queryKey: ['getAddresses'] })
      reset()
      setShowForm(false)
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed to add address' })
    },
  })

  const { mutate: deleteAddress } = useMutation({
    mutationFn: removeAddress,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Address removed' })
      query.invalidateQueries({ queryKey: ['getAddresses'] })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed to remove address' })
    },
  })

  function onSubmit(data: AddressFormValues) {
    addNewAddress(data)
  }

  if (isLoading) {
    return <h2 className="py-10 text-center text-gray-500">Loading...</h2>
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-slate-900">My Addresses</h1>
        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <PlusIcon className="size-4" />
          Add Address
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Address Name</label>
            <input
              {...register('name', { required: true })}
              placeholder="Home, Work, etc."
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Details</label>
            <input
              {...register('details', { required: true })}
              placeholder="Street name, building number, floor..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">City</label>
            <input
              {...register('city', { required: true })}
              placeholder="e.g. Cairo, Giza"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Phone Number</label>
            <input
              {...register('phone', { required: true })}
              placeholder="01xxxxxxxxx"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-400"
            />
          </div>
          <button
            type="submit"
            disabled={isAdding}
            className="mt-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {isAdding ? 'Saving...' : 'Save Address'}
          </button>
        </form>
      )}

      {!addressesData?.data?.length ? (
        <p className="py-10 text-center text-gray-500">No saved addresses yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {addressesData.data.map((address) => (
            <div
              key={address._id}
              className="flex items-start justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div>
                <h3 className="font-bold text-slate-900">{address.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPinIcon className="size-4" />
                  {address.details}, {address.city}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                  <PhoneIcon className="size-4" />
                  {address.phone}
                </p>
              </div>
              <button
                type="button"
                onClick={() => deleteAddress(address._id)}
                aria-label="Remove address"
                className="flex size-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              >
                <TrashIcon className="size-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}