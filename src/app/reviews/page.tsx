import type { Metadata } from "next"
import { TestimonialList } from "@/features/reviews"

export const metadata: Metadata = {
  title: "Reviews",
  description: "Student reviews and testimonials for S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <TestimonialList />
}
