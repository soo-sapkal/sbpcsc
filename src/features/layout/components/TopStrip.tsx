import { Phone, Mail, Award, UserCheck, GraduationCap } from "lucide-react"
import { SocialIcons } from "./SocialIcons"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"

export function TopStrip() {
  return (
    <div className="bg-[#081c33] text-slate-200 border-b border-[#133357] text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 py-1.5 md:flex-row md:items-center md:justify-between">
          {/* Left: Contact Info & Accreditation */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-amber-400" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="hidden text-slate-600 lg:inline">|</span>
            <span className="hidden items-center gap-1 text-slate-400 lg:inline-flex">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span>Index: <strong className="text-slate-200">{siteConfig.indexNo}</strong></span>
              <span className="mx-1">•</span>
              <span>U-DISE: <strong className="text-slate-200">{siteConfig.udiseNo}</strong></span>
            </span>
          </div>

          {/* Right: Quick Portals & Admission CTA */}
          <div className="flex items-center justify-between gap-3 md:justify-end">
            <div className="hidden sm:flex items-center gap-3 pr-2 border-r border-slate-700/60">
              <a
                href={EXTERNAL_LINKS.ERP_STUDENT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors hover:underline"
              >
                <GraduationCap className="h-3.5 w-3.5 text-blue-400" />
                <span>Student ERP</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={EXTERNAL_LINKS.ERP_TEACHER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors hover:underline"
              >
                <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Staff ERP</span>
              </a>
            </div>

            <div className="hidden lg:block">
              <SocialIcons variant="top-strip" showLabel={false} />
            </div>

            <a
              href={EXTERNAL_LINKS.ADMISSION_ENQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded bg-[#991b1b] px-3.5 py-1 font-semibold text-white transition-all duration-200 hover:bg-[#b91c1c] shadow-sm text-xs tracking-wide"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
              <span>Admissions 2026-27</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
