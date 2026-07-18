export interface NewsItem {
  label: string
  href: string
  target?: string
  className?: string
}

export const newsItems: NewsItem[] = [
  { label: "BRAINWAVES 2025", href: "/gallery/activities#BRAINWAVES2025", target: "_blank", className: "spotlight_red" },
  { label: "Navarasa Utsav 2025", href: "/gallery/activities#NavarasaUtsav2025", target: "_blank", className: "spotlight_red" },
  { label: "Visit to Tolani Maritime Institute", href: "/gallery/activities#TMI", target: "_blank", className: "spotlight_red" },
  { label: "Time Table HSC Board March 2026", href: "/pdf/timetable-hsc-board-march-2026.pdf", target: "_blank", className: "spotlight_red" },
  { label: "11th CAP Website", href: "https://pune.11thadmission.org.in/Public/Home.aspx", target: "_blank", className: "spotlight_red" },
  { label: "Career in Biology", href: "/pdf/careers-in-biology.pdf", target: "_blank", className: "spotlight_red" },
  { label: "11th Online Admission Process", href: "/admission", className: "spotlight_blue" },
]
