import type { Metadata } from "next"
import { RulesList } from "@/features/about"

export const metadata: Metadata = {
  title: "Rules & Regulations",
  description: "Rules and regulations of S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <RulesList />
}
