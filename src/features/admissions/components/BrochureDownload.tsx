"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download, FileText, FileImage, File as FileIcon, Eye, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const brochureFormats = [
  {
    format: "PDF",
    icon: FileText,
    label: "Full Brochure (PDF)",
    description: "Complete admission brochure with all details in PDF format",
    path: "/pdf/brochure/admission-brochure-2025-26.pdf",
    size: "4.2 MB",
  },
  {
    format: "Image",
    icon: FileImage,
    label: "Brochure Preview (Image)",
    description: "Quick view brochure in image format for easy sharing",
    path: "/images/brochure-preview.jpg",
    size: "1.8 MB",
  },
  {
    format: "Text",
    icon: FileIcon,
    label: "Text Version",
    description: "Lightweight text-only version of admission details",
    path: "/pdf/brochure/admission-details.txt",
    size: "0.2 MB",
  },
]

const brochureHighlights = [
  "Complete admission process and important dates",
  "Stream-wise subject combinations available",
  "Detailed fee structure and payment options",
  "Scholarship and fee concession information",
  "College infrastructure and facilities overview",
  "Faculty profiles and department details",
  "Contact information for admissions office",
]

export function BrochureDownload() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold">Admission Brochure</h2>
        <p className="mt-2 text-muted-foreground">
          Download the comprehensive admission brochure for detailed information about the college and admission process.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Download Options</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brochureFormats.map((format, i) => (
                  <motion.div
                    key={format.format}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={format.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border bg-card p-5 transition-all duration-200 hover:shadow-medium"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark">
                        <format.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-bold group-hover:text-primary">{format.label}</p>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                        <span className="mt-1 inline-block text-xs text-muted-foreground">
                          Size: {format.size}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          <Eye className="h-3 w-3" />
                          Preview
                        </span>
                        <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>What&apos;s Inside the Brochure?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {brochureHighlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-primary/5 p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src="/images/brochure-preview.jpg"
                    alt="Admission Brochure Preview"
                    width={400}
                    height={560}
                    className="h-[400px] w-full object-cover md:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-heading text-lg font-bold text-white">SBPCSC</p>
                    <p className="text-sm text-white/80">Admission Brochure 2025-26</p>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href="/pdf/brochure/admission-brochure-2025-26.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-white transition-all hover:bg-primary-dark"
                  >
                    <Download className="h-5 w-5" />
                    Download Brochure
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 rounded-xl border bg-card p-4 text-center">
              <p className="text-sm text-muted-foreground">
                For a physical copy of the brochure, please visit the college office.
              </p>
              <p className="mt-1 text-sm font-medium text-primary">Call: 9767199039</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
