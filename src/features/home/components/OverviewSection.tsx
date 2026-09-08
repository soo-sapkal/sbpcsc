import Link from "next/link"
import { NewsScroll } from "./NewsScroll"
import { EXTERNAL_LINKS } from "@/data/constants"
import { ArrowRight, BookOpen, Compass, Award, ExternalLink, ShieldCheck } from "lucide-react"

export function OverviewSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Institutional Welcome & PCET Legacy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Badge */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#991b1b]">
                <ShieldCheck className="h-4 w-4" />
                <span>Pimpri Chinchwad Education Trust (Estd. 1990)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a2540] font-serif leading-tight">
                Empowering Minds, Shaping Futures at SBPCSC
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                <strong className="text-[#0a2540]">S.B. Patil College of Science and Commerce (SBPCSC)</strong> is a
                premier, student-centered co-educational junior college situated in Ravet, Pune. Managed by the
                renowned <strong className="text-[#0a2540]">Pimpri Chinchwad Education Trust (PCET)</strong>, we combine
                vigorous academic discipline with holistic student mentorship to prepare young scholars for Maharashtra State
                HSC Board examinations, competitive entrance tests, and higher university education.
              </p>
            </div>

            {/* Academic Stream Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Science Stream Card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 hover:border-slate-300 hover:shadow-xs transition-all">
                <div className="flex items-center gap-2.5 text-[#0a2540] mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0a2540] text-white">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight">Science Stream</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Physics, Chemistry, Mathematics, Biology, Computer Science &amp; IT with integrated coaching for MHT-CET, NEET &amp; JEE.
                </p>
                <Link
                  href="/academics/science/physics"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0a2540] hover:underline"
                >
                  <span>Explore Science Curriculum</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Commerce Stream Card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 hover:border-slate-300 hover:shadow-xs transition-all">
                <div className="flex items-center gap-2.5 text-[#0a2540] mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#991b1b] text-white">
                    <Compass className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight">Commerce Stream</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Book Keeping &amp; Accountancy, Secretarial Practice, OCM, Economics, Math &amp; IT with CA-Foundation orientation.
                </p>
                <Link
                  href="/academics/commerce/secretarial"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#991b1b] hover:underline"
                >
                  <span>Explore Commerce Curriculum</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Quick Actions / Trust Info */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about/sbpcsc"
                className="inline-flex items-center gap-2 rounded bg-[#0a2540] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#12365c] transition-colors"
              >
                <span>About College &amp; Vision</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/about/principal-desk"
                className="inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span>Principal&apos;s Desk</span>
              </Link>
              <a
                href={EXTERNAL_LINKS.PCET}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <span>About PCET Trust</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Right: Official Notice Board & Circulars (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">
              {/* Notice Board Header */}
              <div className="bg-[#0a2540] px-5 py-3.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-400" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider">Official Notice Board</h3>
                    <p className="text-[0.688rem] text-slate-300">Latest Circulars &amp; Announcements</p>
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              {/* Notice List */}
              <div className="p-3 sm:p-4">
                <NewsScroll />
              </div>

              {/* Notice Board Footer */}
              <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-center">
                <Link
                  href="/achievements"
                  className="text-xs font-bold text-[#0a2540] hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Academic Results &amp; Circulars</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
