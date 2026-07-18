"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Atom, BarChart3 } from "lucide-react"

interface StreamSelectorProps {
  currentStream?: string
}

export function StreamSelector({ currentStream }: StreamSelectorProps) {
  const streams = [
    {
      id: "science",
      label: "Science",
      icon: Atom,
      href: "/academics/science",
      description: "Physics, Chemistry, Biology, Math, IT & CS",
    },
    {
      id: "commerce",
      label: "Commerce",
      icon: BarChart3,
      href: "/academics/commerce",
      description: "Accountancy, Economics, OCM, SP & IT",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {streams.map((stream) => {
        const isActive = currentStream === stream.id
        const Icon = stream.icon
        return (
          <Link
            key={stream.id}
            href={stream.href}
            className={cn(
              "group relative overflow-hidden rounded-xl border-2 p-6 transition-all duration-300",
              isActive
                ? "border-primary bg-primary/5 shadow-soft"
                : "border-border bg-card hover:border-primary/50 hover:shadow-soft",
            )}
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-primary/10 to-transparent transition-all duration-500 group-hover:scale-150" />
            <div className="relative z-10 flex items-start gap-4">
              <div
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                  isActive
                    ? "bg-primary text-white shadow-glow"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
                )}
              >
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h3
                  className={cn(
                    "font-heading text-xl font-bold transition-colors",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {stream.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{stream.description}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
