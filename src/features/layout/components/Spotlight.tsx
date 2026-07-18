"use client"

import { motion } from "framer-motion"
import { newsItems } from "@/features/home/data/news-items"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function Spotlight() {
  return (
    <div className="relative border-b border-border/50 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container-wide">
        <div className="flex items-stretch">
          <div className="flex shrink-0 items-center gap-2 bg-gradient-to-r from-accent to-accent/90 px-4 py-2 text-white md:px-6">
            <Sparkles className="h-4 w-4 animate-pulse-soft" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wider md:text-sm">
              Highlights
            </span>
          </div>
          <div className="flex min-w-0 flex-1 items-center overflow-hidden px-4">
            <div className="animate-spotlight flex items-center gap-8 whitespace-nowrap">
              {[...newsItems, ...newsItems].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "inline-block text-xs font-medium no-underline transition-colors hover:underline md:text-sm",
                    item.className === "spotlight_red"
                      ? "text-accent hover:text-accent/80"
                      : "text-primary hover:text-primary/80"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
