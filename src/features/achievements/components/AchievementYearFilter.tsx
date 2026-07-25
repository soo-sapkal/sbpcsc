"use client"

import type { SportsMedalTable } from "@/features/achievements/data/achievements-data"

export function AchievementYearFilter({
  medalTables,
  activeYear,
  onYearChange,
}: {
  medalTables: SportsMedalTable[]
  activeYear: string | null
  onYearChange: (year: string | null) => void
}) {
  const years = [...new Set(medalTables.map((t) => t.year))]

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onYearChange(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          activeYear === null
            ? "bg-[#146ab5] text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeYear === year
              ? "bg-[#146ab5] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  )
}
