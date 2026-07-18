"use client"

import { Phone, Mail, ArrowRight } from "lucide-react"
import { SocialIcons } from "./SocialIcons"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"
import { cn } from "@/lib/utils"

export function TopStrip() {
  return (
    <div className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white">
      <div className="container-wide">
        <div className="flex flex-col items-center justify-between gap-2 py-1.5 sm:flex-row sm:gap-0">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
            <a
              href={`tel:+91-${siteConfig.phone}`}
              className="inline-flex items-center gap-1 text-white/90 transition-colors hover:text-white"
              aria-label={`Phone ${siteConfig.phone}`}
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden text-white/30 sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1 text-white/90 transition-colors hover:text-white"
              aria-label={`Email ${siteConfig.email}`}
            >
              <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <SocialIcons variant="top-strip" />
            <a
              href={EXTERNAL_LINKS.ADMISSION_ENQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-white no-underline",
                "transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25",
                "animate-pulse-soft sm:text-sm"
              )}
            >
              Admission Enquiry
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
