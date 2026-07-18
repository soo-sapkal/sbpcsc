"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { newsItems } from "@/features/home/data/news-items"
import { cn } from "@/lib/utils"

export function NewsScroll() {
  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ul = ulRef.current
    if (!ul) return

    let animationId: number
    let scrollPos = 0

    const step = () => {
      scrollPos += 0.5
      ul.scrollTop = scrollPos
      if (scrollPos >= ul.scrollHeight - ul.clientHeight) {
        scrollPos = 0
      }
      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-soft">
      <div className="bg-gradient-to-r from-primary to-primary-dark px-4 py-2.5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-white">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
          Latest Updates
        </h3>
      </div>
      <ul
        ref={ulRef}
        className="m-0 list-none overflow-hidden scrollbar-thin"
        style={{ height: "220px" }}
        aria-label="Latest news updates"
      >
        {newsItems.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-b border-dashed border-border/50 last:border-b-0"
          >
            <a
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className={cn(
                "flex items-start gap-3 px-4 py-3 text-sm transition-colors duration-200 hover:bg-muted/50",
                item.className === "spotlight_red"
                  ? "text-accent"
                  : "text-primary"
              )}
            >
              <span className="mt-1.5 shrink-0">
                <span className={cn(
                  "inline-block h-2 w-2 rounded-full",
                  item.className === "spotlight_red" ? "bg-accent" : "bg-primary"
                )} />
              </span>
              <span className="font-medium">{item.label}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
