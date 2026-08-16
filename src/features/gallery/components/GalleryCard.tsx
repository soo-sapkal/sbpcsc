"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
import Image from "next/image"
import type { GalleryEvent, GalleryImage } from "@/types/gallery"

export function GalleryCard({
  event,
  onImageClick,
  onReadMore,
  year,
}: {
  event: GalleryEvent
  onImageClick: (image: GalleryImage, index: number) => void
  onReadMore?: (event: GalleryEvent) => void
  year: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    if (descRef.current) {
      setShowReadMore(descRef.current.scrollWidth > descRef.current.clientWidth)
    } else {
      setShowReadMore(false)
    }
  }, [event.description])

  useEffect(() => {
    if (paused || event.images.length <= 1) return
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % event.images.length)
    }, 3500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, event.images.length])

  const currentImage = event.images[currentIndex]

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="p-4 pb-0">
        <h3 className="text-lg font-semibold text-brand">{event.name}</h3>
        {event.description && (
          <p ref={descRef} className="mt-1 truncate text-sm text-muted-foreground">{event.description}</p>
        )}
        {showReadMore && (
          <button
            onClick={() => onReadMore?.(event)}
            className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
          >
            Read More &raquo;
          </button>
        )}
      </div>

      <div
        className="relative mt-3 aspect-[16/9] cursor-pointer overflow-hidden"
        onClick={() => onImageClick(currentImage, currentIndex)}
      >
        {event.images.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
        ))}
        {event.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {event.images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
