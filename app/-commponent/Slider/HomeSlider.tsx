'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import homeSliderImg from '../../images/home-slider-1.d79601a8.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    image: homeSliderImg,
    title: 'Fresh Products Delivered',
    highlight: 'to your Door',
    subtitle: 'Get 20% off your first order',
    primaryCta: { label: 'Shop Now', href: '/shop' },
    secondaryCta: { label: 'View Deals', href: '/deals' },
  },
  {
    image: homeSliderImg,
    title: 'Fruits & Vegetables',
    highlight: 'Fresh Every Day',
    subtitle: 'Sourced daily from local farms',
    primaryCta: { label: 'Shop Now', href: '/shop' },
    secondaryCta: { label: 'Learn More', href: '/categories' },
  },
  {
    image: homeSliderImg,
    title: 'Weekly Groceries',
    highlight: 'Made Easy',
    subtitle: 'Free shipping on orders over 500 EGP',
    primaryCta: { label: 'Shop Now', href: '/shop' },
    secondaryCta: { label: 'Learn More', href: '/about' },
  },
]

export default function HeroSlider() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        <Swiper
          loop
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error - swiper types don't know about ref timing
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-expect-error - swiper types don't know about ref timing
            swiper.params.navigation.nextEl = nextRef.current
          }}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />

                {/* green overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-green-500/60 to-green-400/20" />

                {/* content */}
                <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-8 sm:px-14 lg:px-20">
                  <h3 className="max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    {slide.title} <br />
                    {slide.highlight}
                  </h3>
                  <p className="text-sm font-medium text-white/90 sm:text-base">
                    {slide.subtitle}
                  </p>
                  <div className="mt-2 flex gap-3">
                    <Link
                      href={slide.primaryCta.href}
                      className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-emerald-700 shadow-md transition hover:bg-emerald-50"
                    >
                      {slide.primaryCta.label}
                    </Link>
                    <Link
                      href={slide.secondaryCta.href}
                      className="rounded-md border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* custom arrows */}
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-md transition hover:bg-white"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <button
          ref={nextRef}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-md transition hover:bg-white"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>

      <style jsx global>{`
        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 22px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  )
}