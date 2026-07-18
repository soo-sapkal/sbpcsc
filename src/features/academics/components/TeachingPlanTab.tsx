"use client"

import { motion } from "framer-motion"
import { Calendar, Download, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/sections/Section"
import type { Subject } from "@/types/subject"

interface TeachingPlanTabProps {
  subject: Subject
}

interface MonthPlan {
  month: string
  weeks: { week: string; topics: string[]; hours: number }[]
}

const teachingPlans: Record<string, MonthPlan[]> = {
  physics: [
    {
      month: "June - July",
      weeks: [
        { week: "Week 1-2", topics: ["Introduction to Physics", "Units and Measurements", "Dimensional Analysis"], hours: 12 },
        { week: "Week 3-4", topics: ["Motion in a Straight Line", "Graphical Analysis", "Kinematic Equations"], hours: 10 },
        { week: "Week 5-6", topics: ["Motion in a Plane", "Projectile Motion", "Relative Velocity"], hours: 10 },
        { week: "Week 7-8", topics: ["Newton's Laws of Motion", "Free Body Diagrams", "Applications"], hours: 10 },
      ],
    },
    {
      month: "August - September",
      weeks: [
        { week: "Week 9-10", topics: ["Friction", "Circular Motion", "Banking of Roads"], hours: 10 },
        { week: "Week 11-12", topics: ["Work, Energy and Power", "Work-Energy Theorem", "Conservation of Energy"], hours: 10 },
        { week: "Week 13-14", topics: ["Collisions", "Center of Mass", "Revision for Terminal Exam"], hours: 10 },
        { week: "Week 15-16", topics: ["First Terminal Examination"], hours: 0 },
      ],
    },
    {
      month: "October - November",
      weeks: [
        { week: "Week 17-18", topics: ["Rotational Motion", "Moment of Inertia", "Torque"], hours: 10 },
        { week: "Week 19-20", topics: ["Gravitation", "Kepler's Laws", "Satellites"], hours: 10 },
        { week: "Week 21-22", topics: ["Elasticity", "Hooke's Law", "Stress-Strain"], hours: 8 },
        { week: "Week 23-24", topics: ["Diwali Vacation"], hours: 0 },
      ],
    },
    {
      month: "December - January",
      weeks: [
        { week: "Week 25-26", topics: ["Thermodynamics", "Heat Transfer", "Laws of Thermodynamics"], hours: 10 },
        { week: "Week 27-28", topics: ["Kinetic Theory of Gases", "Specific Heat", "Revision"], hours: 10 },
        { week: "Week 29-30", topics: ["Oscillations", "Simple Harmonic Motion", "Pendulum"], hours: 10 },
        { week: "Week 31-32", topics: ["Waves", "Wave Motion", "Sound Waves"], hours: 10 },
      ],
    },
    {
      month: "February - March",
      weeks: [
        { week: "Week 33-34", topics: ["Electrostatics", "Electric Field", "Electric Potential"], hours: 10 },
        { week: "Week 35-36", topics: ["Current Electricity", "Ohm's Law", "Circuit Analysis"], hours: 10 },
        { week: "Week 37-38", topics: ["Full Syllabus Revision", "Practice Tests", "Doubts Session"], hours: 12 },
        { week: "Week 39-40", topics: ["HSC Board Practical & Theory Examination"], hours: 0 },
      ],
    },
  ],
  chemistry: [
    {
      month: "June - July",
      weeks: [
        { week: "Week 1-2", topics: ["Basic Concepts of Chemistry", "Mole Concept", "Stoichiometry"], hours: 12 },
        { week: "Week 3-4", topics: ["Atomic Structure", "Quantum Numbers", "Electronic Configuration"], hours: 10 },
        { week: "Week 5-6", topics: ["Periodic Classification", "Periodic Properties", "Trends"], hours: 10 },
        { week: "Week 7-8", topics: ["Chemical Bonding", "VSEPR Theory", "Hybridization"], hours: 10 },
      ],
    },
    {
      month: "August - September",
      weeks: [
        { week: "Week 9-10", topics: ["States of Matter", "Gas Laws", "Intermolecular Forces"], hours: 10 },
        { week: "Week 11-12", topics: ["Thermodynamics", "Enthalpy", "Spontaneity"], hours: 10 },
        { week: "Week 13-14", topics: ["Chemical Equilibrium", "Le Chatelier's Principle", "Ionic Equilibrium"], hours: 10 },
        { week: "Week 15-16", topics: ["First Terminal Examination"], hours: 0 },
      ],
    },
    {
      month: "October - November",
      weeks: [
        { week: "Week 17-18", topics: ["Redox Reactions", "Oxidation Numbers", "Balancing"], hours: 8 },
        { week: "Week 19-20", topics: ["Hydrogen and Its Compounds", "Water", "Hydrogen Peroxide"], hours: 8 },
        { week: "Week 21-22", topics: ["s-Block Elements", "Alkali Metals", "Alkaline Earth Metals"], hours: 8 },
        { week: "Week 23-24", topics: ["Diwali Vacation"], hours: 0 },
      ],
    },
    {
      month: "December - January",
      weeks: [
        { week: "Week 25-26", topics: ["p-Block Elements", "Boron Family", "Carbon Family"], hours: 10 },
        { week: "Week 27-28", topics: ["Organic Chemistry Basics", "IUPAC Nomenclature", "Isomerism"], hours: 10 },
        { week: "Week 29-30", topics: ["Hydrocarbons", "Alkanes", "Alkenes", "Alkynes"], hours: 10 },
        { week: "Week 31-32", topics: ["Environmental Chemistry", "Pollution", "Green Chemistry"], hours: 8 },
      ],
    },
    {
      month: "February - March",
      weeks: [
        { week: "Week 33-34", topics: ["Biomolecules", "Carbohydrates", "Proteins", "Vitamins"], hours: 10 },
        { week: "Week 35-36", topics: ["Full Syllabus Revision", "Practice Papers"], hours: 12 },
        { week: "Week 37-38", topics: ["Doubts Session", "Mock Tests"], hours: 10 },
        { week: "Week 39-40", topics: ["HSC Board Practical & Theory Examination"], hours: 0 },
      ],
    },
  ],
  mathematics: [
    {
      month: "June - July",
      weeks: [
        { week: "Week 1-2", topics: ["Sets and Set Operations", "Relations and Functions", "Types of Functions"], hours: 12 },
        { week: "Week 3-4", topics: ["Trigonometric Functions", "Trigonometric Equations", "Inverse Trigonometry"], hours: 10 },
        { week: "Week 5-6", topics: ["Complex Numbers", "Algebra of Complex Numbers", "Argand Plane"], hours: 10 },
        { week: "Week 7-8", topics: ["Linear Inequalities", "Graphical Solutions", "Word Problems"], hours: 8 },
      ],
    },
    {
      month: "August - September",
      weeks: [
        { week: "Week 9-10", topics: ["Permutations and Combinations", "Binomial Theorem"], hours: 10 },
        { week: "Week 11-12", topics: ["Sequence and Series", "Arithmetic Progression", "Geometric Progression"], hours: 10 },
        { week: "Week 13-14", topics: ["Straight Lines", "Slope and Intercept Forms", "Distance Formula"], hours: 10 },
        { week: "Week 15-16", topics: ["First Terminal Examination"], hours: 0 },
      ],
    },
    {
      month: "October - November",
      weeks: [
        { week: "Week 17-18", topics: ["Conic Sections", "Circle", "Parabola", "Ellipse"], hours: 10 },
        { week: "Week 19-20", topics: ["3D Geometry", "Direction Cosines", "Distance in 3D"], hours: 8 },
        { week: "Week 21-22", topics: ["Limits", "Algebra of Limits", "Standard Limits"], hours: 10 },
        { week: "Week 23-24", topics: ["Diwali Vacation"], hours: 0 },
      ],
    },
    {
      month: "December - January",
      weeks: [
        { week: "Week 25-26", topics: ["Derivatives", "Differentiation Rules", "Chain Rule"], hours: 10 },
        { week: "Week 27-28", topics: ["Applications of Derivatives", "Rate of Change", "Maxima-Minima"], hours: 10 },
        { week: "Week 29-30", topics: ["Integration", "Methods of Integration", "Definite Integrals"], hours: 10 },
        { week: "Week 31-32", topics: ["Statistics", "Measures of Dispersion", "Correlation"], hours: 8 },
      ],
    },
    {
      month: "February - March",
      weeks: [
        { week: "Week 33-34", topics: ["Probability", "Conditional Probability", "Bayes' Theorem"], hours: 10 },
        { week: "Week 35-36", topics: ["Full Syllabus Revision", "Practice Tests"], hours: 12 },
        { week: "Week 37-38", topics: ["Mock Board Examination", "Doubts Session"], hours: 10 },
        { week: "Week 39-40", topics: ["HSC Board Examination"], hours: 0 },
      ],
    },
  ],
}

export function TeachingPlanTab({ subject }: TeachingPlanTabProps) {
  const plan = teachingPlans[subject.id] || []

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold">Teaching Plan - {subject.name}</h2>
        <a
          href={`/pdf/${subject.stream}/${subject.id}/teaching-plan.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          <Download className="h-4 w-4" />
          Download Full Plan
        </a>
      </div>

      {plan.length > 0 ? (
        <div className="space-y-6">
          {plan.map((monthPlan, mi) => (
            <motion.div
              key={mi}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: mi * 0.05 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{monthPlan.month}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b text-muted-foreground">
                          <th className="pb-3 font-medium">Week</th>
                          <th className="pb-3 font-medium">Topics Covered</th>
                          <th className="pb-3 text-right font-medium">Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthPlan.weeks.map((week, wi) => (
                          <tr key={wi} className="border-b last:border-0">
                            <td className="py-2.5 align-top font-medium text-primary">{week.week}</td>
                            <td className="py-2.5">
                              <ul className="space-y-0.5">
                                {week.topics.map((topic, ti) => (
                                  <li key={ti} className="flex items-center gap-1.5 text-muted-foreground">
                                    <ChevronRight className="h-3 w-3 shrink-0" />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </td>
                            <td className="py-2.5 text-right">
                              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                {week.hours} hrs
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 font-heading font-bold">Teaching Plan Coming Soon</h3>
          <p className="mt-2 text-muted-foreground">
            The detailed teaching plan for {subject.name} will be available shortly.
          </p>
        </div>
      )}
    </div>
  )
}
