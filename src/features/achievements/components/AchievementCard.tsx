"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Medal } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Achievement } from "@/types/achievement"

interface AchievementCardProps {
  achievement: Achievement
  index?: number
}

const typeConfig = {
  academic: { icon: Trophy, bg: "bg-amber-50", text: "text-amber-600", label: "Academic" },
  sports: { icon: Award, bg: "bg-blue-50", text: "text-blue-600", label: "Sports" },
  cultural: { icon: Medal, bg: "bg-purple-50", text: "text-purple-600", label: "Cultural" },
}

export function AchievementCard({ achievement, index = 0 }: AchievementCardProps) {
  const config = typeConfig[achievement.type]
  const Icon = config.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-xl bg-white shadow-soft transition-all hover:shadow-card-hover"
    >
      <div className="flex flex-col sm:flex-row">
        {achievement.image && (
          <div className="relative h-40 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-40">
            <img
              src={achievement.image}
              alt={achievement.studentName || achievement.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 p-5">
          <div className="mb-3 flex items-center justify-between">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                config.bg,
                config.text,
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {config.label}
            </span>
            <span className="text-xs text-muted-foreground">{achievement.year}</span>
          </div>

          <h3 className="mb-1 text-lg font-semibold leading-snug">{achievement.title}</h3>

          {achievement.studentName && (
            <p className="mb-2 text-sm font-medium text-primary">{achievement.studentName}</p>
          )}

          <p className="line-clamp-2 text-sm text-muted-foreground">{achievement.description}</p>

          {achievement.rank && (
            <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-amber-600">
              <Medal className="h-4 w-4" />
              Rank: {achievement.rank}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}
