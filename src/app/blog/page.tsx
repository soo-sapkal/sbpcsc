import type { Metadata } from "next"
import { BlogList } from "@/features/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, articles, and updates from S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <BlogList />
}
