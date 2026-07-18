import type { Metadata } from "next"
import { AboutSBPCSC } from "@/features/about"

export const metadata: Metadata = {
  title: "About SBPCSC",
  description: "S. B. Patil College of Science and Commerce - A progressive, student-centered, co-educational college.",
}

export default function Page() {
  return <AboutSBPCSC />
}
