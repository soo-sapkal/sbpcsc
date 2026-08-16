"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

export interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  initialIndex?: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  const safePrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const safeNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (images.length === 0) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") safePrev()
      if (e.key === "ArrowRight") safeNext()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [images.length, onClose, safePrev, safeNext])

  if (images.length === 0) return null

  const image = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        &times;
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              safePrev()
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl text-white transition hover:bg-white/25"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              safeNext()
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl text-white transition hover:bg-white/25"
          >
            &#8250;
          </button>
        </>
      )}

      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={900}
          className="max-h-[85vh] max-w-[90vw] object-contain"
          unoptimized
        />
      </div>

      {images.length > 1 && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80">
          Image {index + 1} of {images.length}
        </p>
      )}
    </div>
  )
}