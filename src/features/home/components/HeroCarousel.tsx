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
      <div className="carousel slide carousel-fade" data-interval="4000">
        <ol className="carousel-indicators">
          {sliderImages.map((_, i) => (
            <li key={i} data-target="#carousel-example-generic" data-slide-to={i} className={i === current ? "active" : ""} />
          ))}
        </ol>

        <div className="carousel-inner relative w-full overflow-hidden" role="listbox">
          <div className="relative w-full" style={{ aspectRatio: "7/2" }}>
            {sliderImages.map((img, i) => (
              <div
                key={i}
                className={`item absolute inset-0 ${i === current ? "active" : ""}`}
              >
                <center>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="w-full"
                    sizes="100vw"
                    preload={i === 0}
                  />
                </center>
                <div className="carousel-caption" />
              </div>
            ))}
          </div>
        </div>

        <a className="left carousel-control" role="button" onClick={prev}>
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" role="button" onClick={next}>
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
