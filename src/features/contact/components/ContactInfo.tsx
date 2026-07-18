"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react"
import { siteConfig } from "@/data/site-config"

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Address",
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/${encodeURIComponent(siteConfig.address)}`,
  },
  {
    icon: Phone,
    label: "Phone Numbers",
    value: `${siteConfig.phone} / ${siteConfig.phoneAlt}`,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email Address",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday: 7:30 AM – 5:00 PM",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {contactDetails.map((detail) => {
        const Icon = detail.icon
        const content = (
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-medium text-muted-foreground">{detail.label}</h3>
              <p className="mt-0.5 text-base font-semibold text-foreground">{detail.value}</p>
            </div>
          </div>
        )

        return (
          <motion.div
            key={detail.label}
            variants={itemVariants}
            className="rounded-xl bg-white p-5 shadow-soft transition-shadow hover:shadow-medium"
          >
            {detail.href ? (
              <a
                href={detail.href}
                target={detail.href.startsWith("http") ? "_blank" : undefined}
                rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-muted-foreground">{detail.label}</h3>
                    <p className="mt-0.5 text-base font-semibold text-foreground">{detail.value}</p>
                  </div>
                  <ChevronRight className="mt-2 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            ) : (
              content
            )}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
