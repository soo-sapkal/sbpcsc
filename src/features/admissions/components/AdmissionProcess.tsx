"use client"

import { motion } from "framer-motion"
import { ClipboardList, FileText, CheckCircle, CreditCard, Calendar, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  number: number
  title: string
  description: string
  icon: typeof ClipboardList
  details: string[]
}

const steps: Step[] = [
  {
    number: 1,
    title: "Obtain Admission Form",
    description: "Get the admission form from the college office or download it from the website.",
    icon: FileText,
    details: [
      "Forms are available at the college office during working hours",
      "Online forms can be downloaded from the college website",
      "Form fee is non-refundable",
    ],
  },
  {
    number: 2,
    title: "Fill & Submit Application",
    description: "Complete the application form with accurate details and submit it with required documents.",
    icon: ClipboardList,
    details: [
      "Fill all sections of the form carefully",
      "Attach self-attested copies of required documents",
      "Submit within the stipulated deadline",
    ],
  },
  {
    number: 3,
    title: "Document Verification",
    description: "Original documents will be verified by the college authorities.",
    icon: CheckCircle,
    details: [
      "Original documents must be produced for verification",
      "SSC mark sheet and passing certificate are mandatory",
      "Caste certificate (if applicable) must be valid",
    ],
  },
  {
    number: 4,
    title: "Fee Payment",
    description: "Pay the prescribed fees as per the fee structure to confirm admission.",
    icon: CreditCard,
    details: [
      "Fees can be paid via cash, DD, or online transfer",
      "Payment receipt must be preserved",
      "Installment facility available as per college policy",
    ],
  },
  {
    number: 5,
    title: "Confirm Admission",
    description: "Receive the admission confirmation letter and college ID card.",
    icon: Calendar,
    details: [
      "Admission is confirmed only after fee payment",
      "College ID card will be issued",
      "Attend the orientation program",
    ],
  },
  {
    number: 6,
    title: "Begin Academic Session",
    description: "Attend regular classes as per the academic schedule.",
    icon: GraduationCap,
    details: [
      "Follow the academic calendar",
      "Attend orientation and induction programs",
      "Get familiar with college rules and facilities",
    ],
  },
]

export function AdmissionProcess() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold">Admission Process</h2>
        <p className="mt-2 text-muted-foreground">
          Follow these simple steps to secure your admission at S. B. Patil College of Science and Commerce.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 max-md:hidden" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col gap-4 md:flex-row"
            >
              <div className="relative z-10 flex w-16 shrink-0 flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-1 text-center">
                  <span className="font-heading text-xs font-bold text-primary">Step</span>
                  <p className="font-heading text-lg font-bold text-primary">{step.number}</p>
                </div>
              </div>

              <div className="flex-1 rounded-xl border bg-card p-5 shadow-soft transition-all duration-300 hover:shadow-medium">
                <h3 className="font-heading text-lg font-bold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {step.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 p-6 text-center"
      >
        <p className="text-sm text-muted-foreground">
          For any admission-related queries, please contact the college office at{" "}
          <strong className="text-primary">9767199039</strong> or email{" "}
          <strong className="text-primary">sbpc.science@gmail.com</strong>
        </p>
      </motion.div>
    </div>
  )
}
