"use client"

import { motion } from "framer-motion"
import { DollarSign, Download, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeeRow {
  particular: string
  science: string
  commerce: string
}

const feeData: FeeRow[] = [
  { particular: "Tuition Fee (Annual)", science: "₹ 25,000", commerce: "₹ 22,000" },
  { particular: "Laboratory Fee", science: "₹ 5,000", commerce: "₹ 2,000" },
  { particular: "Library Fee", science: "₹ 2,000", commerce: "₹ 2,000" },
  { particular: "Computer Lab Fee", science: "₹ 3,000", commerce: "₹ 3,000" },
  { particular: "Sports & Cultural Fee", science: "₹ 1,500", commerce: "₹ 1,500" },
  { particular: "Examination Fee", science: "₹ 2,500", commerce: "₹ 2,500" },
  { particular: "Development Fee", science: "₹ 3,000", commerce: "₹ 3,000" },
  { particular: "Student Welfare Fee", science: "₹ 1,000", commerce: "₹ 1,000" },
  { particular: "Identity Card & Magazine", science: "₹ 500", commerce: "₹ 500" },
  { particular: "Insurance Fee", science: "₹ 500", commerce: "₹ 500" },
]

const otherCharges = [
  { charge: "Caution Money (Refundable)", amount: "₹ 3,000" },
  { charge: "Eligibility Certificate Fee (For other boards)", amount: "₹ 500" },
  { charge: "Transfer Certificate Fee", amount: "₹ 200" },
  { charge: "Duplicate ID Card Fee", amount: "₹ 200" },
  { charge: "Late Fee (per month after due date)", amount: "₹ 100" },
]

const installmentOptions = [
  { plan: "Full Payment at Admission", benefit: "Free Study Material worth ₹ 1,000" },
  { plan: "Half-Yearly Installment (2 Payments)", benefit: "Pay 50% at admission, 50% in November" },
  { plan: "Quarterly Installment (4 Payments)", benefit: "Pay in 4 equal installments with processing fee" },
]

export function FeeStructure() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold">Fee Structure</h2>
        <p className="mt-2 text-muted-foreground">
          Affordable and transparent fee structure for the academic year 2025-26.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-primary" />
                <CardTitle>Annual Fee Details (2025-26)</CardTitle>
              </div>
              <a
                href="/pdf/fee-structure-2025-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Download className="h-4 w-4" />
                Download Fee Structure
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 text-muted-foreground">
                    <th className="pb-3 font-medium">Particulars</th>
                    <th className="pb-3 text-right font-medium">Science (₹)</th>
                    <th className="pb-3 text-right font-medium">Commerce (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, i) => (
                    <tr
                      key={i}
                      className={cn("border-b transition-colors hover:bg-muted/50", i % 2 === 0 && "bg-muted/20")}
                    >
                      <td className="py-3">{row.particular}</td>
                      <td className="py-3 text-right font-medium">{row.science}</td>
                      <td className="py-3 text-right font-medium">{row.commerce}</td>
                    </tr>
                  ))}
                  <tr className="border-b-2 bg-primary/5 font-bold">
                    <td className="py-3">Total Annual Fee</td>
                    <td className="py-3 text-right text-primary">₹ 44,000</td>
                    <td className="py-3 text-right text-primary">₹ 38,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              * All fees are subject to revision as per Maharashtra State Board guidelines.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-primary" />
                <CardTitle>Other Charges</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {otherCharges.map((charge, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border bg-card p-3"
                  >
                    <span className="text-sm">{charge.charge}</span>
                    <span className="text-sm font-medium">{charge.amount}</span>
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
          transition={{ delay: 0.05 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle>Installment Options</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {installmentOptions.map((opt, i) => (
                  <div
                    key={i}
                    className="rounded-lg border bg-card p-3 transition-all duration-200 hover:shadow-soft"
                  >
                    <p className="text-sm font-medium">{opt.plan}</p>
                    <p className="text-xs text-muted-foreground">{opt.benefit}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Installment facility is subject to approval from the principal. A processing fee may apply.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl bg-primary/5 p-5"
      >
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <h4 className="font-medium">Scholarship & Fee Concession</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Eligible students can apply for government scholarships through the Aaple Sarkar portal. The college
              provides full assistance in the scholarship application process. Students from economically weaker sections
              may also avail fee concession as per college policy. Please visit the college office for more details.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
