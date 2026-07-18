"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TrendingDown, Download, FileText, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ACADEMIC_YEARS } from "@/data/constants"

interface CutoffEntry {
  category: string
  science: string
  commerce: string
}

const cutoffData: Record<string, CutoffEntry[]> = {
  "2024-25": [
    { category: "General (Open)", science: "85.60%", commerce: "82.40%" },
    { category: "OBC", science: "78.20%", commerce: "75.80%" },
    { category: "SC", science: "65.40%", commerce: "62.60%" },
    { category: "ST", science: "58.80%", commerce: "55.20%" },
    { category: "VJ/DT (A)", science: "70.50%", commerce: "68.30%" },
    { category: "NT1 (B)", science: "72.40%", commerce: "70.10%" },
    { category: "NT2 (C)", science: "68.30%", commerce: "65.90%" },
    { category: "NT3 (D)", science: "66.70%", commerce: "63.40%" },
    { category: "EWS", science: "75.20%", commerce: "72.60%" },
  ],
  "2023-24": [
    { category: "General (Open)", science: "83.40%", commerce: "80.20%" },
    { category: "OBC", science: "76.80%", commerce: "74.50%" },
    { category: "SC", science: "63.20%", commerce: "60.80%" },
    { category: "ST", science: "56.40%", commerce: "53.60%" },
    { category: "VJ/DT (A)", science: "68.50%", commerce: "66.20%" },
    { category: "NT1 (B)", science: "70.20%", commerce: "68.10%" },
    { category: "NT2 (C)", science: "66.10%", commerce: "63.70%" },
    { category: "NT3 (D)", science: "64.50%", commerce: "61.30%" },
    { category: "EWS", science: "73.80%", commerce: "70.40%" },
  ],
  "2022-23": [
    { category: "General (Open)", science: "80.20%", commerce: "78.40%" },
    { category: "OBC", science: "74.60%", commerce: "72.80%" },
    { category: "SC", science: "61.40%", commerce: "58.60%" },
    { category: "ST", science: "54.20%", commerce: "51.40%" },
    { category: "VJ/DT (A)", science: "66.30%", commerce: "64.10%" },
    { category: "NT1 (B)", science: "68.20%", commerce: "65.90%" },
    { category: "NT2 (C)", science: "64.10%", commerce: "61.50%" },
    { category: "NT3 (D)", science: "62.30%", commerce: "59.20%" },
    { category: "EWS", science: "71.40%", commerce: "68.20%" },
  ],
  "2021-22": [
    { category: "General (Open)", science: "78.60%", commerce: "76.20%" },
    { category: "OBC", science: "72.40%", commerce: "70.60%" },
    { category: "SC", science: "59.80%", commerce: "56.40%" },
    { category: "ST", science: "52.60%", commerce: "49.80%" },
    { category: "VJ/DT (A)", science: "64.20%", commerce: "62.10%" },
    { category: "NT1 (B)", science: "66.40%", commerce: "63.80%" },
    { category: "NT2 (C)", science: "62.30%", commerce: "59.60%" },
    { category: "NT3 (D)", science: "60.10%", commerce: "57.30%" },
    { category: "EWS", science: "69.20%", commerce: "66.40%" },
  ],
}

export function CutoffList() {
  const [selectedYear, setSelectedYear] = useState("2024-25")

  const currentCutoff = cutoffData[selectedYear] || []

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold">Cutoff List</h2>
        <p className="mt-2 text-muted-foreground">
          Category-wise cutoff marks for admission in previous academic years.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {ACADEMIC_YEARS.filter((y) => cutoffData[y]).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                selectedYear === year
                  ? "bg-primary text-white shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
              )}
            >
              {year}
            </button>
          ))}
        </div>
        <a
          href={`/pdf/cutoff-${selectedYear}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      <motion.div
        key={selectedYear}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Cutoff Marks - {selectedYear}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 text-muted-foreground">
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 text-right font-medium">Science (%)</th>
                    <th className="pb-3 text-right font-medium">Commerce (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCutoff.map((row, i) => (
                    <tr
                      key={i}
                      className={cn(
                        "border-b transition-colors hover:bg-muted/50",
                        i % 2 === 0 && "bg-muted/20",
                      )}
                    >
                      <td className="py-3 font-medium">{row.category}</td>
                      <td className="py-3 text-right">{row.science}</td>
                      <td className="py-3 text-right">{row.commerce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl bg-primary/5 p-5"
      >
        <div className="flex items-start gap-3">
          <TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <h4 className="font-medium">About Cutoff Marks</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Cutoff marks are the minimum percentage required for admission to various streams. These cutoffs are
              determined based on the SSC/HSC scores of applicants, the number of available seats, and the reservation
              policy of the Maharashtra State Government. Cutoffs may vary each year depending on the competition and
              applicant pool.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
