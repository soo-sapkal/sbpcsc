"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { GalleryCard } from "./GalleryCard"
import { EventModal } from "./EventModal"
import type { GalleryEvent, GalleryImage } from "@/types/gallery"

export function GalleryGrid({ events, year }: { events: GalleryEvent[]; year: string }) {
  const filteredEvents = events.filter((event) => event.images.length > 0)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const [modalEvent, setModalEvent] = useState<GalleryEvent | null>(null)

  const currentImage = lightboxImages[lightboxIndex]

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
  }, [lightboxImages.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
  }, [lightboxImages.length])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        goNext()
      } else if (e.key === "ArrowLeft") {
        goPrev()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, goNext, goPrev])

  const openLightbox = useCallback((images: GalleryImage[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <GalleryCard
            key={event.anchorId}
            event={event}
            year={year}
            onImageClick={(image, index) => openLightbox(event.images, index)}
            onReadMore={() => setModalEvent(event)}
          />
        ))}
      </div>

      {modalEvent && (
        <EventModal
          event={modalEvent}
          onClose={() => setModalEvent(null)}
          onImageClick={(image, index) => {
            setModalEvent(null)
            openLightbox(modalEvent.images, index)
          }}
        />
      )}

      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute right-4 top-4 z-10 p-2 text-3xl text-white hover:text-gray-300"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 text-4xl text-white hover:text-gray-300"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 text-4xl text-white hover:text-gray-300"
            aria-label="Next image"
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

          <div className="absolute bottom-6 text-white/80 text-sm font-medium">
            Image {lightboxIndex + 1} of {lightboxImages.length}
          </div>
        </div>
      )}
    </>
  )
}
