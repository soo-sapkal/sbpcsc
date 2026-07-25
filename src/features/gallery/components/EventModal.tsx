"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import type { GalleryEvent, GalleryImage } from "@/types/gallery"

interface EventModalProps {
  event: GalleryEvent
  onClose: () => void
  onImageClick: (image: GalleryImage, index: number) => void
}

export function EventModal({ event, onClose, onImageClick }: EventModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 py-10"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-5xl rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#146ab5]">{event.name}</h2>
            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {event.description && (
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {event.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 p-6 md:grid-cols-3 lg:grid-cols-4">
          {event.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onImageClick(image, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
