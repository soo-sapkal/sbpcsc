"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import type { GalleryImage } from "@/types/gallery"

export function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: {
  images: GalleryImage[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  const currentImage = images[index]

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight") {
        goNext()
      } else if (e.key === "ArrowLeft") {
        goPrev()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, goNext, goPrev])

  if (!isOpen || !currentImage) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute right-4 top-4 z-10 p-3 text-3xl text-white hover:text-gray-300"
        aria-label="Close"
      >
        &times;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 text-4xl text-white hover:text-gray-300"
        aria-label="Previous"
      >
        &#8249;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 text-4xl text-white hover:text-gray-300"
        aria-label="Next"
      >
        &#8250;
      </button>

      <div
        className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={1200}
          height={900}
          className="max-h-[85vh] max-w-[90vw] object-contain"
          unoptimized
        />
      </div>

      <div className="absolute bottom-6 text-sm font-medium text-white/80">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}
