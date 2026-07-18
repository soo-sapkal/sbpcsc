import type { Metadata } from "next"
import { NewsletterGrid } from "@/features/media"

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Newsletters from S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <NewsletterGrid />
}
