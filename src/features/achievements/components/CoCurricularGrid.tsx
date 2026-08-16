"use client"

import { useState } from "react"
import Image from "next/image"
import { Lightbox } from "@/components/sections/Lightbox"
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
  const [lightbox, setLightbox] = useState<{ images: AchievementImage[]; index: number } | null>(null)

  const openLightbox = (images: AchievementImage[], index: number) => {
    setLightbox({ images, index })
  }

  const filteredTables = activeYear
    ? medalTables.filter((t) => t.year === activeYear)
    : medalTables

  return (
    <div>
      {filteredTables.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Medal Tables</h2>
          {filteredTables.map((table) => (
            <div key={table.year} className="mb-8">
              <h3 className="mb-3 text-xl font-bold text-brand">{table.year}</h3>

              {table.image && (
                <Image
                  src={table.image}
                  alt={`${table.year} sports team`}
                  width={800}
                  height={500}
                  className="mx-auto mb-4 max-w-lg rounded-lg"
                  unoptimized
                />
              )}

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand text-white">
                      <th className="px-3 py-2 text-left">Event</th>
                      <th className="px-3 py-2 text-left">Gold</th>
                      <th className="px-3 py-2 text-left">Silver</th>
                      <th className="px-3 py-2 text-left">Bronze</th>
                      <th className="px-3 py-2 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.events.map((event, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-muted/50"}>
                        <td className="border-b border-border px-3 py-2">{event.name}</td>
                        <td className="border-b border-border bg-amber-100 px-3 py-2">{event.gold}</td>
                        <td className="border-b border-border bg-muted/50 px-3 py-2">{event.silver}</td>
                        <td className="border-b border-border bg-orange-100 px-3 py-2">{event.bronze}</td>
                        <td className="border-b border-border px-3 py-2 font-medium">{event.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-brand-dark font-bold text-white">
                      <td className="px-3 py-2">Total</td>
                      <td className="bg-amber-100 px-3 py-2 text-foreground">{table.total.gold}</td>
                      <td className="bg-muted/50 px-3 py-2 text-foreground">{table.total.silver}</td>
                      <td className="bg-orange-100 px-3 py-2 text-foreground">{table.total.bronze}</td>
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
        <h2 className="mb-6 text-2xl font-bold text-foreground">Sports Achievements</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((achievement, i) => (
            <div key={i} className="rounded-xl border bg-surface p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-foreground">{achievement.title}</h4>
              {achievement.description && (
                <p className="mb-3 text-sm whitespace-pre-line text-muted-foreground">{achievement.description}</p>
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
                        className="h-36 w-full rounded-lg object-cover transition-opacity hover:opacity-90"
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
