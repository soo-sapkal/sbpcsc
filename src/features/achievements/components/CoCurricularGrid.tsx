"use client"

import { useState } from "react"
import Image from "next/image"
import type {
  SportsMedalTable,
  SportsAchievement,
  AchievementImage,
} from "@/features/achievements/data/achievements-data"

export function CoCurricularGrid({
  medalTables,
  achievements,
  activeYear,
}: {
  medalTables: SportsMedalTable[]
  achievements: SportsAchievement[]
  activeYear: string | null
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<AchievementImage[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (images: AchievementImage[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const filteredTables = activeYear
    ? medalTables.filter((t) => t.year === activeYear)
    : medalTables

  return (
    <div>
      {filteredTables.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Medal Tables</h2>
          {filteredTables.map((table) => (
            <div key={table.year} className="mb-8">
              <h3 className="text-xl font-bold text-[#146ab5] mb-3">{table.year}</h3>

              {table.image && (
                <Image
                  src={table.image}
                  alt={`${table.year} sports team`}
                  width={800}
                  height={500}
                  className="max-w-lg mx-auto rounded-lg mb-4"
                  unoptimized
                />
              )}

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#146ab5] text-white">
                      <th className="px-3 py-2 text-left">Event</th>
                      <th className="px-3 py-2 text-left">Gold</th>
                      <th className="px-3 py-2 text-left">Silver</th>
                      <th className="px-3 py-2 text-left">Bronze</th>
                      <th className="px-3 py-2 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.events.map((event, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 border-b border-gray-200">{event.name}</td>
                        <td className="px-3 py-2 border-b border-gray-200 bg-amber-100">{event.gold}</td>
                        <td className="px-3 py-2 border-b border-gray-200 bg-gray-100">{event.silver}</td>
                        <td className="px-3 py-2 border-b border-gray-200 bg-orange-100">{event.bronze}</td>
                        <td className="px-3 py-2 border-b border-gray-200 font-medium">{event.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#1a237e] text-white font-bold">
                      <td className="px-3 py-2">Total</td>
                      <td className="px-3 py-2 bg-amber-100 text-gray-900">{table.total.gold}</td>
                      <td className="px-3 py-2 bg-gray-100 text-gray-900">{table.total.silver}</td>
                      <td className="px-3 py-2 bg-orange-100 text-gray-900">{table.total.bronze}</td>
                      <td className="px-3 py-2">{table.total.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sports Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border p-4">
              <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
              {achievement.description && (
                <p className="text-sm text-gray-600 mb-3 whitespace-pre-line">{achievement.description}</p>
              )}
              {achievement.images && achievement.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {achievement.images.map((img, j) => (
                    <button
                      key={j}
                      onClick={() => openLightbox(achievement.images!, j)}
                      className="block w-full text-left"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={300}
                        className="w-full h-36 object-cover rounded-lg hover:opacity-90 transition-opacity"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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
