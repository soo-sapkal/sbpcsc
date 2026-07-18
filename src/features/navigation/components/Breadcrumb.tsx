"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const routeLabels: Record<string, string> = {
  about: "About Us",
  pcet: "PCET",
  sbpcsc: "SBPCSC",
  "principal-desk": "Principal's Desk",
  committee: "Committee",
  administration: "Administration",
  infrastructure: "Infrastructure and Facilities",
  rules: "Rules and Regulations",
  admission: "Admission",
  academics: "Academics",
  plan: "Academic Plan",
  science: "Science",
  commerce: "Commerce",
  gallery: "Gallery",
  activities: "Activities",
  "guest-lectures": "Guest Lectures",
  achievements: "Achievements",
  blog: "Blog",
  library: "Library",
  media: "Media",
  newsletter: "Newsletter",
  video: "Video",
  reviews: "Reviews",
  contact: "Contact Us",
  launch: "Launch",
}

function generateBreadcrumbs(pathname: string): { label: string; href: string }[] {
  const segments = pathname.split("/").filter(Boolean)
  const crumbs: { label: string; href: string }[] = []

  if (segments.length === 0) return crumbs

  crumbs.push({ label: "Home", href: "/" })

  let current = ""
  for (const segment of segments) {
    current += `/${segment}`
    const label = routeLabels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    crumbs.push({ label, href: current })
  }

  return crumbs
}

export function Breadcrumb() {
  const pathname = usePathname()
  const crumbs = generateBreadcrumbs(pathname)

  if (crumbs.length <= 1) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              )}
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-muted-foreground no-underline transition-colors hover:text-primary",
                    i === 0 && "hover:text-primary"
                  )}
                >
                  {i === 0 && <Home className="h-3.5 w-3.5" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
