"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { VideoCard } from "./VideoCard"
import type { VideoItem } from "@/types/media"

const sampleVideos: VideoItem[] = [
  {
    id: "vid-1",
    title: "S. B. Patil College Campus Tour",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Take a virtual tour of our beautiful campus featuring state-of-the-art infrastructure and facilities.",
  },
  {
    id: "vid-2",
    title: "Annual Day Celebration 2025-26 Highlights",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Highlights from the grand annual day celebration with cultural performances and prize distribution.",
  },
  {
    id: "vid-3",
    title: "Guest Lecture: AI & Career Opportunities",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Dr. Rajesh Kumar speaks about the future of artificial intelligence and career opportunities for students.",
  },
  {
    id: "vid-4",
    title: "Sports Day 2025-26 Highlights",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Thrilling moments from our annual sports day featuring athletics, team sports, and cultural performances.",
  },
  {
    id: "vid-5",
    title: "Science Exhibition 2025-26",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Students showcase innovative science projects at our annual science exhibition.",
  },
  {
    id: "vid-6",
    title: "Freshers Party 2025-26",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Welcome ceremony for the new batch with exciting performances and fun activities.",
  },
  {
    id: "vid-7",
    title: "Independence Day Celebration 2025",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Patriotic fervor as students and staff celebrate Independence Day with flag hoisting and cultural programs.",
  },
  {
    id: "vid-8",
    title: "Workshop on Financial Literacy",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Commerce department organizes an interactive workshop on financial literacy and investment strategies.",
  },
]

export function VideoGallery() {
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null)

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Video Gallery</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Watch videos of college events, guest lectures, campus tours, and more
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sampleVideos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} onPlay={setPlayingVideo} />
          ))}
        </div>

        <AnimatePresence>
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setPlayingVideo(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Video player"
            >
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>

              <motion.div
                key={playingVideo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="aspect-video w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`${playingVideo.embedUrl}?autoplay=1`}
                  title={playingVideo.title}
                  className="h-full w-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="mt-3 text-center text-sm font-medium text-white">
                  {playingVideo.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
