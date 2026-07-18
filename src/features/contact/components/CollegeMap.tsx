"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Loader2 } from "lucide-react"
import { siteConfig } from "@/data/site-config"

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`

export function CollegeMap() {
  const [loading, setLoading] = useState(true)
  const handleLoad = () => setLoading(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl shadow-soft"
    >
      {loading && (
        <div className="flex h-full min-h-[300px] items-center justify-center bg-muted">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}

      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        height="400"
        style={{ border: 0, display: loading ? "none" : "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad}
        title="S. B. Patil College Location Map"
        aria-label="College location on Google Maps"
        className="rounded-xl"
      />

      <div className="pointer-events-none absolute bottom-4 left-4 right-4">
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium shadow-md backdrop-blur-sm">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="text-foreground">{siteConfig.address}</span>
        </div>
      </div>
    </motion.div>
  )
}
