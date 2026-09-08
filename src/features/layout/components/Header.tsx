import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/data/site-config"

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: College Crest */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="group block focus:outline-none focus:ring-2 focus:ring-[#0a2540]/20 rounded-lg p-1">
              <div className="relative h-16 w-16 md:h-20 md:w-20 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={siteConfig.logo}
                  alt="S.B. Patil College of Science & Commerce Crest"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </Link>
          </div>

          {/* Center: Institutional Identity */}
          <div className="flex-1 text-center min-w-0">
            {/* Trust Lineage */}
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1e3a8a] uppercase">
              Pimpri Chinchwad Education Trust&apos;s <span className="text-amber-700 font-bold">(PCET, Estd. 1990)</span>
            </div>

            {/* College Name */}
            <h1 className="my-0.5 text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#0a2540] uppercase font-serif">
              S. B. Patil College of Science &amp; Commerce
            </h1>

            {/* Affiliation & Stream Details */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[0.7rem] sm:text-xs text-slate-600 font-medium">
              <span className="text-[#991b1b] font-semibold">Junior College (XI &amp; XII)</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span>Science &amp; Commerce</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden md:inline">Affiliated to Maharashtra State Board (Pune Div.)</span>
            </div>

            {/* Official Statutory Codes */}
            <div className="mt-1 hidden sm:flex items-center justify-center gap-3 text-[0.688rem] text-slate-500 font-mono tracking-wide">
              <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                JR. COLL. INDEX: <strong className="text-slate-700">{siteConfig.indexNo}</strong>
              </span>
              <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                U-DISE NO: <strong className="text-slate-700">{siteConfig.udiseNo}</strong>
              </span>
            </div>
          </div>

          {/* Right: PCET Trust Emblem */}
          <div className="hidden sm:flex shrink-0 items-center">
            <a
              href="https://pcet.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center focus:outline-none focus:ring-2 focus:ring-[#0a2540]/20 rounded-lg p-1"
              title="Visit PCET Trust Official Website"
            >
              <div className="relative h-16 w-16 md:h-20 md:w-20 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={siteConfig.trustLogo}
                  alt="PCET Trust Logo"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <span className="hidden lg:block text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                PCET Trust
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
