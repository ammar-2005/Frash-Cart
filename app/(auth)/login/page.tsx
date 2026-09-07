'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  TruckIcon,
  ShieldCheckIcon,
  PhoneIcon,
  LockClosedIcon as SslIcon,
  UsersIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Schema } from '../../Schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'
import { LoginFormValues } from '@/app/Schema/loginSchema'
import { LoginSubmitForm } from '@/app/Api/action/auth.actions'

const trustBadges = [
  { icon: SslIcon, label: 'SSL Secured' },
  { icon: UsersIcon, label: '50K+ Users' },
  { icon: StarIcon, label: '4.9 Rating' },
]

const leftPerks = [
  { icon: TruckIcon, label: 'Free Delivery' },
  { icon: ShieldCheckIcon, label: 'Secure Payment' },
  { icon: PhoneIcon, label: '24/7 Support' },
]

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      terms: false,
    },
    resolver: zodResolver(Schema),
  })

  async function submitForm(data: LoginFormValues) {
    const isRegistered = await LoginSubmitForm(data)
    console.log(isRegistered)
    if (isRegistered) {
      toast.add({
        type: "success",
        description: "Event has been created.",
      })

      router.push('/home')
    }
    if (!isRegistered) {
      toast.add({
        type: "error",
        description: "Failed to create account.",
      })
    }
  }

  return (
    <div className="mx-auto my-10 flex w-full max-w-5xl flex-col items-center gap-8 px-4 lg:flex-row lg:items-stretch lg:gap-10">
      {/* left side */}
      <div className="flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm lg:w-1/2">
         <div className="relative h-64 w-full overflow-hidden rounded-xl bg-rose-50 sm:h-72">
          <Image
            src="/loginIn.png"
            alt="FreshCart grocery basket"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 text-xl font-extrabold text-slate-900 sm:text-2xl">
          FreshCart - Your One-Stop Shop for Fresh Products
        </h2>
        <p className="mt-3 max-w-sm text-sm text-gray-500">
          Join thousands of happy customers who trust FreshCart for their daily grocery needs
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {leftPerks.map((perk) => (
            <span key={perk.label} className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
              <perk.icon className="size-4 text-emerald-600" />
              {perk.label}
            </span>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="w-full rounded-2xl bg-white p-6 shadow-sm sm:p-10 lg:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-extrabold xl:text-3xl">
            <span className="text-emerald-600">Fresh</span>Cart
          </h1>
          <h2 className="mt-2 text-lg font-bold text-slate-900">Welcome Back!</h2>
          <p className="mt-1 text-center text-sm text-gray-500">
            Sign in to continue your fresh shopping experience
          </p>

          <div className="mt-8 w-full max-w-xs">
            {/* social buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg className="h-5 w-5" viewBox="-0.5 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604A23.78 23.78 0 0 0 .214 24c0 3.737.867 7.26 2.406 10.388l7.905-6.05A14.11 14.11 0 0 1 9.827 24" fill="#FBBC05" />
                    <path d="M23.714 10.133c3.31 0 6.302 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.017-9.51 13.182-9.51" fill="#EB4335" />
                    <path d="M23.714 37.867c-6.164 0-11.36-3.979-13.182-9.51l-7.909 6.037C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.31-5.849l-7.507-5.804c-2.118 1.334-4.785 2.053-7.803 2.053" fill="#34A853" />
                    <path d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804C43.34 37.614 46.145 31.649 46.145 24" fill="#4285F4" />
                  </g>
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg className="h-5 w-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#4460A0"
                    d="M25.638 48h-22.99A2.649 2.649 0 0 1 0 45.351V2.649A2.649 2.649 0 0 1 2.649 0h42.702A2.649 2.649 0 0 1 48 2.649v42.702A2.649 2.649 0 0 1 45.351 48H33.12V29.412h6.239l.934-7.244H33.12v-4.625c0-2.097.582-3.527 3.59-3.527h3.836V7.535a51.66 51.66 0 0 0-5.59-.286c-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.256v7.244h6.256V48Z"
                  />
                </svg>
                Continue with Facebook
              </button>
            </div>

            <div className="my-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-wide text-gray-400">
              <span className="h-px flex-1 bg-gray-200" />
              Or continue with email
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(submitForm)} noValidate>
              <div className="flex flex-col gap-5">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                      <div className="relative">
                        <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your email"
                          autoComplete="off"
                          className="pl-9"
                        />
                      </div>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex items-center justify-between">
                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                        <Link href="/forgot-password" className="text-xs font-medium text-emerald-600 hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your password"
                          autoComplete="off"
                          className="pl-9 pr-9"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeSlashIcon className="size-4" />
                          ) : (
                            <EyeIcon className="size-4" />
                          )}
                        </button>
                      </div>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="terms"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <label className="flex items-center gap-2 text-xs text-gray-600">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>Keep me signed in</span>
                      </label>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out hover:bg-emerald-700 focus:shadow-outline focus:outline-none"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              New to FreshCart?{' '}
              <Link href="/register" className="font-medium text-emerald-600 hover:underline">
                Create an account
              </Link>
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 border-t border-gray-100 pt-4">
              {trustBadges.map((badge) => (
                <span key={badge.label} className="flex items-center gap-1 text-[11px] text-gray-400">
                  <badge.icon className="size-3.5 text-emerald-500" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}