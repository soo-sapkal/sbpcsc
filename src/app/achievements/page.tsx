"use client"

import { useState } from "react"
import { NavPills } from "@/components/sections/NavPills"
import { PageHeading } from "@/components/sections/PageHeading"
import { achievementsData } from "@/features/achievements/data/achievements-data"
import { AchievementCard, AchievementYearFilter, CoCurricularGrid } from "@/features/achievements"

export default function AchievementsPage() {
  const [activeYear, setActiveYear] = useState<string | null>(null)

  const tabs = [
    {
      id: "academic",
      label: "Academic Achievements",
      content: (
        <section className="mb-10 mt-6">
          {achievementsData.academic.map((section, i) => (
            <AchievementCard key={i} section={section} />
          ))}
        </section>
      ),
    },
    {
      id: "co-curricular",
      label: "Co Curricular Activities",
      content: (
        <section className="mt-6">
          <AchievementYearFilter
            medalTables={achievementsData.coCurricular.medalTables}
            activeYear={activeYear}
            onYearChange={setActiveYear}
          />
          <CoCurricularGrid
            medalTables={achievementsData.coCurricular.medalTables}
            achievements={achievementsData.coCurricular.achievements}
            activeYear={activeYear}
          />
        </section>
      ),
    },
  ]

  return (
    <>
      <PageHeading title="Achievements" />
      <NavPills tabs={tabs} />
    </>
  )
}
