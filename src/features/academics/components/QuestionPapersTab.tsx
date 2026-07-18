"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, Search, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { Subject } from "@/types/subject"

interface QuestionPapersTabProps {
  subject: Subject
}

const pastPapers = [
  { year: 2025, month: "March", title: "HSC Board Examination 2025", type: "Board" },
  { year: 2024, month: "March", title: "HSC Board Examination 2024", type: "Board" },
  { year: 2024, month: "October", title: "Preliminary Examination 2024", type: "Preliminary" },
  { year: 2023, month: "March", title: "HSC Board Examination 2023", type: "Board" },
  { year: 2023, month: "October", title: "Preliminary Examination 2023", type: "Preliminary" },
  { year: 2022, month: "March", title: "HSC Board Examination 2022", type: "Board" },
  { year: 2022, month: "October", title: "Preliminary Examination 2022", type: "Preliminary" },
  { year: 2021, month: "March", title: "HSC Board Examination 2021", type: "Board" },
  { year: 2020, month: "March", title: "HSC Board Examination 2020", type: "Board" },
  { year: 2019, month: "March", title: "HSC Board Examination 2019", type: "Board" },
]

export function QuestionPapersTab({ subject }: QuestionPapersTabProps) {
  const [searchYear, setSearchYear] = useState("")

  const filtered = pastPapers.filter(
    (p) => !searchYear || p.year.toString().includes(searchYear),
  )

  const years = [...new Set(pastPapers.map((p) => p.year))].sort((a, b) => b - a)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-heading text-xl font-bold">Question Papers - {subject.name}</h2>
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by year..."
            value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}
            className="pl-9"
            aria-label="Search question papers by year"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSearchYear("")}
          className={cn(
            "rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
            !searchYear ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
          )}
        >
          All
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSearchYear(year.toString())}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
              searchYear === year.toString()
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
            )}
          >
            {year}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-dashed p-12 text-center"
          >
            <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-3 text-muted-foreground">No question papers found for this year.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filtered.map((paper, i) => {
              const pdfPath = `/pdf/${subject.stream}/${subject.id}/question-papers/${paper.year}-${paper.month.toLowerCase()}.pdf`
              return (
                <motion.div
                  key={`${paper.year}-${paper.month}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block no-underline"
                  >
                    <Card className="flex items-center gap-4 p-4 transition-all duration-200 hover:shadow-medium">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{paper.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {paper.month} {paper.year} | {paper.type}
                        </p>
                      </div>
                      <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
