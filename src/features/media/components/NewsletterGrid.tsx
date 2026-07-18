"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { NewsletterCard } from "./NewsletterCard"
import { cn } from "@/lib/utils"
import type { NewsletterItem } from "@/types/media"

const newsletters: { item: NewsletterItem; title: string }[] = [
  {
    title: "SBPCSC Newsletter – January 2026",
    item: {
      year: "2025-26",
      images: [
        { src: "/images/newsletter/2025-26/jan-cover.jpg", caption: "Cover – January 2026" },
        { src: "/images/newsletter/2025-26/jan-page1.jpg", caption: "Principal's Message" },
        { src: "/images/newsletter/2025-26/jan-page2.jpg", caption: "Events Recap" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – December 2025",
    item: {
      year: "2025-26",
      images: [
        { src: "/images/newsletter/2025-26/dec-cover.jpg", caption: "Cover – December 2025" },
        { src: "/images/newsletter/2025-26/dec-page1.jpg", caption: "Academic Achievements" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – November 2025",
    item: {
      year: "2025-26",
      images: [
        { src: "/images/newsletter/2025-26/nov-cover.jpg", caption: "Cover – November 2025" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – October 2025",
    item: {
      year: "2025-26",
      images: [
        { src: "/images/newsletter/2025-26/oct-cover.jpg", caption: "Cover – October 2025" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – March 2025",
    item: {
      year: "2024-25",
      images: [
        { src: "/images/newsletter/2024-25/mar-cover.jpg", caption: "Cover – March 2025" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – February 2025",
    item: {
      year: "2024-25",
      images: [
        { src: "/images/newsletter/2024-25/feb-cover.jpg", caption: "Cover – February 2025" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – January 2025",
    item: {
      year: "2024-25",
      images: [
        { src: "/images/newsletter/2024-25/jan-cover.jpg", caption: "Cover – January 2025" },
      ],
    },
  },
  {
    title: "SBPCSC Newsletter – December 2024",
    item: {
      year: "2024-25",
      images: [
        { src: "/images/newsletter/2024-25/dec-cover.jpg", caption: "Cover – December 2024" },
      ],
    },
  },
]

const years = Array.from(new Set(newsletters.map((n) => n.item.year)))

export function NewsletterGrid() {
  const [activeYear, setActiveYear] = useState<string>("All")

  const filtered = useMemo(
    () => newsletters.filter((n) => activeYear === "All" || n.item.year === activeYear),
    [activeYear],
  )

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Newsletters</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Stay updated with our college newsletters featuring academic highlights, events, and achievements
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveYear("All")}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              activeYear === "All"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground shadow-soft hover:text-primary",
            )}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                activeYear === year
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground shadow-soft hover:text-primary",
              )}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((n, i) => (
            <NewsletterCard key={n.title} item={n.item} title={n.title} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-white shadow-soft">
            <p className="text-muted-foreground">No newsletters found for the selected year.</p>
          </div>
        )}
      </div>
    </section>
  )
}
