"use client"

import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from "lucide-react"
import { SocialIcons } from "./SocialIcons"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"
import Link from "next/link"
import { cn } from "@/lib/utils"

const importantLinks = [
  { label: "NCERT", href: EXTERNAL_LINKS.NCERT },
  { label: "JEE MAINS", href: EXTERNAL_LINKS.JEE_MAINS },
  { label: "MH CET", href: EXTERNAL_LINKS.MH_CET },
  { label: "NEET", href: EXTERNAL_LINKS.NEET },
  { label: "NATA", href: EXTERNAL_LINKS.NATA },
  { label: "NIFD", href: EXTERNAL_LINKS.NIFD },
  { label: "ICAI", href: EXTERNAL_LINKS.ICAI },
  { label: "ICSI", href: EXTERNAL_LINKS.ICSI },
]

const quickLinks = [
  { label: "Admission", href: "/admission" },
  { label: "Academics", href: "/academics/plan" },
  { label: "Blog", href: "/blog" },
  { label: "Library", href: "/library" },
  { label: "Student ERP", href: EXTERNAL_LINKS.ERP_STUDENT },
  { label: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer>
      <div className="gradient-primary relative overflow-hidden pb-8 pt-14 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-5" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-bold text-white">GET IN TOUCH</h3>
              <div className="h-0.5 w-12 rounded-full bg-accent" />
              <div className="space-y-3 text-sm leading-relaxed text-white/80">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{siteConfig.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={`tel:+91-${siteConfig.phone}`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {siteConfig.phone} / {siteConfig.phoneAlt}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
              <SocialIcons variant="footer" />
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-white">IMPORTANT LINKS</h3>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
              <ul className="mt-5 space-y-2">
                {importantLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-white/70 no-underline transition-all duration-300 hover:text-white"
                    >
                      <ExternalLink className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-white">QUICK LINKS</h3>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
              <ul className="mt-5 space-y-2">
                {quickLinks.map((link, i) => {
                  const isExternal = link.href.startsWith("http")
                  if (isExternal) {
                    return (
                      <li key={i}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm text-white/70 no-underline transition-all duration-300 hover:text-white"
                        >
                          <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-white/70 no-underline transition-all duration-300 hover:text-white"
                      >
                        <ArrowUpRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-white">LOCATION</h3>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
              <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-white/10">
                <iframe
                  className="w-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.258871352793!2d73.74075511434064!3d18.65237588733234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba04003bbb83%3A0x2e3c5fc34bc28590!2sS+B+PATIL+COLLEGE+OF+SCIENCE+AND+COMMERCE!5e0!3m2!1sen!2sin!4v1485500977009"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  height="180"
                  title="College Location"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark/90 px-4 py-3 text-white">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-1 text-center text-xs sm:flex-row sm:text-left sm:text-sm">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            <span>
              Designed &amp; Developed by{" "}
              <a
                href="http://pcet.org.in/digital-marketing-team/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 no-underline transition-colors hover:text-accent"
              >
                Digital Marketing Team, PCET
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
