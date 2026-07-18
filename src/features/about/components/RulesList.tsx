"use client"

import { motion } from "framer-motion"
import { Download, FileText, Shield, BookOpen, Users, AlertTriangle, GraduationCap, Monitor, DollarSign } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Section } from "@/components/sections/Section"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RuleCategory {
  id: string
  title: string
  icon: typeof Shield
  description: string
  rules: { title: string; detail: string }[]
  pdfPath?: string
}

const ruleCategories: RuleCategory[] = [
  {
    id: "general",
    title: "General Rules & Discipline",
    icon: Shield,
    description: "Code of conduct and general discipline guidelines for all students.",
    rules: [
      { title: "Attendance Requirement", detail: "Every student must maintain a minimum of 75% attendance in each subject to be eligible for the HSC board examination." },
      { title: "Uniform & Dress Code", detail: "Students must wear the prescribed college uniform on all working days. Formal attire is required for college events and functions." },
      { title: "Identity Card", detail: "All students must carry their valid identity card at all times while on campus. ID cards must be shown upon request by any staff member." },
      { title: "Campus Conduct", detail: "Students are expected to maintain discipline, respect faculty and staff, and behave in a manner befitting the institution's reputation." },
      { title: "Prohibited Items", detail: "Mobile phones are not permitted during class hours. Use of tobacco, alcohol, or any other intoxicants is strictly prohibited on campus." },
    ],
    pdfPath: "/pdf/rules/general-rules.pdf",
  },
  {
    id: "academic",
    title: "Academic Rules",
    icon: BookOpen,
    description: "Rules regarding academics, examinations, and assessments.",
    rules: [
      { title: "Examination Conduct", detail: "Students must appear for all internal assessments, practical exams, and terminal examinations as scheduled by the college." },
      { title: "Project Submission", detail: "All project work and assignments must be submitted within the stipulated deadline. Late submissions will attract a penalty." },
      { title: "Practical Records", detail: "Maintenance of practical journals and records is mandatory. Journals must be certified by the concerned faculty regularly." },
      { title: "Scholastic Progress", detail: "Students are expected to maintain satisfactory academic progress. Parent-teacher meetings are held regularly to discuss student performance." },
      { title: "Library Rules", detail: "Books issued from the library must be returned within the specified period. Late return will incur a fine as per library policy." },
    ],
    pdfPath: "/pdf/rules/academic-rules.pdf",
  },
  {
    id: "attendance",
    title: "Attendance & Leave Rules",
    icon: Users,
    description: "Guidelines for attendance, leave applications, and condonation.",
    rules: [
      { title: "Minimum Attendance", detail: "75% attendance is mandatory in each subject as per Maharashtra State Board rules." },
      { title: "Leave Application", detail: "Leave applications must be submitted in writing and approved by the principal or class teacher in advance." },
      { title: "Medical Leave", detail: "Medical leave must be supported by a valid medical certificate from a registered medical practitioner." },
      { title: "Condonation", detail: "Shortfall in attendance may be condoned by the principal in genuine cases with valid supporting documents." },
      { title: "Late Entry", detail: "Students arriving late to class will be marked absent for that period. Repeated late entry may lead to disciplinary action." },
    ],
    pdfPath: "/pdf/rules/attendance-rules.pdf",
  },
  {
    id: "lab",
    title: "Laboratory Rules",
    icon: Monitor,
    description: "Safety protocols and conduct guidelines for science and computer laboratories.",
    rules: [
      { title: "Lab Safety", detail: "Students must strictly follow safety protocols while working in laboratories. Use of safety goggles and lab coats is mandatory." },
      { title: "Equipment Handling", detail: "Handle all laboratory equipment with care. Any damage due to negligence will be charged to the student." },
      { title: "Computer Lab Usage", detail: "Computer lab usage is restricted to academic purposes. Downloading or installing unauthorized software is strictly prohibited." },
      { title: "Chemical Disposal", detail: "Chemicals and reagents must be disposed of as per the prescribed environmental safety guidelines." },
      { title: "Lab Timings", detail: "Laboratories are accessible during college hours. Special permission is required for lab work beyond regular hours." },
    ],
    pdfPath: "/pdf/rules/lab-rules.pdf",
  },
  {
    id: "fee",
    title: "Fee & Payment Rules",
    icon: DollarSign,
    description: "Fee structure, payment schedules, and refund policies.",
    rules: [
      { title: "Fee Payment", detail: "College fees must be paid within the stipulated date as announced by the college. Late payment will attract a fine." },
      { title: "Installment Facility", detail: "Students may avail of the installment facility for fee payment as per college policy and approval from the principal." },
      { title: "Scholarship", detail: "Eligible students can apply for government scholarships. The college provides necessary assistance for scholarship applications." },
      { title: "Refund Policy", detail: "Fee refund will be as per the guidelines prescribed by the Maharashtra State Board of Secondary and Higher Secondary Education." },
      { title: "Receipt Preservation", detail: "All fee payment receipts must be preserved and produced when required for verification." },
    ],
    pdfPath: "/pdf/rules/fee-rules.pdf",
  },
  {
    id: "anti-ragging",
    title: "Anti-Ragging Rules",
    icon: AlertTriangle,
    description: "Strict guidelines against ragging and disciplinary actions.",
    rules: [
      { title: "Zero Tolerance", detail: "Ragging in any form is strictly prohibited on campus. The college maintains a zero-tolerance policy against ragging." },
      { title: "Reporting Mechanism", detail: "Students can report any ragging incident to the Anti-Ragging Committee or through the designated complaint box." },
      { title: "Legal Consequences", detail: "Ragging is a criminal offense under the Maharashtra Prohibition of Ragging Act. Offenders face legal action and expulsion." },
      { title: "Awareness Programs", detail: "The college conducts regular awareness programs and orientation sessions to prevent ragging." },
      { title: "Committee Oversight", detail: "The Anti-Ragging Committee monitors the campus and takes immediate action on any reported incidents." },
    ],
    pdfPath: "/pdf/rules/anti-ragging.pdf",
  },
  {
    id: "exam",
    title: "Examination Rules",
    icon: GraduationCap,
    description: "Rules and regulations for internal and board examinations.",
    rules: [
      { title: "Exam Eligibility", detail: "Only students with minimum 75% attendance and cleared all dues are eligible to appear for examinations." },
      { title: "Exam Hall Conduct", detail: "Strict silence must be maintained in the examination hall. Any form of malpractice will result in disqualification." },
      { title: "Answer Scripts", detail: "Write your seat number and other details clearly on the answer script. Use only blue or black ink pens." },
      { title: "Result Declaration", detail: "Results will be declared as per the Maharashtra State Board schedule. Students can access results online." },
      { title: "Revaluation", detail: "Students may apply for answer script revaluation within the prescribed period after result declaration." },
    ],
    pdfPath: "/pdf/rules/exam-rules.pdf",
  },
]

export function RulesList() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[250px] items-center md:min-h-[300px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Rules & Regulations
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                Guidelines and policies to ensure a disciplined, safe, and productive learning environment.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section>
        <p className="mb-8 text-muted-foreground">
          All students are expected to read, understand, and strictly follow the rules and regulations of the college.
          Ignorance of rules will not be considered a valid defense.
        </p>

        <Accordion className="space-y-4">
          {ruleCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <AccordionItem value={category.id} className="rounded-xl border bg-card shadow-soft">
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <div className="flex flex-1 items-center gap-3 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-heading font-bold">{category.title}</span>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4">
                  <div className="space-y-3">
                    {category.rules.map((rule, ri) => (
                      <div key={ri} className="rounded-lg bg-muted/50 p-3">
                        <p className="text-sm font-medium">{rule.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{rule.detail}</p>
                      </div>
                    ))}
                    {category.pdfPath && (
                      <a
                        href={category.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      >
                        <FileText className="h-4 w-4" />
                        Download Detailed Rules (PDF)
                        <Download className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </Section>
    </>
  )
}
