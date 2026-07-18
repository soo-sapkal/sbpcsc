"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { sliderImages } from "@/features/home/data/slider-images"

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const length = sliderImages.length

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length)
  }, [length])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="sbpcsc-slider hidden md:block">
      <div className="carousel-fade">
        <div className="relative w-full" style={{ aspectRatio: "1920/700" }}>
          {sliderImages.map((img, i) => (
            <div
              key={i}
              className={`item absolute inset-0 transition-opacity duration-700 carousel-fade-item ${i === current ? "active" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="w-full object-cover"
                sizes="100vw"
                preload={i === 0}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="carousel-control left-0 z-[2]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>
        <button
          onClick={next}
          className="carousel-control right-0 z-[2]"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        <div className="carousel-indicators">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[10px] w-[10px] rounded-full border border-white/50 ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
