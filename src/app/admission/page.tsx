import type { Metadata } from "next"
import { AdmissionPage } from "@/features/admissions"

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admissions at S. B. Patil College of Science and Commerce for 11th and 12th Science & Commerce.",
}

export default function Page() {
  return <AdmissionPage />
}
