import type { Metadata } from "next"
import { LibraryPage } from "@/features/library"

export const metadata: Metadata = {
  title: "Library",
  description: "Library resources at S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <LibraryPage />
}
