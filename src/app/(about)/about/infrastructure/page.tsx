import type { Metadata } from "next"
import { InfrastructureShowcase } from "@/features/about"

export const metadata: Metadata = {
  title: "Infrastructure & Facilities",
  description: "State-of-the-art infrastructure and facilities at S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <InfrastructureShowcase />
}
