"use client"

import { motion } from "framer-motion"

interface PageBannerProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="gradient-hero relative flex min-h-[200px] items-center justify-center overflow-hidden md:min-h-[260px]">
      <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="container-wide relative z-10 text-center">
        {breadcrumb && (
          <p className="mb-2 text-sm text-white/60">{breadcrumb}</p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl text-base text-white/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
    </section>
  )
}
