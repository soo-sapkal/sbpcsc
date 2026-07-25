import type { Metadata } from "next"
import { PageHeading } from "@/components/sections/PageHeading"
import { AdmissionTabs } from "./AdmissionTabs"

export const metadata: Metadata = {
  title: "Admission - SBPCSC",
  description: "11th Science & Commerce Admissions at SB Patil College, Ravet Pune. Check fee structure, cut-off, intake, eligibility, and admission process.",
}

export default function AdmissionPage() {
  return (
    <>
      <PageHeading title="Admission" />
      <AdmissionTabs />
    </>
  )
}