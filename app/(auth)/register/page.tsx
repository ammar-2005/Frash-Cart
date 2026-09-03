'use client'
import React from 'react'
import { StarIcon, TruckIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'


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
  const {register , control , handleSubmit}= useForm({
    defaultValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:'',
    }

  })

  function submitForm (data){
    console.log(data)
      
  }

  

  return (
    <>
     <div className=" max-w-7xl mx-auto w-full my-5 ">
      {/* left site */}
    <div className="  max-w-md w-1/3">
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
    {/* right site */}
    <div className="w-1/2">
   <div className="mt-12 flex flex-col items-center">
  <h1 className="text-2xl xl:text-3xl font-extrabold">
   Create Your Account
  </h1>
  <p className=" text-sm font-medium">
     Start your fresh journey with us today
  </p>
  <div className="w-full flex-1 mt-8">
    <div className="flex items-center">
     <div className="flex flex-col gap-4 sm:flex-row">
  <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
      <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="Color-" transform="translate(-401.000000, -860.000000)">
          <g id="Google" transform="translate(401.000000, 860.000000)">
            <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path>
            <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path>
            <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path>
            <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path>
          </g>
        </g>
      </g>
    </svg>
    <span>Continue with Google</span>
  </button>
  <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
      <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
          <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook">
          </path>
        </g>
      </g>
    </svg>
    <span>Continue with Facebook</span>
  </button>
</div>

    </div>
    <div className="my-12 border-b text-center">
      <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
        Or 
      </div>
    </div>
    <div className="mx-auto max-w-xs"> 
      {/* form */}
      <form  onSubmit={handleSubmit(submitForm)} className=''>
        <div className=" flex flex-col gap-8">
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
        placeholder="All Name"
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
      <FieldLabel htmlFor={field.name}>PassWord*</FieldLabel>
      <Input
      type='password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Create a Strong PassWord"
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
      <FieldLabel htmlFor={field.name}>Confirm PassWord*</FieldLabel>
      <Input
       type='password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Confirm your PassWord"
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
        placeholder="+ 1234 567 8900"
        autoComplete="off"
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
        </div>
           
      </form>
     

     
      <button type="submit" className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy={7} r={4} />
          <path d="M20 8v6M23 11h-6" />
        </svg>
        <span className="ml-3">
          Sign Up
        </span>
      </button>


      <p className="mt-6 text-xs text-gray-600 text-center">
        I agree to 
        <a href="#" className="border-b text-green-500 border-gray-200 mx-1 ">
          Terms of Service
        </a>
        and 
        <a href="#" className="border-b text-green-500
        border-gray-200  mx-1">
          Privacy Policy
        </a>
      </p>
    </div>
  </div>
</div>



    </div>
    </div>
    </>
  )
}