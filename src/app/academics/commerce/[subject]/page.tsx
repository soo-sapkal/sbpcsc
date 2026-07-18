import type { Metadata } from "next"
import { SubjectPage } from "@/features/academics"

export const metadata: Metadata = {
  title: "Commerce Subject",
  description: "Commerce subject details at S. B. Patil College of Science and Commerce.",
}

export default function Page({ params }: { params: Promise<{ subject: string }> }) {
  return <SubjectPage params={params} stream="commerce" />
}
