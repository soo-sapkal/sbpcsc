"use client"

import { motion } from "framer-motion"
import { Expand } from "lucide-react"
import type { GalleryImage } from "@/types/gallery"

interface GalleryCardProps {
  image: GalleryImage
  index: number
  onOpen: (index: number) => void
}

export function GalleryCard({ image, index, onOpen }: GalleryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={() => onOpen(index)}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`View ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <Expand className="h-5 w-5 text-foreground" />
        </div>
      </div>
      {image.caption && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-sm font-medium text-white">{image.caption}</p>
        </div>
      )}
    </motion.button>
  )
}
