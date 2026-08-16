import type { Metadata } from "next"
import { PageHeading } from "@/components/sections/PageHeading"
import { BlogCard } from "./BlogCard"
import { blogPosts } from "./blog-data"

export const metadata: Metadata = {
  title: "SB Patil College Blog | Insights, Lifestyle & Academic Articles | Ravet, Pune",
  description: "Explore the SB Patil College Blog for articles on education, life skills, motivation, health, and personal growth.",
}

export default function BlogPage() {
  return (
    <>
      <PageHeading title="Blog" className="text-accent" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <BlogCard key={i} post={post} />
        ))}
      </div>
    </>
  )
}
