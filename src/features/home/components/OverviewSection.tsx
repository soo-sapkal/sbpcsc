"use client"

import { motion } from "framer-motion"
import { NewsScroll } from "./NewsScroll"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"
import { ArrowRight, GraduationCap, Building2, Newspaper } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

export function OverviewSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="font-heading mb-3 text-xl font-bold text-accent">Overview</h2>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">
                  <Link href="/about/sbpcsc" className="text-primary hover:underline">
                    {siteConfig.name}
                  </Link>
                </strong>
                &nbsp;is a progressive, student-centered, co-educational private college, committed to providing
                quality education to all its students. It is also listed as one of the best junior colleges in Ravet, Pune.
                It is run by a lively caring organization called Pimpri Chinchwad Education Trust (PCET), a time-tested
                brand in education since 1990.
              </p>
              <Link
                href="/about/sbpcsc"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card-hover">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-glow">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="font-heading mb-3 text-xl font-bold text-accent">About PCET</h2>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">
                  <a
                    href={EXTERNAL_LINKS.PCET}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Pimpri Chinchwad Education Trust (PCET)
                  </a>
                </strong>
                &nbsp;was established in 1990 by visionary Late. Shri. Shankarrao B. Patil, with an idea of providing
                quality education from K.G. to P.G. Its sole mission was aimed at serving society through
                value-inculcating education.
              </p>
              <a
                href={EXTERNAL_LINKS.PCET}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card shadow-soft transition-all duration-300 hover:shadow-card-hover">
              <div className="flex items-center gap-3 border-b border-border/50 px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-accent">SBPCSC NEWS</h2>
              </div>
              <div className="flex-1 p-2">
                <NewsScroll />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
