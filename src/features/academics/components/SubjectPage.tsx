"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SubjectTabs } from "./SubjectTabs"
import { StreamSelector } from "./StreamSelector"
import { scienceSubjects, commerceSubjects } from "@/features/academics/data/subjects"
import { cn } from "@/lib/utils"
import type { Subject } from "@/types/subject"

interface SubjectPageProps {
  params: Promise<{ subject: string }> | { subject: string }
  stream: "science" | "commerce"
}

export function SubjectPage({ params, stream }: SubjectPageProps) {
  const [subject, setSubject] = useState<Subject | null>(null)
  const [subjectId, setSubjectId] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function resolveParams() {
      try {
        const resolved = await params
        setSubjectId(resolved.subject)
      } catch {
        setSubjectId("")
      }
    }
    resolveParams()
  }, [params])

  useEffect(() => {
    if (!subjectId) {
      setIsLoading(false)
      return
    }
    const subjects = stream === "science" ? scienceSubjects : commerceSubjects
    const found = subjects.find((s) => s.id === subjectId)
    setSubject(found || null)
    setIsLoading(false)
  }, [subjectId, stream])

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!subjectId) {
    return (
      <div className="space-y-8">
        <section className="relative overflow-hidden">
          <div className="gradient-hero relative flex min-h-[200px] items-center md:min-h-[250px]">
            <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
            <div className="container-wide relative z-10">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="font-heading text-3xl font-bold capitalize text-white md:text-4xl lg:text-5xl">
                  {stream} Stream
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-white/80">
                  Explore subjects offered in the {stream} stream at {stream === "science" ? "S. B. Patil College of Science" : "S. B. Patil College of Commerce"}.
                </p>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          </div>
        </section>

        <div className="container-wide">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(stream === "science" ? scienceSubjects : commerceSubjects).map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/academics/${stream}/${s.id}`} className="block no-underline">
                  <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-card-hover">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-[3]" />
                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-soft">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-4 font-heading font-bold text-foreground group-hover:text-primary">{s.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!subject) {
    notFound()
    return null
  }

  return (
    <div className="space-y-6">
      <Link
        href={`/academics/${subject.stream}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {subject.stream === "science" ? "Science" : "Commerce"} subjects
      </Link>

      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[200px] items-center md:min-h-[250px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-light">
                {stream === "science" ? "Science" : "Commerce"} Stream
              </p>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {subject.name}
              </h1>
              <p className="mt-3 max-w-3xl text-base text-white/80">{subject.description}</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <div className="container-wide">
        <SubjectTabs subject={subject} />
      </div>
    </div>
  )
}
