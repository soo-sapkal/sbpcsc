import type { Metadata } from "next"
import { CommitteeList } from "@/features/about"

export const metadata: Metadata = {
  title: "Committee",
  description: "Committees of S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <CommitteeList />
}
