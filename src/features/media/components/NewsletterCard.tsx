"use client"

import { motion } from "framer-motion"
import { FileText, Download, Eye, Calendar, ChevronRight } from "lucide-react"
import type { NewsletterItem } from "@/types/media"

interface NewsletterCardProps {
  item: NewsletterItem
  title: string
  index?: number
}

export function NewsletterCard({ item, title, index = 0 }: NewsletterCardProps) {
  const coverImage = item.images.find((img) => img.caption?.includes("Cover")) || item.images[0]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl bg-white shadow-soft transition-all hover:shadow-card-hover"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
        {coverImage && (
          <img
            src={coverImage.src}
            alt={coverImage.caption || title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-full gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
          <button
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
            aria-label="View newsletter"
          >
            <Eye className="h-3.5 w-3.5" /> View
          </button>
          <button
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary/90 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-primary"
            aria-label="Download newsletter"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{item.year}</span>
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{title}</h3>
      </div>
    </motion.article>
  )
}
