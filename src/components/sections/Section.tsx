"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  title?: string
  subtitle?: string
  variant?: "default" | "muted" | "primary" | "accent" | "gradient"
  container?: boolean
}

const variantStyles = {
  default: "bg-background",
  muted: "bg-muted/50",
  primary: "bg-primary/5",
  accent: "bg-accent/5",
  gradient: "gradient-cool",
}

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
  variant = "default",
  container = true,
}: SectionProps) {
  const content = (
    <>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {title && (
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              {title}
            </h2>
          )}
          {title && (
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </>
  )

  return (
    <section
      id={id}
      className={cn("section-padding", variantStyles[variant], className)}
    >
      {container ? (
        <div className="container-wide">{content}</div>
      ) : (
        content
      )}
    </section>
  )
}
