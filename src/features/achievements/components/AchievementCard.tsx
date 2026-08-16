"use client"

import { useState } from "react"
import Image from "next/image"
import { Lightbox } from "@/components/sections/Lightbox"
import type { AchievementImage, AchievementSection } from "@/features/achievements/data/achievements-data"

export function AchievementCard({ section }: { section: AchievementSection }) {
  const [lightbox, setLightbox] = useState<{ images: AchievementImage[]; index: number } | null>(null)

  const openLightbox = (images: AchievementImage[], index: number) => {
    setLightbox({ images, index })
  }

  return (
    <div className="mb-6 border-b border-neutral-200 pb-6">
      <h3 className="mb-2 text-lg font-semibold text-brand">{section.title}</h3>

      {section.description && (
        <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line">{section.description}</p>
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
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <tbody>
              {section.tableRows.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="w-16 p-2">
                    <Image src={row.image} alt={row.name} width={0} height={0} sizes="80px" className="h-auto w-full rounded" unoptimized />
                  </td>
                  <td className="p-2 font-medium">{row.name}</td>
                  <td className="p-2 text-muted-foreground">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.tableRows && section.horizontalLayout && (
        <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {section.tableRows.map((row, i) => (
            <div key={i} className="rounded-lg border border-border p-3 text-center">
              <Image src={row.image} alt={row.name} width={0} height={0} sizes="(max-width: 768px) 50vw, 25vw" className="mx-auto w-full max-w-[90px] rounded" unoptimized />
              <p className="mt-2 text-sm font-medium">{row.name}</p>
            </div>
          ))}
        </div>
      )}

      {section.images && section.images.length > 0 && (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5">
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
                className="h-auto w-full rounded-lg transition-opacity hover:opacity-90"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
