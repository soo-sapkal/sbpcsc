import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, GraduationCap } from "lucide-react"
import { SocialIcons } from "./SocialIcons"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"
import Link from "next/link"

const importantLinks = [
  { label: "NCERT Official", href: EXTERNAL_LINKS.NCERT },
  { label: "JEE MAINS (NTA)", href: EXTERNAL_LINKS.JEE_MAINS },
  { label: "Maharashtra CET Cell", href: EXTERNAL_LINKS.MH_CET },
  { label: "NEET (UG)", href: EXTERNAL_LINKS.NEET },
  { label: "ICAI (Chartered Accountants)", href: EXTERNAL_LINKS.ICAI },
  { label: "ICSI (Company Secretaries)", href: EXTERNAL_LINKS.ICSI },
  { label: "NATA (Architecture)", href: EXTERNAL_LINKS.NATA },
  { label: "NIFD (Design)", href: EXTERNAL_LINKS.NIFD },
]

const quickLinks = [
  { label: "Admissions 2026-27", href: "/admission" },
  { label: "Science Stream Details", href: "/academics/science/physics" },
  { label: "Commerce Stream Details", href: "/academics/commerce/secretarial" },
  { label: "Student Achievements & Toppers", href: "/achievements" },
  { label: "Activities Photo Gallery", href: "/gallery/activities/2025-26" },
  { label: "Principal's Desk", href: "/about/principal-desk" },
  { label: "Student Testimonials", href: "/reviews" },
  { label: "Contact & Campus Map", href: "/contact" },
]

export function Footer() {
  return (
    <>
      <footer className="bg-[#081c33] text-slate-300 pt-12 pb-8 border-t border-[#123359]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-slate-700/60">
            {/* Col 1: Institutional Identity */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[0.688rem] font-bold uppercase tracking-widest text-amber-400">
                  PCET Trust (Estd. 1990)
                </span>
                <h3 className="text-base font-extrabold text-white uppercase tracking-tight font-serif">
                  S. B. Patil College of Science &amp; Commerce
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  A premier junior college in Ravet, Pune offering progressive Higher Secondary Education in Science and Commerce under Maharashtra State Board.
                </p>
              </div>

              <div className="text-xs text-slate-400 font-mono space-y-1 bg-[#051324] p-3 rounded-lg border border-slate-800">
                <div>JR. COLL. INDEX: <strong className="text-slate-200">{siteConfig.indexNo}</strong></div>
                <div>U-DISE NO: <strong className="text-slate-200">{siteConfig.udiseNo}</strong></div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-2">Connect With Us:</span>
                <SocialIcons variant="footer" />
              </div>
            </div>

            {/* Col 2: Quick Institutional Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-3 mb-3 border-b border-slate-700/60 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-amber-400" />
                <span>Quick Navigation</span>
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-slate-500">›</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Entrance & Examination Portals */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-3 mb-3 border-b border-slate-700/60 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>Important Portals</span>
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                {importantLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-slate-500">›</span>
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Campus Address & Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white pb-3 mb-3 border-b border-slate-700/60 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Campus Location</span>
              </h4>
              <div className="text-xs text-slate-300 space-y-2">
                <p className="leading-relaxed">
                  Opposite S.B. Patil Public School, S. No. 110, Gate No. 1, Ravet, Pune - 412101, Maharashtra, India.
                </p>
                <div className="pt-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                      {siteConfig.phone} / {siteConfig.phoneAlt}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="pt-1">
                <iframe
                  className="w-full rounded-lg border border-slate-700"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.258871352793!2d73.74075511434064!3d18.65237588733234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba04003bbb83%3A0x2e3c5fc34bc28590!2sS+B+PATIL+COLLEGE+OF+SCIENCE+AND+COMMERCE!5e0!3m2!1sen!2sin!4v1485500977009"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  width="100%"
                  height="110"
                  loading="lazy"
                  title="SBPCSC Campus Google Map Location"
                />
              </div>
            </div>
          </div>

          {/* Bottom Sub-bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <div>
              &copy; {new Date().getFullYear()} S.B. Patil College of Science &amp; Commerce. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <Link href="/about/rules" className="hover:text-white transition-colors">Rules &amp; Code of Conduct</Link>
              <span>•</span>
              <a
                href="https://pcet.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 font-semibold transition-colors"
              >
                Pimpri Chinchwad Education Trust
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
