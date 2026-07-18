import type { Metadata } from "next"
import { AcademicPlan } from "@/features/academics"

export const metadata: Metadata = {
  title: "Academic Plan",
  description: "Academic plan and calendar for S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <AcademicPlan />
}
