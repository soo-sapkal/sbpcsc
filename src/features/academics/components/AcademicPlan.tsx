"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Download, FileText, ChevronDown, ChevronUp, BookOpen, ClipboardList, GraduationCap } from "lucide-react"
import { Section } from "@/components/sections/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { ACADEMIC_YEARS } from "@/data/constants"

interface AcademicEvent {
  date: string
  event: string
  category: "exam" | "holiday" | "event" | "admission" | "result"
}

const academicData: Record<string, { title: string; events: AcademicEvent[] }> = {
  "science-hsc": {
    title: "Science - HSC (11th & 12th)",
    events: [
      { date: "15 Jun 2025", event: "Commencement of Academic Session 2025-26", category: "event" },
      { date: "15 Jun - 30 Jun 2025", event: "Orientation Program for New Students", category: "event" },
      { date: "15 Aug 2025", event: "Independence Day Celebration", category: "holiday" },
      { date: "Aug - Sep 2025", event: "First Term Internal Assessment", category: "exam" },
      { date: "Sep - Oct 2025", event: "First Terminal Examination", category: "exam" },
      { date: "2 Oct 2025", event: "Gandhi Jayanti", category: "holiday" },
      { date: "Oct - Nov 2025", event: "Diwali Vacation", category: "holiday" },
      { date: "Nov - Dec 2025", event: "Second Term Begins", category: "event" },
      { date: "Dec 2025", event: "Second Internal Assessment", category: "exam" },
      { date: "26 Jan 2026", event: "Republic Day Celebration", category: "holiday" },
      { date: "Jan - Feb 2026", event: "Preliminary Examination (12th)", category: "exam" },
      { date: "Feb 2026", event: "Winter Break", category: "holiday" },
      { date: "Feb - Mar 2026", event: "Annual Examination (11th)", category: "exam" },
      { date: "Feb - Mar 2026", event: "HSC Board Practical Examination", category: "exam" },
      { date: "Mar 2026", event: "HSC Board Theory Examination", category: "exam" },
      { date: "Apr 2026", event: "Result Declaration", category: "result" },
      { date: "Apr - May 2026", event: "Summer Vacation", category: "holiday" },
    ],
  },
  "commerce-hsc": {
    title: "Commerce - HSC (11th & 12th)",
    events: [
      { date: "15 Jun 2025", event: "Commencement of Academic Session 2025-26", category: "event" },
      { date: "15 Jun - 30 Jun 2025", event: "Orientation Program for New Students", category: "event" },
      { date: "15 Aug 2025", event: "Independence Day Celebration", category: "holiday" },
      { date: "Aug - Sep 2025", event: "First Term Internal Assessment", category: "exam" },
      { date: "Sep - Oct 2025", event: "First Terminal Examination", category: "exam" },
      { date: "2 Oct 2025", event: "Gandhi Jayanti", category: "holiday" },
      { date: "Oct - Nov 2025", event: "Diwali Vacation", category: "holiday" },
      { date: "Nov - Dec 2025", event: "Second Term Begins", category: "event" },
      { date: "Dec 2025", event: "Second Internal Assessment", category: "exam" },
      { date: "26 Jan 2026", event: "Republic Day Celebration", category: "holiday" },
      { date: "Jan - Feb 2026", event: "Preliminary Examination (12th)", category: "exam" },
      { date: "Feb 2026", event: "Winter Break", category: "holiday" },
      { date: "Feb - Mar 2026", event: "Annual Examination (11th)", category: "exam" },
      { date: "Feb - Mar 2026", event: "HSC Board Practical Examination", category: "exam" },
      { date: "Mar 2026", event: "HSC Board Theory Examination", category: "exam" },
      { date: "Apr 2026", event: "Result Declaration", category: "result" },
      { date: "Apr - May 2026", event: "Summer Vacation", category: "holiday" },
    ],
  },
}

const categoryStyles = {
  exam: "border-l-4 border-l-accent bg-accent/5",
  holiday: "border-l-4 border-l-amber-500 bg-amber-50/50",
  event: "border-l-4 border-l-primary bg-primary/5",
  admission: "border-l-4 border-l-green-500 bg-green-50/50",
  result: "border-l-4 border-l-purple-500 bg-purple-50/50",
}

const categoryIcons = {
  exam: ClipboardList,
  holiday: Calendar,
  event: BookOpen,
  admission: GraduationCap,
  result: FileText,
}

export function AcademicPlan() {
  const [year, setYear] = useState("2025-26")

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[250px] items-center md:min-h-[300px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Academic Plan
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                Academic calendar, term schedules, and important dates for the current academic year.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium">Academic Year:</span>
          </div>
          <div className="flex gap-2">
            {ACADEMIC_YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  year === y
                    ? "bg-primary text-white shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
                )}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="science-hsc" className="w-full">
          <TabsList className="mb-8 w-full">
            <TabsTrigger value="science-hsc" className="flex-1">
              <GraduationCap className="mr-2 h-4 w-4" />
              Science (11th & 12th)
            </TabsTrigger>
            <TabsTrigger value="commerce-hsc" className="flex-1">
              <BookOpen className="mr-2 h-4 w-4" />
              Commerce (11th & 12th)
            </TabsTrigger>
          </TabsList>

          {Object.entries(academicData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-heading text-xl font-bold">{data.title}</h2>
                <a
                  href={`/pdf/academic-plan-${key}-${year}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>

              <div className="space-y-3">
                {data.events.map((event, ei) => {
                  const Icon = categoryIcons[event.category]
                  return (
                    <motion.div
                      key={ei}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ei * 0.03 }}
                      className={cn(
                        "flex items-start gap-4 rounded-lg p-4 transition-all hover:shadow-soft",
                        categoryStyles[event.category],
                      )}
                    >
                      <div className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        event.category === "exam" && "bg-accent/10 text-accent",
                        event.category === "holiday" && "bg-amber-100 text-amber-600",
                        event.category === "event" && "bg-primary/10 text-primary",
                        event.category === "result" && "bg-purple-100 text-purple-600",
                      )}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{event.event}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                      <span className={cn(
                        "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                        event.category === "exam" && "bg-accent/10 text-accent",
                        event.category === "holiday" && "bg-amber-100 text-amber-600",
                        event.category === "event" && "bg-primary/10 text-primary",
                        event.category === "result" && "bg-purple-100 text-purple-600",
                      )}>
                        {event.category}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </>
  )
}
