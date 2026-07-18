"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import type { Testimonial } from "@/types/testimonial"

interface TestimonialHighlightProps {
  testimonial: Testimonial
}

export function TestimonialHighlight({ testimonial }: TestimonialHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-accent p-8 text-white shadow-strong md:p-12"
    >
      <div className="absolute right-4 top-4 text-8xl text-white/10">
        <Quote className="h-24 w-24" />
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-5 w-5 fill-amber-300 text-amber-300" />
          ))}
        </div>

        <blockquote className="mb-6 text-xl leading-relaxed md:text-2xl md:leading-relaxed">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
            {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
          </div>
          <div>
            <cite className="not-italic text-lg font-semibold">{testimonial.name}</cite>
            <p className="text-sm text-white/70">
              {testimonial.stream === "science" ? "Science" : "Commerce"} Stream &middot; Batch of {testimonial.batch}
              {testimonial.rank && ` &middot; ${testimonial.rank}`}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
