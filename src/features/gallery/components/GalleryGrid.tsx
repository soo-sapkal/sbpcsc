"use client"

import { useState } from "react"
import { GalleryCard } from "./GalleryCard"
import { EventModal } from "./EventModal"
import { Lightbox } from "@/components/sections/Lightbox"
import type { GalleryEvent, GalleryImage } from "@/types/gallery"

export function GalleryGrid({ events, year }: { events: GalleryEvent[]; year: string }) {
  const filteredEvents = events.filter((event) => event.images.length > 0)

  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null)
  const [modalEvent, setModalEvent] = useState<GalleryEvent | null>(null)

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightbox({ images, index })
  }

  return (
    <>
      {filteredEvents.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">No photos to display.</p>
      ) : (
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
      )}

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

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}