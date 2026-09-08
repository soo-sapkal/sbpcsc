"use client"

import { FileText, ExternalLink } from "lucide-react"

export interface NoticeItem {
  date: { day: string; month: string }
  category: "HSC Board" | "Admissions" | "Academic" | "Event"
  title: string
  href: string
  isUrgent?: boolean
  isExternal?: boolean
}

const officialNotices: NoticeItem[] = [
  {
    date: { day: "28", month: "AUG" },
    category: "Admissions",
    title: "Enquiries Open for Std. XI Science and Commerce (A.Y. 2026-27)",
    href: "/admission",
    isUrgent: true,
  },
  {
    date: { day: "15", month: "JUL" },
    category: "HSC Board",
    title: "HSC Science & Commerce Board Result Highlights & Toppers Merit List",
    href: "/achievements",
    isUrgent: true,
  },
  {
    date: { day: "20", month: "JUN" },
    category: "Academic",
    title: "Download Official PCET Institutional Brochure & Academic Calendar 2026",
    href: "/pdf/pcet-brochure-2026.pdf",
    isExternal: true,
  },
  {
    date: { day: "10", month: "MAY" },
    category: "Academic",
    title: "MHT-CET & NEET Integrated Guidance Batches — Registration Open",
    href: "/academics/science/physics",
    isUrgent: true,
  },
  {
    date: { day: "05", month: "APR" },
    category: "Event",
    title: "Brain Waves Annual Science & Cultural Exhibition Gallery & Certificate Winners",
    href: "/gallery/activities/2025-26",
  },
  {
    date: { day: "18", month: "MAR" },
    category: "Academic",
    title: "Department of Secretarial Practice & Accountancy: Study Material & Question Papers",
    href: "/academics/commerce/secretarial",
  },
  {
    date: { day: "02", month: "FEB" },
    category: "HSC Board",
    title: "HSC Maharashtra Board Examination Timetable & Hall Ticket Instructions",
    href: "/pdf/timetable-hsc-board-march-2026.pdf",
    isExternal: true,
  },
]

export function NewsScroll() {
  return (
    <div className="divide-y divide-slate-100 max-h-[22rem] overflow-y-auto pr-1">
      {officialNotices.map((notice, i) => (
        <a
          key={i}
          href={notice.href}
          target={notice.isExternal ? "_blank" : undefined}
          rel={notice.isExternal ? "noopener noreferrer" : undefined}
          className="group flex items-start gap-3 py-3 px-2 rounded-lg transition-colors hover:bg-slate-50 text-left no-underline"
        >
          {/* Calendar Date Badge */}
          <div className="shrink-0 flex flex-col items-center justify-center h-12 w-12 rounded border border-slate-200 bg-white text-center shadow-xs">
            <span className="text-[0.65rem] font-bold text-[#991b1b] uppercase tracking-wider leading-none pt-1">
              {notice.date.month}
            </span>
            <span className="text-base font-extrabold text-[#0a2540] leading-none pb-0.5">
              {notice.date.day}
            </span>
          </div>

          {/* Notice Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-[0.65rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  notice.category === "Admissions"
                    ? "bg-amber-100 text-amber-900 border border-amber-200"
                    : notice.category === "HSC Board"
                    ? "bg-rose-100 text-rose-900 border border-rose-200"
                    : "bg-blue-100 text-blue-900 border border-blue-200"
                }`}
              >
                {notice.category}
              </span>
              {notice.isUrgent && (
                <span className="inline-flex items-center gap-1 text-[0.65rem] font-bold text-[#991b1b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#991b1b] animate-pulse" />
                  New
                </span>
              )}
            </div>

            <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0a2540] group-hover:underline transition-colors line-clamp-2 leading-snug">
              {notice.title}
            </h4>
          </div>

          {/* Icon */}
          <div className="shrink-0 text-slate-400 group-hover:text-[#0a2540] transition-colors pt-1">
            {notice.isExternal ? (
              <ExternalLink className="h-3.5 w-3.5" />
            ) : (
              <FileText className="h-3.5 w-3.5" />
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
