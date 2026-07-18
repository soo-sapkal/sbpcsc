"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { AchievementCard } from "./AchievementCard"
import { cn } from "@/lib/utils"
import type { Achievement } from "@/types/achievement"

const achievements: Achievement[] = [
  {
    id: "ach-1",
    type: "academic",
    title: "First Rank in MHT-CET 2025",
    description: "Anisha Mahesh Kale secured the first rank in the PCM group with an outstanding score of 99.87 percentile, bringing glory to the college.",
    studentName: "Anisha Mahesh Kale",
    year: "2024-25",
    rank: "1st",
    category: "Science",
  },
  {
    id: "ach-2",
    type: "academic",
    title: "HSC Board Topper – Science",
    description: "Anushka Somnath Pol topped the HSC Science stream with an exceptional score of 92.5%, showcasing academic excellence.",
    studentName: "Anushka Somnath Pol",
    year: "2024-25",
    rank: "1st",
    category: "Science",
  },
  {
    id: "ach-3",
    type: "academic",
    title: "HSC Board Topper – Commerce",
    description: "Scored the highest marks in the Commerce stream with distinction in all subjects, setting a new benchmark.",
    studentName: "Rohit Sharma",
    year: "2024-25",
    rank: "1st",
    category: "Commerce",
  },
  {
    id: "ach-4",
    type: "sports",
    title: "Gold Medal in Inter-Collegiate Athletics",
    description: "Won gold medal in the 100m sprint at the Inter-Collegiate Athletic Championship, setting a new meet record.",
    studentName: "Priya Patil",
    year: "2025-26",
    rank: "Gold",
    category: "Athletics",
  },
  {
    id: "ach-5",
    type: "sports",
    title: "State Level Kabaddi Championship",
    description: "Our college kabaddi team secured the second position at the State Level Kabaddi Championship, demonstrating exceptional teamwork.",
    studentName: "College Kabaddi Team",
    year: "2025-26",
    rank: "2nd",
    category: "Team Sports",
  },
  {
    id: "ach-6",
    type: "sports",
    title: "Bronze Medal in Chess Tournament",
    description: "Secured third place in the District Level Chess Tournament, displaying strategic thinking and competitive spirit.",
    studentName: "Amit Verma",
    year: "2024-25",
    rank: "3rd",
    category: "Indoor Sports",
  },
  {
    id: "ach-7",
    type: "cultural",
    title: "First Prize in Inter-College Dance Competition",
    description: "Our college dance group won the first prize at the Zonal Youth Festival Dance Competition with a mesmerizing performance.",
    studentName: "Dance Squad",
    year: "2025-26",
    rank: "1st",
    category: "Performing Arts",
  },
  {
    id: "ach-8",
    type: "cultural",
    title: "Best Speaker Award – Debate Competition",
    description: "Awarded Best Speaker at the Regional Debate Competition for articulate and persuasive arguments on contemporary issues.",
    studentName: "Neha Gupta",
    year: "2024-25",
    rank: "Best Speaker",
    category: "Literary",
  },
  {
    id: "ach-9",
    type: "academic",
    title: "Science Project Award – District Exhibition",
    description: "Innovative project on water purification using natural materials won the first prize at the District Science Exhibition.",
    studentName: "Sneha Joshi & Aditya Kulkarni",
    year: "2025-26",
    rank: "1st",
    category: "Science",
  },
  {
    id: "ach-10",
    type: "cultural",
    title: "Rangoli Competition Winner",
    description: "Won the first prize in the Rangoli Competition organized during the college cultural fest with a vibrant design.",
    studentName: "Pooja Deshmukh",
    year: "2023-24",
    rank: "1st",
    category: "Fine Arts",
  },
  {
    id: "ach-11",
    type: "sports",
    title: "Volleyball Tournament Runners-Up",
    description: "Our volleyball team reached the finals of the Inter-College Volleyball Tournament, showcasing excellent sportsmanship.",
    studentName: "Volleyball Team",
    year: "2023-24",
    rank: "2nd",
    category: "Team Sports",
  },
  {
    id: "ach-12",
    type: "cultural",
    title: "Elocution Competition – First Place",
    description: "Delivered an inspiring speech on 'Role of Youth in Nation Building' and secured first place in the elocution competition.",
    studentName: "Rahul More",
    year: "2025-26",
    rank: "1st",
    category: "Literary",
  },
]

export function CoCurricularGrid() {
  const [activeType, setActiveType] = useState<string>("All")

  const types = Array.from(new Set(achievements.map((a) => a.type)))
  const typeLabels: Record<string, string> = { academic: "Academic", sports: "Sports", cultural: "Cultural" }

  const filtered = useMemo(
    () => achievements.filter((a) => activeType === "All" || a.type === activeType),
    [activeType],
  )

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Co-Curricular Achievements</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Celebrating excellence across academics, sports, and cultural activities
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveType("All")}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              activeType === "All"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground shadow-soft hover:text-primary",
            )}
          >
            All
          </button>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                activeType === type
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground shadow-soft hover:text-primary",
              )}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {filtered.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-white shadow-soft">
            <p className="text-muted-foreground">No achievements found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
