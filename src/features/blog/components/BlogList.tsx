"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlogCard } from "./BlogCard"
import { BlogSidebar } from "./BlogSidebar"
import type { BlogPost } from "@/types/blog"

const samplePosts: BlogPost[] = [
  {
    slug: "preparing-for-mht-cet-2026",
    title: "Preparing for MHT-CET 2026: A Complete Guide",
    excerpt: "Comprehensive preparation strategies for the Maharashtra Common Entrance Test covering syllabus, study plans, and expert tips from our top-performing students.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Mar 15, 2026",
    author: "Prof. Sharma",
    tags: ["Academic", "Examinations"],
  },
  {
    slug: "science-vs-commerce",
    title: "Science vs. Commerce: Making the Right Choice After 10th",
    excerpt: "A detailed comparison to help students and parents decide between Science and Commerce streams based on interests, career prospects, and aptitude.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Mar 10, 2026",
    author: "Admin",
    tags: ["Academic", "Career", "Admissions"],
  },
  {
    slug: "annual-sports-day-2026",
    title: "Annual Sports Day 2026: A Grand Success",
    excerpt: "Our annual sports day witnessed record participation with thrilling competitions across athletics, team sports, and cultural performances.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 28, 2026",
    author: "Sports Dept.",
    tags: ["Events", "Sports"],
  },
  {
    slug: "importance-of-regular-attendance",
    title: "The Importance of Regular Attendance in Junior College",
    excerpt: "Why consistent attendance matters for academic success, skill development, and building professional discipline for future careers.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 20, 2026",
    author: "Admin",
    tags: ["Student Life"],
  },
  {
    slug: "guest-lecture-career-counseling",
    title: "Guest Lecture on Career Counseling by Industry Experts",
    excerpt: "Industry professionals shared valuable insights on emerging career paths, higher education opportunities, and skill development for the modern workforce.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 15, 2026",
    author: "Admin",
    tags: ["Guest Lectures", "Events"],
  },
  {
    slug: "board-exam-preparation-tips",
    title: "Top 10 Board Exam Preparation Tips from Toppers",
    excerpt: "Learn from our HSC toppers about effective study techniques, time management strategies, and stress management during board examinations.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Feb 10, 2026",
    author: "Academic Cell",
    tags: ["Academic", "Examinations"],
  },
  {
    slug: "science-exhibition-2026",
    title: "Science Exhibition 2026: Innovation in Action",
    excerpt: "Students showcased remarkable projects ranging from renewable energy models to AI-powered solutions at our annual science exhibition.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Jan 28, 2026",
    author: "Science Dept.",
    tags: ["Events", "Science"],
  },
  {
    slug: "commerce-workshop-financial-literacy",
    title: "Commerce Workshop on Financial Literacy and Investment",
    excerpt: "A hands-on workshop teaching students the fundamentals of personal finance, stock market basics, and smart investment strategies.",
    content: "",
    image: "/images/placeholder-blog.jpg",
    date: "Jan 20, 2026",
    author: "Commerce Dept.",
    tags: ["Workshop", "Commerce"],
  },
]

const POSTS_PER_PAGE = 3

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = useMemo(() => {
    const cats = new Set(samplePosts.flatMap((p) => p.tags ?? []))
    return ["All", ...Array.from(cats)]
  }, [])

  const filteredPosts = useMemo(() => {
    return samplePosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        activeCategory === "All" || (post.tags && post.tags.includes(activeCategory))
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Our Blog</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Insights, guides, and updates from S. B. Patil College of Science and Commerce
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
          <form onSubmit={handleSearch} className="relative w-full sm:w-auto sm:flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              aria-label="Search blog posts"
            />
          </form>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setCurrentPage(1)
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground shadow-soft hover:bg-primary/5 hover:text-primary",
              )}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            {paginatedPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {paginatedPosts.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}

            {totalPages > 1 && (
              <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-sm transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                      page === currentPage
                        ? "bg-primary text-white shadow-md"
                        : "border border-border bg-white hover:bg-primary/5",
                    )}
                    aria-current={page === currentPage ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-sm transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </nav>
            )}
          </div>

          <div className="w-full lg:w-80 xl:w-96">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
