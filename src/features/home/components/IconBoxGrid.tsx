"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { iconBoxes } from "@/features/home/data/icon-boxes"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export function IconBoxGrid() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6"
        >
          {iconBoxes.map((box, i) => {
            const isExternal = box.href.startsWith("mailto:") || box.href.startsWith("tel:")
            const content = (
              <motion.div
                variants={itemVariants}
                className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-5 text-center shadow-soft transition-all duration-300 hover:shadow-card-hover hover:border-primary/20"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={box.icon}
                    alt={box.title}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {box.title}
                </h3>
              </motion.div>
            )

            if (isExternal) {
              return (
                <a
                  key={i}
                  href={box.href}
                  className="block no-underline"
                  target={box.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link key={i} href={box.href} className="block no-underline">
                {content}
              </Link>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
