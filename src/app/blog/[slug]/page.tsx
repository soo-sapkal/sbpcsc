import type { Metadata } from "next"
import { BlogDetail } from "@/features/blog"

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Read our latest blog post.",
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogDetail params={params} />
}
