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
            ? "bg-brand text-white"
            : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
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
              ? "bg-brand text-white"
              : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  )
}
