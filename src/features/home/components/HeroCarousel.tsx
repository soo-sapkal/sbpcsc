"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { SliderImage } from "@/features/home/data/slider-images"
import { sliderImages as defaultImages } from "@/features/home/data/slider-images"

function useCarousel(length: number) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length)
  }, [length])

  useEffect(() => {
    if (length === 0) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next, length])

  return { current, next, prev, setCurrent }
}

function CarouselSlides({ images, current }: { images: SliderImage[]; current: number }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      <div className="relative aspect-[7/2] w-full">
        {images.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "pointer-events-none opacity-0"}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>
    </div>
  )
}

function CarouselControls({
  onPrev,
  onNext,
  onSelect,
  count,
  current,
}: {
  onPrev: () => void
  onNext: () => void
  onSelect: (i: number) => void
  count: number
  current: number
}) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-[4] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white shadow-md transition hover:bg-black/60"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-[4] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white shadow-md transition hover:bg-black/60"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-3 left-1/2 z-[4] flex -translate-x-1/2 gap-2">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </>
  )
}

export function HeroCarousel({ images }: { images?: SliderImage[] }) {
  const imgs = images ?? defaultImages
  const { current, next, prev, setCurrent } = useCarousel(imgs.length)

  if (imgs.length === 0) return null

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-8xl px-4">
          <div className="relative">
            <CarouselSlides images={imgs} current={current} />
            <CarouselControls onPrev={prev} onNext={next} onSelect={setCurrent} count={imgs.length} current={current} />
          </div>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden">
        <div className="max-w-full overflow-hidden">
          <div className="relative aspect-[16/9] w-full">
            <Image src={imgs[current].src} alt={imgs[current].alt} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}