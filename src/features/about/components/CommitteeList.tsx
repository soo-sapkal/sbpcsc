"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Users, UserCheck, Shield, BookOpen, Award, GraduationCap, Sparkles, ExternalLink } from "lucide-react"
import { Section } from "@/components/sections/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface CommitteeMember {
  name: string
  designation: string
  role: string
}

interface Committee {
  id: string
  name: string
  icon: typeof Users
  description: string
  members: CommitteeMember[]
}

const committees: Committee[] = [
  {
    id: "governing-body",
    name: "Governing Body",
    icon: Shield,
    description: "The highest decision-making body of the college overseeing all academic and administrative matters.",
    members: [
      { name: "Shri. Dnyaneswar P. Landage", designation: "Chairman, PCET", role: "Chairperson" },
      { name: "Dr. Rajendra K. Sharma", designation: "Principal, SBPCSC", role: "Member Secretary" },
      { name: "Shri. Vitthal S. Kalbhor", designation: "Trustee, PCET", role: "Member" },
      { name: "Shri. Shantaram D. Garade", designation: "Trustee, PCET", role: "Member" },
      { name: "Dr. Suresh V. Joshi", designation: "Education Expert", role: "External Member" },
      { name: "Prof. Meena A. Deshpande", designation: "University Nominee", role: "Member" },
    ],
  },
  {
    id: "academic-council",
    name: "Academic Council",
    icon: BookOpen,
    description: "Responsible for curriculum planning, academic standards, and educational quality assurance.",
    members: [
      { name: "Dr. Rajendra K. Sharma", designation: "Principal", role: "Chairperson" },
      { name: "Prof. Sanjay V. Patil", designation: "Vice Principal", role: "Member" },
      { name: "Dr. Anita S. Kulkarni", designation: "HOD - Science", role: "Member" },
      { name: "Prof. Ramesh K. Joshi", designation: "HOD - Commerce", role: "Member" },
      { name: "Dr. Priya M. Deshmukh", designation: "Senior Faculty", role: "Member" },
      { name: "Prof. Amit S. Sharma", designation: "Senior Faculty", role: "Member" },
    ],
  },
  {
    id: "anti-ragging",
    name: "Anti-Ragging Committee",
    icon: UserCheck,
    description: "Ensures a ragging-free campus environment and handles related grievances.",
    members: [
      { name: "Dr. Rajendra K. Sharma", designation: "Principal", role: "Chairperson" },
      { name: "Prof. Sanjay V. Patil", designation: "Vice Principal", role: "Member" },
      { name: "Dr. Anita S. Kulkarni", designation: "Senior Faculty", role: "Member" },
      { name: "Shri. Prakash G. More", designation: "Administrative Officer", role: "Member" },
      { name: "Insp. Sunil D. Pawar", designation: "Local Police Representative", role: "Member" },
      { name: "Shri. Rohan S. Desai", designation: "Parent Representative", role: "Member" },
    ],
  },
  {
    id: "internal-complaints",
    name: "Internal Complaints Committee",
    icon: Shield,
    description: "Addresses grievances related to sexual harassment and ensures a safe campus for all.",
    members: [
      { name: "Dr. Priya M. Deshmukh", designation: "Senior Faculty", role: "Chairperson" },
      { name: "Dr. Rajendra K. Sharma", designation: "Principal", role: "Member" },
      { name: "Prof. Neha S. Pawar", designation: "Faculty Member", role: "Member" },
      { name: "Smt. Sunita R. Kadam", designation: "NGO Representative", role: "External Member" },
      { name: "Kum. Anjali P. Verma", designation: "Student Representative", role: "Member" },
    ],
  },
  {
    id: "examination",
    name: "Examination Committee",
    icon: Award,
    description: "Manages examination schedules, conduct, and result processing.",
    members: [
      { name: "Prof. Sanjay V. Patil", designation: "Vice Principal", role: "Chairperson" },
      { name: "Dr. Anita S. Kulkarni", designation: "HOD - Science", role: "Member" },
      { name: "Prof. Ramesh K. Joshi", designation: "HOD - Commerce", role: "Member" },
      { name: "Prof. Amit S. Sharma", designation: "Exam Coordinator", role: "Member Secretary" },
      { name: "Shri. Dattatray S. Pawar", designation: "Office Superintendent", role: "Member" },
    ],
  },
  {
    id: "cultural-sports",
    name: "Cultural & Sports Committee",
    icon: Sparkles,
    description: "Organizes cultural events, sports meets, and extracurricular activities.",
    members: [
      { name: "Prof. Neha S. Pawar", designation: "Cultural Coordinator", role: "Chairperson" },
      { name: "Prof. Sameer A. Khan", designation: "Sports Director", role: "Member Secretary" },
      { name: "Dr. Priya M. Deshmukh", designation: "Senior Faculty", role: "Member" },
      { name: "Prof. Vijay K. Patil", designation: "Faculty Member", role: "Member" },
      { name: "Kum. Sneha R. Joshi", designation: "Student Representative", role: "Member" },
      { name: "Shri. Akash D. Mane", designation: "Student Representative", role: "Member" },
    ],
  },
  {
    id: "grievance-redressal",
    name: "Grievance Redressal Committee",
    icon: UserCheck,
    description: "Addresses student and staff grievances promptly and fairly.",
    members: [
      { name: "Dr. Rajendra K. Sharma", designation: "Principal", role: "Chairperson" },
      { name: "Prof. Sanjay V. Patil", designation: "Vice Principal", role: "Member" },
      { name: "Dr. Anita S. Kulkarni", designation: "HOD - Science", role: "Member" },
      { name: "Prof. Ramesh K. Joshi", designation: "HOD - Commerce", role: "Member" },
      { name: "Shri. Prakash G. More", designation: "Administrative Officer", role: "Member Secretary" },
    ],
  },
  {
    id: "library-advisory",
    name: "Library Advisory Committee",
    icon: BookOpen,
    description: "Oversees library resources, acquisitions, and reading culture promotion.",
    members: [
      { name: "Dr. Anita S. Kulkarni", designation: "HOD - Science", role: "Chairperson" },
      { name: "Shri. Dattatray S. Pawar", designation: "Librarian", role: "Member Secretary" },
      { name: "Prof. Amit S. Sharma", designation: "Faculty Member", role: "Member" },
      { name: "Prof. Neha S. Pawar", designation: "Faculty Member", role: "Member" },
      { name: "Kum. Priya S. Gaikwad", designation: "Student Representative", role: "Member" },
    ],
  },
]

export function CommitteeList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = committees.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.members.some((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[250px] items-center md:min-h-[300px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Committees & Councils
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                Our institutional committees ensure effective governance, quality assurance, and a vibrant campus life.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section>
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search committees or members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            aria-label="Search committees"
          />
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-dashed p-12 text-center"
            >
              <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-3 text-muted-foreground">No committees found matching your search.</p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {filtered.map((committee, idx) => (
                <motion.div
                  key={committee.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-start gap-4 border-b bg-muted/30 p-6 md:w-80 md:border-b-0 md:border-r">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <committee.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading font-bold">{committee.name}</h2>
                          <p className="mt-1 text-sm text-muted-foreground">{committee.description}</p>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {committee.members.map((member, mi) => (
                            <div
                              key={mi}
                              className="rounded-lg border bg-card p-3 transition-all duration-200 hover:shadow-soft"
                            >
                              <p className="font-medium text-foreground">{member.name}</p>
                              <p className="text-xs text-muted-foreground">{member.designation}</p>
                              <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                {member.role}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </Section>
    </>
  )
}
