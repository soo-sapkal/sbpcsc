"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle, FileText, BookOpen, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StreamCriteria {
  stream: string
  icon: typeof BookOpen
  requirements: string[]
  marks: string
  note?: string
}

const eligibilityCriteria: StreamCriteria[] = [
  {
    stream: "Science (11th Standard)",
    icon: BookOpen,
    marks: "Minimum 35% in SSC or equivalent examination",
    requirements: [
      "Passed SSC (10th) examination from Maharashtra State Board or equivalent",
      "Scored minimum 35% aggregate marks in SSC",
      "Must have studied Science and Mathematics at SSC level",
      "Open to all categories as per government norms",
    ],
    note: "Students from CBSE, ICSE, and other recognized boards are also eligible. Eligibility certificate from Maharashtra State Board may be required.",
  },
  {
    stream: "Commerce (11th Standard)",
    icon: BookOpen,
    marks: "Minimum 35% in SSC or equivalent examination",
    requirements: [
      "Passed SSC (10th) examination from Maharashtra State Board or equivalent",
      "Scored minimum 35% aggregate marks in SSC",
      "No specific subject requirements at SSC level",
      "Open to all categories as per government norms",
    ],
    note: "Students from all educational backgrounds can opt for Commerce stream. Basic Mathematics knowledge is beneficial.",
  },
  {
    stream: "Science (12th Standard)",
    icon: BookOpen,
    marks: "Minimum 35% in HSC (11th) or equivalent",
    requirements: [
      "Passed 11th Science from Maharashtra State Board or equivalent",
      "Minimum 35% marks in 11th standard annual examination",
      "Cleared all subjects with passing marks",
      "Regular attendance record in 11th standard",
    ],
    note: "Direct admission to 12th Science is subject to availability of seats and fulfillment of board requirements.",
  },
  {
    stream: "Commerce (12th Standard)",
    icon: BookOpen,
    marks: "Minimum 35% in HSC (11th) or equivalent",
    requirements: [
      "Passed 11th Commerce from Maharashtra State Board or equivalent",
      "Minimum 35% marks in 11th standard annual examination",
      "Cleared all subjects with passing marks",
      "Regular attendance record in 11th standard",
    ],
    note: "Transfer students from other boards must obtain eligibility certificate from Maharashtra State Board.",
  },
]

const requiredDocuments = [
  { label: "SSC Mark Sheet", description: "Original + 2 attested copies" },
  { label: "SSC Passing Certificate", description: "Original + 2 attested copies" },
  { label: "School Leaving Certificate (LC)", description: "Original from previous school" },
  { label: "Caste Certificate", description: "If applicable (valid certificate)" },
  { label: "Caste Validity Certificate", description: "If applicable" },
  { label: "Non-Creamy Layer Certificate", description: "If applicable (recent)" },
  { label: "Domicile Certificate", description: "Original + 1 attested copy" },
  { label: "Birth Certificate", description: "Original + 1 attested copy" },
  { label: "Passport-size Photographs", description: "6 recent photographs" },
  { label: "Aadhar Card", description: "Copy of student's Aadhar card" },
  { label: "Parent's Aadhar Card", description: "Copy of parent's Aadhar card" },
  { label: "Income Certificate", description: "If seeking fee concession" },
  { label: "Gap Affidavit", description: "If there is an academic gap" },
  { label: "Migration Certificate", description: "For students from other boards" },
  { label: "Eligibility Certificate", description: "For students from other boards" },
]

export function Eligibility() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="font-heading text-2xl font-bold">Eligibility Criteria</h2>
        <p className="mt-2 text-muted-foreground">
          Check the eligibility requirements for admission to various streams at SBPCSC.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {eligibilityCriteria.map((criteria, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Card className="h-full p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <criteria.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">{criteria.stream}</h3>
                  <div className="mt-2 rounded-lg bg-green-50 px-3 py-1.5 text-sm text-green-700">
                    <span className="font-medium">Minimum Marks:</span> {criteria.marks}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {criteria.requirements.map((req, ri) => (
                      <li key={ri} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  {criteria.note && (
                    <div className="mt-3 flex items-start gap-2 rounded-lg bg-blue-50 p-2.5 text-xs text-blue-700">
                      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>{criteria.note}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Required Documents Checklist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Please ensure you have the following documents ready at the time of admission:
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {requiredDocuments.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border bg-card p-3 transition-all duration-200 hover:shadow-soft"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">{doc.label}</p>
                    <p className="text-xs text-muted-foreground">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl bg-amber-50 p-5"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <h4 className="font-medium text-amber-800">Important Note</h4>
            <p className="mt-1 text-sm text-amber-700">
              The eligibility criteria are subject to change as per the guidelines of the Maharashtra State Board of
              Secondary and Higher Secondary Education. Candidates are advised to verify the latest requirements from the
              college office or the official board website.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
