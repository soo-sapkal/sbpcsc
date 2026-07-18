"use client"

import { motion } from "framer-motion"
import { ExternalLink, Phone, Mail, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { AdmissionTabs } from "./AdmissionTabs"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/sections/Section"

export function AdmissionPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[300px] items-center md:min-h-[400px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-light">
                {siteConfig.tagline}
              </p>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                Admissions 2025-26
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
                Begin your journey at one of the best junior colleges in Ravet, Pune. Admissions open for 11th &amp; 12th
                Science and Commerce.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section variant="primary">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, label: "Academic Year", value: "2025-26" },
            { icon: Phone, label: "Admission Helpline", value: "9767199039" },
            { icon: Mail, label: "Email Queries", value: siteConfig.email },
            { icon: MapPin, label: "Campus", value: "Ravet, Pune" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl bg-background p-4 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={EXTERNAL_LINKS.ADMISSION_ENQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent/90"
          >
            Apply Online
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="tel:9767199039"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary-dark"
          >
            <Phone className="h-4 w-4" />
            Call for Enquiry
          </a>
        </motion.div>
      </Section>

      <Section>
        <AdmissionTabs />
      </Section>
    </>
  )
}
