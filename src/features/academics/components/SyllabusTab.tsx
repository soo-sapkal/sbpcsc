"use client"

import { motion } from "framer-motion"
import { FileText, Download, BookOpen, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Subject } from "@/types/subject"

interface SyllabusTabProps {
  subject: Subject
}

interface Topic {
  unit: string
  title: string
  topics: string[]
}

const subjectTopics: Record<string, Topic[]> = {
  physics: [
    { unit: "Unit I", title: "Physical World and Measurement", topics: ["Physics - Scope and Excitement", "Units and Measurements", "Errors in Measurement", "Dimensional Analysis"] },
    { unit: "Unit II", title: "Kinematics", topics: ["Motion in a Straight Line", "Motion in a Plane", "Projectile Motion", "Relative Velocity"] },
    { unit: "Unit III", title: "Laws of Motion", topics: ["Newton's Laws of Motion", "Friction", "Circular Motion", "Dynamics of Uniform Circular Motion"] },
    { unit: "Unit IV", title: "Work, Energy and Power", topics: ["Work Done by a Force", "Kinetic and Potential Energy", "Work-Energy Theorem", "Conservation of Energy"] },
    { unit: "Unit V", title: "Thermodynamics", topics: ["Thermal Equilibrium", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Heat Engines"] },
  ],
  chemistry: [
    { unit: "Unit I", title: "Some Basic Concepts of Chemistry", topics: ["Mole Concept", "Stoichiometry", "Atomic and Molecular Masses", "Chemical Reactions"] },
    { unit: "Unit II", title: "Structure of Atom", topics: ["Atomic Models", "Quantum Numbers", "Electronic Configuration", "Periodic Properties"] },
    { unit: "Unit III", title: "Chemical Bonding", topics: ["Ionic Bond", "Covalent Bond", "VSEPR Theory", "Hybridization"] },
    { unit: "Unit IV", title: "Chemical Thermodynamics", topics: ["First Law of Thermodynamics", "Enthalpy", "Spontaneity", "Gibbs Free Energy"] },
    { unit: "Unit V", title: "Organic Chemistry", topics: ["Classification of Organic Compounds", "IUPAC Nomenclature", "Reaction Mechanisms", "Functional Groups"] },
  ],
  biology: [
    { unit: "Unit I", title: "Diversity in Living World", topics: ["Classification Systems", "Kingdom Plantae", "Kingdom Animalia", "Biodiversity"] },
    { unit: "Unit II", title: "Cell: Structure and Function", topics: ["Cell Theory", "Cell Organelles", "Cell Division", "Biomolecules"] },
    { unit: "Unit III", title: "Plant Physiology", topics: ["Photosynthesis", "Respiration", "Plant Growth", "Transport in Plants"] },
    { unit: "Unit IV", title: "Human Physiology", topics: ["Digestion and Absorption", "Breathing and Exchange of Gases", "Circulation", "Excretion"] },
    { unit: "Unit V", title: "Genetics and Evolution", topics: ["Mendelian Genetics", "DNA Structure", "Gene Expression", "Evolution Theories"] },
  ],
  mathematics: [
    { unit: "Unit I", title: "Sets and Functions", topics: ["Sets and Their Representations", "Relations and Functions", "Trigonometric Functions", "Complex Numbers"] },
    { unit: "Unit II", title: "Algebra", topics: ["Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequence and Series"] },
    { unit: "Unit III", title: "Coordinate Geometry", topics: ["Straight Lines", "Conic Sections", "Introduction to 3D Geometry", "Circle"] },
    { unit: "Unit IV", title: "Calculus", topics: ["Limits and Derivatives", "Continuity", "Differentiability", "Applications of Derivatives"] },
    { unit: "Unit V", title: "Statistics and Probability", topics: ["Measures of Dispersion", "Probability", "Conditional Probability", "Bayes' Theorem"] },
  ],
}

export function SyllabusTab({ subject }: SyllabusTabProps) {
  const topics = subjectTopics[subject.id] || []
  const pdfPath = `/pdf/${subject.stream}/${subject.id}/syllabus.pdf`

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold">Syllabus for {subject.name}</h2>
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          <Download className="h-4 w-4" />
          Download Syllabus
        </a>
      </div>

      {topics.length > 0 ? (
        <div className="space-y-4">
          {topics.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{unit.unit}</span>
                  </div>
                  <h3 className="mt-1 font-heading font-bold">{unit.title}</h3>
                </div>
                <div className="divide-y">
                  {unit.topics.map((topic, ti) => (
                    <div key={ti} className="flex items-center gap-3 px-4 py-2.5">
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 font-heading font-bold">Syllabus Coming Soon</h3>
          <p className="mt-2 text-muted-foreground">
            The detailed syllabus for {subject.name} will be available shortly. Please check back later.
          </p>
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            <FileText className="h-4 w-4" />
            View Current Syllabus PDF
          </a>
        </div>
      )}
    </div>
  )
}
