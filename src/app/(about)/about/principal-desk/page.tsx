import type { Metadata } from "next"
import { PrincipalMessage } from "@/features/about"

export const metadata: Metadata = {
  title: "Principal's Desk",
  description: "Message from the Principal of S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <PrincipalMessage />
}
