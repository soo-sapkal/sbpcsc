"use client"

import { Bell } from "lucide-react"

interface Announcement {
  label: string
  href: string
  isUrgent?: boolean
  isExternal?: boolean
}

const announcements: Announcement[] = [
  {
    label: "Enquiries & Admissions Open for Science and Commerce (Std. XI) 2026-27",
    href: "/admission",
    isUrgent: true,
  },
  {
    label: "Brain Waves 2025: Annual Science & Cultural Exhibition Highlights",
    href: "/images/brain-waves-2025-highlight.jpg",
    isExternal: true,
  },
  {
    label: "Download Official PCET Institutional Brochure 2026-27",
    href: "/pdf/pcet-brochure-2026.pdf",
    isExternal: true,
  },
  {
    label: "MHT-CET / NEET Integrated Preparation Batches Available at SBPCSC",
    href: "/academics/science/physics",
    isUrgent: true,
  },
  {
    label: "PCU University Higher Education Opportunities for SBPCSC Graduates",
    href: "https://pcu.edu.in/pcu-brochures.php",
    isExternal: true,
  },
]

export function Spotlight() {
  return (
    <div className="bg-[#f8fafc] border-b border-slate-200/80 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Badge */}
          <div className="shrink-0 py-2 pr-3">
            <div className="inline-flex items-center gap-1.5 rounded bg-[#991b1b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
              </span>
              <Bell className="h-3 w-3" />
              <span>Announcements</span>
            </div>
          </div>

          {/* Marquee Ticker */}
          <div className="flex-1 overflow-hidden py-2 text-xs md:text-[0.813rem]">
            <div className="scrolling-text group flex items-center">
              <div className="scrolling-content flex whitespace-nowrap group-hover:[animation-play-state:paused]">
                {announcements.concat(announcements).map((item, idx) => (
                  <span key={idx} className="inline-flex items-center">
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className={`font-semibold transition-colors hover:underline ${
                        item.isUrgent ? "text-[#991b1b]" : "text-slate-800 hover:text-[#0a2540]"
                      }`}
                    >
                      {item.label}
                    </a>
                    <span className="mx-4 text-slate-300 font-bold">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
