"use client"

import { useState } from "react"
import Image from "next/image"

import { PageHeading } from "@/components/sections/PageHeading"
import { NavPills } from "@/components/sections/NavPills"
import { newsletterYears, type NewsletterItem } from "@/features/media/data/newsletter-data"

function NewsletterLightbox({
  images,
  index,
  onClose,
}: {
  images: { src: string; alt: string }[]
  index: number
  onClose: () => void
}) {
  const [current, setCurrent] = useState(index)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-3xl text-white hover:text-gray-300"
      >
        &times;
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }}
            className="absolute left-4 z-10 text-4xl text-white hover:text-gray-300"
          >
            &#8249;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }}
            className="absolute right-4 z-10 text-4xl text-white hover:text-gray-300"
          >
            &#8250;
          </button>
        </>
      )}
      <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-4xl p-4">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={800}
          height={600}
          className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
          unoptimized
        />
        {images.length > 1 && (
          <p className="mt-2 text-center text-sm text-white">
            {current + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  )
}

function GridGroup({ items }: { items: NewsletterItem[] }) {
  const [lightbox, setLightbox] = useState<{
    images: { src: string; alt: string }[]
    index: number
  } | null>(null)
  const allImages = items
    .filter((i) => i.src)
    .map((i) => ({ src: i.src!, alt: i.alt || "" }))

  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map(
          (item, i) =>
            item.src && (
              <button
                key={i}
                onClick={() => {
                  const idx = allImages.findIndex((img) => img.src === item.src)
                  setLightbox({ images: allImages, index: idx })
                }}
                className="block w-full"
              >
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  width={400}
                  height={300}
                  className="w-full rounded-lg object-cover hover:opacity-90"
                  unoptimized
                />
              </button>
            )
        )}
      </div>
      {lightbox && (
        <NewsletterLightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}

function TwoColGroup({ items }: { items: NewsletterItem[] }) {
  return (
    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map(
        (item, i) =>
          item.src && (
            <div key={i} className="flex justify-center">
              <Image
                src={item.src}
                alt={item.alt || ""}
                width={400}
                height={300}
                className="h-auto w-full rounded-lg"
                unoptimized
              />
            </div>
          )
      )}
    </div>
  )
}

function YearContent({ year }: { year: (typeof newsletterYears)[number] }) {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-[#146ab5]">{year.heading}</h2>
      {year.items.map((item, i) => {
        switch (item.type) {
          case "description":
            return (
              <p key={i} className="mb-3 text-sm text-gray-700">
                {item.text}
              </p>
            )
          case "standalone":
            return (
              <div key={i}>
                <div className="flex justify-center">
                  <Image
                    src={item.src!}
                    alt={item.alt || year.heading}
                    width={800}
                    height={600}
                    className="mx-auto mb-4 h-auto max-w-md rounded-lg"
                    unoptimized
                  />
                </div>
                {i < year.items.length - 1 && <hr className="mb-4 border-gray-300" />}
              </div>
            )
          case "two-col":
            return (
              <div key={i}>
                <TwoColGroup items={item.items || []} />
                {i < year.items.length - 1 && <hr className="mb-4 border-gray-300" />}
              </div>
            )
          case "grid":
            return (
              <div key={i}>
                <GridGroup items={item.items || []} />
                {i < year.items.length - 1 && <hr className="mb-4 border-gray-300" />}
              </div>
            )
          default:
            return null
        }
      })}
    </>
  )
}

export default function NewsletterPage() {
  const tabs = newsletterYears.map((year) => ({
    id: year.year,
    label: year.year,
    content: <YearContent year={year} />,
  }))

  return (
    <>
      <PageHeading title="Newsletter" />
      <NavPills tabs={tabs} />
    </>
  )
}
