"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, ChevronDown, BookText, BookOpen, GraduationCap, Library, Atom, BarChart3, Globe, Calculator, FlaskRound } from "lucide-react"
import { cn } from "@/lib/utils"

const bookCategories = [
  { name: "Physics", count: 1200, icon: Atom },
  { name: "Chemistry", count: 980, icon: FlaskRound },
  { name: "Mathematics", count: 1100, icon: Calculator },
  { name: "Biology", count: 850, icon: BookOpen },
  { name: "English", count: 600, icon: BookText },
  { name: "Marathi", count: 450, icon: BookText },
  { name: "Hindi", count: 400, icon: BookText },
  { name: "Accountancy", count: 550, icon: BarChart3 },
  { name: "Economics", count: 500, icon: Globe },
  { name: "Commerce", count: 620, icon: GraduationCap },
  { name: "Computer Science", count: 700, icon: Library },
  { name: "General Reference", count: 900, icon: BookOpen },
]

export function BookCollection() {
  const [search, setSearch] = useState("")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const filteredCategories = useMemo(
    () => bookCategories.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())),
    [search],
  )

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Book Collection</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our library houses a diverse collection of textbooks, reference books, and general reading materials
          </p>
        </motion.div>

        <div className="relative mx-auto mb-8 max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by category..."
            className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            aria-label="Search book categories"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer rounded-xl bg-white p-5 shadow-soft transition-all hover:shadow-card-hover"
                onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedCategory === category.name}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setExpandedCategory(expandedCategory === category.name ? null : category.name)
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.count}+ books</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      expandedCategory === category.name && "rotate-180",
                    )}
                  />
                </div>

                {expandedCategory === category.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 border-t border-border pt-4"
                  >
                    <p className="text-sm text-muted-foreground">
                      Includes textbooks prescribed by Maharashtra State Board, reference books by renowned authors,
                      and supplementary reading materials for {category.name.toLowerCase()} at the 11th and 12th grade levels.
                    </p>
                    <button className="mt-3 text-sm font-medium text-primary hover:text-primary-dark">
                      Browse Collection &rarr;
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-white shadow-soft">
            <p className="text-muted-foreground">No categories found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
