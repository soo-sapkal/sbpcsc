"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { sliderImages } from "@/features/home/data/slider-images"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

export function HeroCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="relative" aria-label="Hero carousel">
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} !h-2.5 !w-2.5 !rounded-full !bg-white/50 !opacity-70 transition-all duration-300 swiper-pagination-bullet-active:!w-6 swiper-pagination-bullet-active:!rounded-full swiper-pagination-bullet-active:!bg-accent swiper-pagination-bullet-active:!opacity-100"></span>`,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }}
          loop
          className="hero-swiper"
          style={{ aspectRatio: "1920/700" }}
        >
          {sliderImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full min-h-[300px] w-full sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i < 2}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 md:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 md:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
