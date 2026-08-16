import type { Metadata } from "next"
import Image from "next/image"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "Academic Plan | S. B. Patil College of Science and Commerce",
  description:
    "Visit website to see Class 11th & Class 12th academic calendar of S. B. Patil College of Science and Commerce.",
}

const pdfs = [
  { label: "11th Academic Plan 2025-26", href: "/pdf/11th-Academic-Plan-2025-26.pdf" },
  { label: "Academics Plan 2025-26", href: "/pdf/academics-plan-2025-26.pdf" },
]

export default function AcademicPlanPage() {
  return (
    <>
      <PageHeading title="Academic Plan" />

      <div className="flex flex-wrap">
        {pdfs.map((pdf) => (
          <div key={pdf.href} className="mb-4 w-full px-2 md:w-1/3">
            <p className="text-center">
              <a
                href={pdf.href}
                target="_blank"
                className="block rounded-lg border border-border bg-surface p-2 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <Image
                  src="/images/pdficon.png"
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                  unoptimized
                />
                <span className="mt-2 block font-semibold text-brand">{pdf.label}</span>
              </a>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
