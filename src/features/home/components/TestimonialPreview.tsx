"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Quote, Star, ArrowRight } from "lucide-react"
import { testimonials } from "@/features/home/data/testimonials"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function TestimonialPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            What Our Students Say
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear from our students about their experience at {siteConfig.shortName}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-soft",
                "transition-all duration-300 hover:shadow-card-hover"
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary/20" />
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                  {t.content}
                </p>
              </div>
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="text-xs font-semibold text-foreground">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground no-underline transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
          >
            Read All Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
