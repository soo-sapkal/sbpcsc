"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AchievementYearFilter } from "./AchievementYearFilter"
import { CoCurricularGrid } from "./CoCurricularGrid"
import { Trophy, Users, Star } from "lucide-react"

export function AchievementsPage() {
  const [activeYear, setActiveYear] = useState("All")

  return (
    <>
      <section className="gradient-primary section-padding text-white">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-3xl font-bold md:text-4xl"
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-white/80"
          >
            Celebrating the accomplishments of our students in academics, sports, and cultural activities
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Trophy, value: "50+", label: "Academic Excellence Awards", color: "text-amber-500" },
              { icon: Star, value: "30+", label: "Sports Championships Won", color: "text-blue-500" },
              { icon: Users, value: "100+", label: "Cultural Event Participants", color: "text-purple-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-white p-6 text-center shadow-soft"
              >
                <stat.icon className={`mx-auto mb-3 h-8 w-8 ${stat.color}`} />
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-padding pb-0">
        <div className="container-wide">
          <AchievementYearFilter activeYear={activeYear} onYearChange={setActiveYear} />
        </div>
      </div>

      <CoCurricularGrid />
    </>
  )
}
