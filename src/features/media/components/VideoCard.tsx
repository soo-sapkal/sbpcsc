"use client"

import { motion } from "framer-motion"
import { Play, Clock, Eye } from "lucide-react"
import type { VideoItem } from "@/types/media"

interface VideoCardProps {
  video: VideoItem
  index?: number
  onPlay: (video: VideoItem) => void
}

export function VideoCard({ video, index = 0, onPlay }: VideoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-soft transition-all hover:shadow-card-hover"
      onClick={() => onPlay(video)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onPlay(video)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Play video: ${video.title}`}
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-5xl text-primary/30">🎬</div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-7 w-7 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white">
          5:30
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-2 text-sm font-semibold leading-snug group-hover:text-primary">
          {video.title}
        </h3>
        {video.description && (
          <p className="line-clamp-2 text-xs text-muted-foreground">{video.description}</p>
        )}
      </div>
    </motion.article>
  )
}
