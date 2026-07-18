"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Tag } from "lucide-react"
import { cn } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"

const categories = [
  { name: "Academic", count: 8 },
  { name: "Admissions", count: 5 },
  { name: "Events", count: 6 },
  { name: "Examinations", count: 4 },
  { name: "Student Life", count: 7 },
  { name: "Guest Lectures", count: 3 },
]

const popularTags = [
  "Science", "Commerce", "MHT-CET", "Board Exams", "Admissions",
  "Sports", "Cultural", "Workshop", "Seminar", "Placement",
  "Scholarship", "Research", "Internship", "Alumni", "Competition",
]

const recentPosts: BlogPost[] = [
  {
    slug: "preparing-for-mht-cet-2026",
    title: "Preparing for MHT-CET 2026: A Complete Guide",
    excerpt: "",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Mar 15, 2026",
    author: "Prof. Sharma",
    tags: ["Academic"],
  },
  {
    slug: "science-vs-commerce",
    title: "Science vs. Commerce: Making the Right Choice",
    excerpt: "",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Mar 10, 2026",
    author: "Admin",
    tags: ["Career"],
  },
  {
    slug: "annual-sports-day-2026",
    title: "Annual Sports Day 2026: A Grand Success",
    excerpt: "",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 28, 2026",
    author: "Sports Dept.",
    tags: ["Events"],
  },
  {
    slug: "importance-of-regular-attendance",
    title: "The Importance of Regular Attendance in Junior College",
    excerpt: "",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 20, 2026",
    author: "Admin",
    tags: ["Student Life"],
  },
  {
    slug: "guest-lecture-career-counseling",
    title: "Guest Lecture on Career Counseling by Industry Experts",
    excerpt: "",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 15, 2026",
    author: "Admin",
    tags: ["Guest Lectures"],
  },
]

export function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <aside className="space-y-8" aria-label="Blog sidebar">
      <div className="rounded-xl bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-semibold">Search</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="relative"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-4 pr-10 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            aria-label="Search articles"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Submit search"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-semibold">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={`/blog?category=${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                <span>{cat.name}</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-semibold">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-3"
              >
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="line-clamp-2 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h4>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-semibold">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-white"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
