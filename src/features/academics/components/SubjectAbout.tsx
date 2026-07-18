"use client"

import { motion } from "framer-motion"
import { BookOpen, Brain, Briefcase, TrendingUp, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Subject } from "@/types/subject"

interface SubjectAboutProps {
  subject: Subject
}

const subjectDetails: Record<string, { importance: string; scope: string; careerPaths: string[] }> = {
  physics: {
    importance: "Physics is the fundamental science that explains the laws of nature. It forms the basis for engineering, medicine, and technology.",
    scope: "From quantum mechanics to astrophysics, physics opens doors to diverse fields of study and research.",
    careerPaths: ["Engineering (All branches)", "Research & Development", "Data Science & Analytics", "Astronomy & Space Science", "Medical Physics", "Teaching & Academia"],
  },
  chemistry: {
    importance: "Chemistry is central to understanding matter and its transformations. It bridges the gap between physics and biology.",
    scope: "Essential for careers in medicine, pharmaceuticals, materials science, and environmental science.",
    careerPaths: ["Pharmaceutical Industry", "Chemical Engineering", "Forensic Science", "Environmental Science", "Food Technology", "Research Scientist"],
  },
  biology: {
    importance: "Biology is the study of life and living organisms. It provides the foundation for medical and life sciences.",
    scope: "Critical for careers in medicine, biotechnology, genetics, and environmental conservation.",
    careerPaths: ["Medicine (MBBS/BDS)", "Biotechnology", "Genetics & Genomics", "Marine Biology", "Pharmaceutical Research", "Environmental Conservation"],
  },
  mathematics: {
    importance: "Mathematics is the language of science and the foundation of logical reasoning and analytical thinking.",
    scope: "Indispensable in fields ranging from engineering to economics, cryptography to artificial intelligence.",
    careerPaths: ["Actuarial Science", "Data Science & AI", "Financial Analysis", "Cryptography", "Teaching & Research", "Software Engineering"],
  },
  marathi: {
    importance: "Marathi language and literature connect students to Maharashtra's rich cultural heritage and linguistic traditions.",
    scope: "Proficiency in Marathi opens opportunities in literature, media, translation, and civil services.",
    careerPaths: ["Journalism & Media", "Civil Services (MPSC)", "Translation & Interpretation", "Teaching & Academia", "Creative Writing", "Theatre & Films"],
  },
  english: {
    importance: "English is a global language essential for communication, higher education, and professional success.",
    scope: "Mastery of English is invaluable in almost every career path, from law to technology.",
    careerPaths: ["Content Writing & Journalism", "Public Relations", "Law", "Teaching & Academia", "Corporate Communications", "Creative Writing"],
  },
  hindi: {
    importance: "Hindi is one of the most widely spoken languages in India, promoting national integration and cultural understanding.",
    scope: "Hindi proficiency offers opportunities in media, government services, and translation.",
    careerPaths: ["Government Services", "Journalism & Media", "Translation & Interpretation", "Teaching", "Film & Entertainment", "Publishing"],
  },
  geography: {
    importance: "Geography helps understand the Earth's physical features, climate patterns, and human-environment interactions.",
    scope: "Critical for careers in environmental science, urban planning, GIS, and disaster management.",
    careerPaths: ["GIS Specialist", "Urban Planning", "Environmental Management", "Meteorology", "Cartography", "Teaching & Research"],
  },
  it: {
    importance: "Information Technology is the backbone of the digital age, driving innovation across every industry.",
    scope: "IT skills are in high demand, offering vast career opportunities in software, networking, and cybersecurity.",
    careerPaths: ["Software Development", "Web Development", "Network Administration", "Cybersecurity", "Cloud Computing", "IT Consulting"],
  },
  cs: {
    importance: "Computer Science is the study of computation and information processing, powering the digital revolution.",
    scope: "Computer scientists are at the forefront of innovation in AI, machine learning, and software engineering.",
    careerPaths: ["Software Engineering", "AI & Machine Learning", "Data Science", "Cybersecurity", "Game Development", "Research"],
  },
}

export function SubjectAbout({ subject }: SubjectAboutProps) {
  const details = subjectDetails[subject.id] || {
    importance: `${subject.name} is a crucial subject that provides students with essential knowledge and skills for academic and professional growth.`,
    scope: `${subject.name} offers diverse opportunities in higher education and career development.`,
    careerPaths: ["Higher Education", "Research", "Teaching", "Corporate Sector", "Government Services"],
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6">
          <h2 className="font-heading text-xl font-bold">About {subject.name}</h2>
          <p className="mt-3 text-muted-foreground">{subject.description}</p>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="h-full p-6">
            <Brain className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-heading font-bold">Importance</h3>
            <p className="mt-2 text-sm text-muted-foreground">{details.importance}</p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <Card className="h-full p-6">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-heading font-bold">Career Scope</h3>
            <p className="mt-2 text-sm text-muted-foreground">{details.scope}</p>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6">
          <Briefcase className="h-8 w-8 text-primary" />
          <h3 className="mt-3 font-heading font-bold">Career Paths</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {details.careerPaths.map((path, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border bg-card p-3 transition-all duration-200 hover:shadow-soft"
              >
                <ArrowRight className="h-4 w-4 text-primary" />
                <span className="text-sm">{path}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {subject.faculty.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            <h3 className="font-heading font-bold">Faculty Overview</h3>
            <p className="mt-2 text-muted-foreground">
              The {subject.name} department is staffed by {subject.faculty.length} highly qualified and experienced
              faculty members dedicated to providing quality education and mentoring to students.
            </p>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
