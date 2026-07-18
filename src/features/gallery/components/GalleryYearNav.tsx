"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ACADEMIC_YEARS } from "@/data/constants"

interface GalleryYearNavProps {
  activeYear: string
  onYearChange: (year: string) => void
}

export function GalleryYearNav({ activeYear, onYearChange }: GalleryYearNavProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center justify-center gap-2" aria-label="Gallery year navigation">
      {ACADEMIC_YEARS.map((year) => (
        <motion.button
          key={year}
          onClick={() => onYearChange(year)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
            activeYear === year
              ? "bg-primary text-white shadow-md shadow-primary/30"
              : "bg-white text-muted-foreground shadow-soft hover:text-primary",
          )}
          aria-current={activeYear === year ? true : undefined}
        >
          {year}
        </motion.button>
      ))}
    </nav>
  )
}
