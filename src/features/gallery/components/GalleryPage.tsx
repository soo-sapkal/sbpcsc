"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GalleryYearNav } from "./GalleryYearNav"
import { GalleryGrid } from "./GalleryGrid"

interface GalleryPageProps {
  params: Promise<{ year: string }>
  type: "activities" | "guest-lectures"
}

export function GalleryPage({ params, type }: GalleryPageProps) {
  const [activeYear, setActiveYear] = useState<string>("")

  const handleYearChange = (year: string) => {
    setActiveYear(year)
    window.history.replaceState(null, "", `/gallery/${type}/${year}`)
  }

  return (
    <>
      <section className="gradient-primary section-padding text-white">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-3xl font-bold md:text-4xl"
          >
            {type === "activities" ? "College Gallery" : "Guest Lectures"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-white/80"
          >
            {type === "activities"
              ? "Explore our vibrant campus life through photos from various events and activities"
              : "Browse through guest lectures conducted by industry experts and academicians"}
          </motion.p>
        </div>
      </section>

      <div className="section-padding pb-0">
        <div className="container-wide">
          <GalleryYearNav
            activeYear={activeYear || undefined!}
            onYearChange={handleYearChange}
          />
        </div>
      </div>

      <GalleryGrid params={params} type={type} />
    </>
  )
}
