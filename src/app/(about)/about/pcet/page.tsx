import type { Metadata } from "next"
import { AboutPCET } from "@/features/about"

export const metadata: Metadata = {
  title: "About PCET",
  description: "Learn about Pimpri Chinchwad Education Trust (PCET) - a time-tested brand in education since 1990.",
}

export default function Page() {
  return <AboutPCET />
}
