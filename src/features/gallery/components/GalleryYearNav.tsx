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
              ? "bg-[#cf2b1f] text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-red-50 hover:text-[#cf2b1f]"
          }`}
        >
          {year.label}
        </Link>
      ))}
    </nav>
  )
}
