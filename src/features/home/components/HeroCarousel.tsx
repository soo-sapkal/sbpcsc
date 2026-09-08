"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Award, GraduationCap, Trophy, Microscope } from "lucide-react"
import { sliderImages } from "@/features/home/data/slider-images"

const trustPillars = [
  {
    icon: GraduationCap,
    stat: "34+ Years",
    label: "PCET Educational Legacy (Estd. 1990)",
    color: "text-amber-500",
  },
  {
    icon: Award,
    stat: "100% Result",
    label: "Consistent Maharashtra HSC Board Pass Rate",
    color: "text-emerald-500",
  },
  {
    icon: Trophy,
    stat: "Top Rankers",
    label: "Proven MHT-CET, NEET & JEE State Achievements",
    color: "text-amber-400",
  },
  {
    icon: Microscope,
    stat: "Modern Labs",
    label: "Physics, Chemistry, Biology & IT Centers",
    color: "text-cyan-400",
  },
]

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
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full bg-slate-900">
      {/* Slider Visual Container */}
      <div className="relative w-full overflow-hidden aspect-[16/10] sm:aspect-[16/8] md:aspect-[1920/700] bg-slate-950">
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            {/* Subtle bottom shadow gradient to elevate the text and controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 p-1 rounded-full bg-black/30 backdrop-blur-sm">
          {sliderImages.slice(0, 10).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-amber-400" : "w-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Institutional Trust & Excellence Bar (Docked Directly Under Carousel) */}
      <div className="bg-[#081c33] border-b border-[#143e6d] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${idx !== 0 ? "pt-3 md:pt-0 md:pl-4" : ""}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0f3056] border border-slate-700/50 shadow-inner">
                    <Icon className={`h-6 w-6 ${pillar.color}`} />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-tight font-serif">
                      {pillar.stat}
                    </div>
                    <div className="text-xs text-slate-300 font-medium leading-snug">
                      {pillar.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
