"use client"

import { motion } from "framer-motion"
import { Calendar, User, BookOpen } from "lucide-react"

interface GuestLectureCardProps {
  speaker: string
  topic: string
  date: string
  description: string
  image?: string
  index?: number
}

export function GuestLectureCard({ speaker, topic, date, description, image, index = 0 }: GuestLectureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-xl bg-white shadow-soft transition-all duration-300 hover:shadow-card-hover"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex h-48 w-full flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 sm:h-auto sm:w-44">
          {image ? (
            <img
              src={image}
              alt={speaker}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-3xl font-bold text-primary">
              {speaker.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1 p-5">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1">
              <User className="h-3 w-3" />
              {speaker}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold leading-snug">{topic}</h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.article>
  )
}
