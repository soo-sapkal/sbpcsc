"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookItem {
  title: string
  author: string
  category: string
  isbn?: string
  edition?: string
}

const sampleBooks: BookItem[] = [
  { title: "NCERT Physics Part 1", author: "NCERT", category: "Physics", isbn: "978-81-7450-508-8" },
  { title: "NCERT Physics Part 2", author: "NCERT", category: "Physics", isbn: "978-81-7450-505-7" },
  { title: "NCERT Chemistry Part 1", author: "NCERT", category: "Chemistry", isbn: "978-81-7450-494-4" },
  { title: "NCERT Chemistry Part 2", author: "NCERT", category: "Chemistry", isbn: "978-81-7450-495-1" },
  { title: "NCERT Mathematics Part 1", author: "NCERT", category: "Mathematics", isbn: "978-81-7450-508-8" },
  { title: "NCERT Mathematics Part 2", author: "NCERT", category: "Mathematics", isbn: "978-81-7450-509-5" },
  { title: "NCERT Biology", author: "NCERT", category: "Biology", isbn: "978-81-7450-510-1" },
  { title: "Concepts of Physics", author: "H.C. Verma", category: "Physics", isbn: "978-81-7709-168-7" },
  { title: "Physical Chemistry", author: "O.P. Tandon", category: "Chemistry", isbn: "978-81-7739-056-8" },
  { title: "Organic Chemistry", author: "O.P. Tandon", category: "Chemistry", isbn: "978-81-7739-057-5" },
  { title: "Inorganic Chemistry", author: "O.P. Tandon", category: "Chemistry", isbn: "978-81-7739-058-2" },
  { title: "Mathematics for Class 11", author: "R.D. Sharma", category: "Mathematics", isbn: "978-93-8591-100-7" },
  { title: "Mathematics for Class 12", author: "R.D. Sharma", category: "Mathematics", isbn: "978-93-8591-101-4" },
  { title: "Modern ABC of Biology", author: "S. Chand", category: "Biology", isbn: "978-81-219-4218-2" },
  { title: "Objective Biology", author: "Dinesh", category: "Biology", isbn: "978-93-8629-320-5" },
  { title: "Book-Keeping & Accountancy", author: "Maharashtra Board", category: "Accountancy", isbn: "978-81-7429-759-4" },
  { title: "Economics Textbook", author: "Maharashtra Board", category: "Economics", isbn: "978-81-7429-760-0" },
  { title: "English Yuvakbharati", author: "Maharashtra Board", category: "English", isbn: "978-81-7429-761-7" },
  { title: "Marathi Yuvakbharati", author: "Maharashtra Board", category: "Marathi", isbn: "978-81-7429-762-4" },
  { title: "Computer Science: Class 11", author: "Sumita Arora", category: "Computer Science", isbn: "978-81-7725-920-5" },
  { title: "Computer Science: Class 12", author: "Sumita Arora", category: "Computer Science", isbn: "978-81-7725-921-2" },
  { title: "Information Technology", author: "Maharashtra Board", category: "Computer Science", isbn: "978-81-7429-763-1" },
  { title: "Hindi Yuvakbharati", author: "Maharashtra Board", category: "Hindi", isbn: "978-81-7429-764-8" },
  { title: "Commerce Textbook", author: "Maharashtra Board", category: "Commerce", isbn: "978-81-7429-765-5" },
]

const categories = Array.from(new Set(sampleBooks.map((b) => b.category)))

export function LibaryBookGrid() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filteredBooks = sampleBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === "All" || book.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Explore Our Books</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse through our extensive collection of academic and reference books
          </p>
        </motion.div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              aria-label="Search books"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              activeCategory === "All"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground shadow-soft hover:text-primary",
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground shadow-soft hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.map((book, i) => (
            <motion.div
              key={`${book.title}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group overflow-hidden rounded-xl bg-white shadow-soft transition-all hover:shadow-card-hover"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-3 text-5xl">📚</div>
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{book.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{book.author}</p>
                  <span className="mt-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {book.category}
                  </span>
                  {book.isbn && (
                    <p className="mt-2 text-[10px] text-muted-foreground">ISBN: {book.isbn}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-white shadow-soft">
            <p className="text-muted-foreground">No books found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
