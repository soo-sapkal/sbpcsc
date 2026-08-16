"use client"

import Link from "next/link"
import type { GalleryYear } from "@/types/gallery"

export function GalleryYearNav({
  years,
  currentYear,
  type,
}: {
  years: GalleryYear[]
  currentYear: string
  type: "activities" | "guest-lecture"
}) {
  const basePath = type === "activities" ? "activities" : "guest-lectures"

  return (
    <nav className="mb-8 flex flex-wrap gap-2">
      {years.map((year) => (
        <Link
          key={year.year}
          href={`/gallery/${basePath}/${year.year}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            currentYear === year.year
              ? "bg-accent text-white shadow-md"
              : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
          }`}
        >
          {year.label}
        </Link>
      ))}
    </nav>
  )
}
