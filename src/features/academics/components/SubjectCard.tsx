"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Atom, Beaker, Dna, Globe, Monitor, FunctionSquare, Languages, Calculator, BarChart3, BookMarked, ScrollText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Subject } from "@/types/subject"

const iconMap: Record<string, typeof BookOpen> = {
  physics: Atom,
  chemistry: Beaker,
  biology: Dna,
  geography: Globe,
  it: Monitor,
  cs: Monitor,
  math: FunctionSquare,
  marathi: Languages,
  english: Languages,
  hindi: Languages,
  account: Calculator,
  secretarial: BookMarked,
  ocm: BarChart3,
  economics: ScrollText,
}

interface SubjectCardProps {
  subject: Subject
  index: number
}

export function SubjectCard({ subject, index }: SubjectCardProps) {
  const Icon = iconMap[subject.id] || BookOpen
  const href = `/academics/${subject.stream}/${subject.id}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={href} className="block no-underline">
        <Card
          hover
          className="group relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-[3] group-hover:bg-primary/10" />
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-soft">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <h3 className="mt-4 font-heading font-bold text-foreground group-hover:text-primary">
              {subject.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {subject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium capitalize text-primary">
                {subject.stream}
              </span>
              {subject.faculty.length > 0 && (
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                  {subject.faculty.length} Faculty
                </span>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
