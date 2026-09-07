'use client'
import React from 'react'
import Link from 'next/link'
import { StarIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Schema, type RegisterFormValues } from '../../Schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'
import { submitForm as registerUser } from '@/app/Api/action/auth.actions'

const features = [
  {
    icon: StarIcon,
    title: 'Premium Quality',
    description: 'Premium quality products sourced from trusted suppliers.',
  },
  {
    icon: TruckIcon,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in most areas.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Shopping',
    description: 'Your data and payments are completely secure.',
  },
]


export default function Register() {
  const router = useRouter()
  const { control, handleSubmit } = useForm<RegisterFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '', 
      terms: false,
    },
    resolver: zodResolver(Schema),
  })
  async function submitForm(data: RegisterFormValues) {
    const isRegistered = await registerUser(data)
    console.log(isRegistered)
    if(isRegistered){
     toast.add({
            type: "success",
            description: "Event has been created.",
          })

          router.push('/login')
    }
    if(!isRegistered){
     toast.add({
            type: "error",
            description: "Failed to create account.",
          })

    }
  }
  return (
    <div className="mx-auto my-10 flex w-full max-w-5xl flex-col items-center gap-8 px-4 lg:flex-row lg:items-stretch lg:gap-10">
      {/* left side */}
      <div className="w-full lg:w-1/3">
        {/* heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Welcome to <span className="text-emerald-600">FreshCart</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Join thousands of happy customers who enjoy fresh groceries delivered right to their
            doorstep.
          </p>
        </div>

        {/* 3 items */}
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <feature.icon className="size-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-black">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* testimonial card */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <UserCircleIcon className="size-10 text-emerald-500" />
            <div>
              <h3 className="text-sm font-semibold text-black">Sarah Johnson</h3>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4 text-amber-400" />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-3 text-sm italic text-gray-600">
            &quot;FreshCart has transformed my shopping experience. The quality of the products is
            outstanding, and the delivery is always on time. Highly recommend!&quot;
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="w-full lg:flex-1">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-extrabold xl:text-3xl">Create Your Account</h1>
          <p className="text-sm font-medium text-gray-500">
            Start your fresh journey with us today
          </p>

          <div className="mt-8 w-full max-w-xs">
            {/* social buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg className="h-5 w-5" viewBox="-0.5 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604A23.78 23.78 0 0 0 .214 24c0 3.737.867 7.26 2.406 10.388l7.905-6.05A14.11 14.11 0 0 1 9.827 24" fill="#FBBC05" />
                    <path d="M23.714 10.133c3.31 0 6.302 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.017-9.51 13.182-9.51" fill="#EB4335" />
                    <path d="M23.714 37.867c-6.164 0-11.36-3.979-13.182-9.51l-7.909 6.037C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.31-5.849l-7.507-5.804c-2.118 1.334-4.785 2.053-7.803 2.053" fill="#34A853" />
                    <path d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804C43.34 37.614 46.145 31.649 46.145 24" fill="#4285F4" />
                  </g>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg className="h-5 w-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#4460A0"
                    d="M25.638 48h-22.99A2.649 2.649 0 0 1 0 45.351V2.649A2.649 2.649 0 0 1 2.649 0h42.702A2.649 2.649 0 0 1 48 2.649v42.702A2.649 2.649 0 0 1 45.351 48H33.12V29.412h6.239l.934-7.244H33.12v-4.625c0-2.097.582-3.527 3.59-3.527h3.836V7.535a51.66 51.66 0 0 0-5.59-.286c-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.256v7.244h6.256V48Z"
                  />
                </svg>
                Facebook
              </button>
            </div>

            <div className="my-8 flex items-center gap-3 text-xs text-gray-400">
              <span className="h-px flex-1 bg-gray-200" />
              or
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(submitForm)} noValidate>
              <div className="flex flex-col gap-6">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Name*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Ali"
                        autoComplete="off"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Email*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="ali@example.com"
                        autoComplete="off"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Password*</FieldLabel>
                      <Input
                        type="password"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Create a strong password"
                        autoComplete="off"
                      />
                      
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="rePassword"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Confirm Password*</FieldLabel>
                      <Input
                        type="password"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Confirm your password"
                        autoComplete="off"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Phone Number*</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="+1 234 567 8900"
                        autoComplete="off"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="terms"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <label className="flex items-start gap-2 text-xs text-gray-600">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="mt-0.5 size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span>
                          I agree to the{' '}
                          <Link href="/terms" className="text-emerald-600 hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
                            Privacy Policy
                          </Link>
                          *
                        </span>
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
                <UserPlusIcon className="size-5" />
                Create My Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-emerald-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}