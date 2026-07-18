"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, Monitor, Library, BookCheck, ShieldCheck } from "lucide-react"

const facilities = [
  {
    icon: BookOpen,
    title: "Reading Hall",
    description: "Spacious, well-lit reading hall with seating capacity for 100+ students with individual study carrels.",
  },
  {
    icon: Monitor,
    title: "Digital Library",
    description: "Access to e-books, e-journals, N-List databases, and online educational resources through dedicated computer terminals.",
  },
  {
    icon: Library,
    title: "Book Bank",
    description: "Special book bank scheme for economically weaker students providing textbooks for the entire academic year.",
  },
  {
    icon: BookCheck,
    title: "Reference Section",
    description: "Comprehensive collection of reference books, encyclopedias, dictionaries, and competitive exam guides.",
  },
]

const rules = [
  "Strict silence must be maintained in the library premises",
  "Books must be issued only with the library card",
  "Reference books and periodicals are not issued for home",
  "Books must be returned within 15 days from the date of issue",
  "A fine of Rs. 2 per day per book is charged for late return",
  "Loss or damage of books must be compensated as per library rules",
  "Mobile phones must be kept on silent mode",
  "Library cards are non-transferable",
]

export function LibraryOverview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">College Library</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            The library at S. B. Patil College of Science and Commerce is a hub of knowledge and academic resources,
            supporting the teaching, learning, and research needs of students and faculty.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {facilities.map((facility, i) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl bg-white p-6 shadow-soft transition-all hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{facility.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 text-center">
            <p className="text-3xl font-bold text-primary">10,000+</p>
            <p className="mt-1 text-sm text-muted-foreground">Books Available</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-6 text-center">
            <p className="text-3xl font-bold text-accent">50+</p>
            <p className="mt-1 text-sm text-muted-foreground">National & International Journals</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-green-500/5 to-green-500/10 p-6 text-center">
            <p className="text-3xl font-bold text-green-600">1,000+</p>
            <p className="mt-1 text-sm text-muted-foreground">Digital Resources</p>
          </div>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white p-6 shadow-soft"
          >
            <div className="mb-4 flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Library Timings</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-sm text-muted-foreground">Monday – Saturday</span>
                <span className="text-sm font-medium">7:30 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-sm text-muted-foreground">Sunday</span>
                <span className="text-sm font-medium">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Vacation (Working Days)</span>
                <span className="text-sm font-medium">8:00 AM – 2:00 PM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white p-6 shadow-soft"
          >
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-semibold">Library Rules</h2>
            </div>
            <ul className="space-y-2">
              {rules.map((rule) => (
                <li key={rule} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
