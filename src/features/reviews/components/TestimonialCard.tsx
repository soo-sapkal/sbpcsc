"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types/testimonial"

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const streamColors = {
    science: "border-l-primary",
    commerce: "border-l-accent",
  }

  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "relative rounded-xl bg-white p-6 shadow-soft transition-all hover:shadow-card-hover border-l-4",
        streamColors[testimonial.stream],
      )}
    >
      <Quote className="mb-3 h-6 w-6 text-muted-foreground/30" />

      <p className="mb-4 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="mb-3 flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-foreground">
            {testimonial.name}
          </cite>
          <p className="text-xs text-muted-foreground">
            {testimonial.stream === "science" ? "Science" : "Commerce"} Stream &middot; Batch of {testimonial.batch}
            {testimonial.rank && ` &middot; ${testimonial.rank}`}
          </p>
        </div>
      </div>
    </motion.blockquote>
  )
}
