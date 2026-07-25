"use client"

import { useState } from "react"
import Image from "next/image"
import type { AchievementImage, AchievementSection } from "@/features/achievements/data/achievements-data"

export function AchievementCard({ section }: { section: AchievementSection }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<AchievementImage[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (images: AchievementImage[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
      <h3 className="text-lg font-semibold text-[#146ab5] mb-2">{section.title}</h3>

      {section.description && (
        <p className="text-sm text-gray-700 mb-3 whitespace-pre-line">{section.description}</p>
      )}

      {section.videos && section.videos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {section.videos.map((video, i) => (
            <iframe
              key={i}
              src={video}
              className="aspect-video rounded-lg w-full"
              allowFullScreen
              title={`${section.title} video ${i + 1}`}
            />
          ))}
        </div>
      )}

      {section.standaloneImages && section.standaloneImages.length > 0 && (
        <div className="mb-4">
          {section.standaloneImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${section.title} ${i + 1}`}
              width={800}
              height={600}
              className="mx-auto max-w-md h-auto mb-4 rounded-lg"
              unoptimized
            />
          ))}
        </div>
      )}

      {section.tableRows && !section.horizontalLayout && (
        <div className="overflow-x-auto mb-4">
          <table className="w-full border border-gray-300">
            <tbody>
              {section.tableRows.map((row, i) => (
                <tr key={i} className="border-b border-gray-300">
                  <td className="p-2 w-16">
                    <Image src={row.image} alt={row.name} width={0} height={0} sizes="80px" className="w-full h-auto rounded" unoptimized />
                  </td>
                  <td className="p-2 font-medium">{row.name}</td>
                  <td className="p-2 text-gray-600">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.tableRows && section.horizontalLayout && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {section.tableRows.map((row, i) => (
            <div key={i} className="text-center border border-gray-300 rounded-lg p-3">
              <Image src={row.image} alt={row.name} width={0} height={0} sizes="(max-width: 768px) 50vw, 25vw" className="max-w-[90px] w-full h-auto rounded mx-auto" unoptimized />
              <p className="mt-2 font-medium text-sm">{row.name}</p>
            </div>
          ))}
        </div>
      )}

      {section.images && section.images.length > 0 && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {section.images.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(section.images!, i)}
              className="block w-full text-left"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gray-300"
          >
            &times;
          </button>

          {lightboxImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))
                }}
                className="absolute left-4 text-white text-4xl z-10 hover:text-gray-300"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))
                }}
                className="absolute right-4 text-white text-4xl z-10 hover:text-gray-300"
              >
                &#8250;
              </button>
            </>
          )}

          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[90vh] p-4">
            <Image
              src={lightboxImages[lightboxIndex].src}
              alt={lightboxImages[lightboxIndex].alt}
              width={1200}
              height={900}
              className="w-auto h-auto max-h-[85vh] object-contain rounded-lg"
              unoptimized
            />
            {lightboxImages.length > 1 && (
              <p className="text-white text-center mt-2 text-sm">
                {lightboxIndex + 1} / {lightboxImages.length}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
