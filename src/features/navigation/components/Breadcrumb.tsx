"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home } from "lucide-react"

const labelMap: Record<string, string> = {
  about: "About Us",
  "principal-desk": "Principal's Desk",
  committee: "Committee",
  administration: "Administration",
  infrastructure: "Infrastructure and Facilities",
  rules: "Rules and Regulations",
  academics: "Academics",
  plan: "Academic Plan",
  science: "Science",
  commerce: "Commerce",
  marathi: "Marathi",
  english: "English",
  hindi: "Hindi",
  math: "Mathematics",
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
  geography: "Geography",
  it: "Information Technology",
  cs: "Computer Science",
  account: "Account & Book Keeping",
  secretarial: "Secretarial Practice",
  ocm: "Organization of Commerce & Management",
  economics: "Economics",
  gallery: "Gallery",
  activities: "Activities",
  "guest-lectures": "Guest Lectures",
  achievements: "Achievements",
  blog: "Blog",
  media: "Media",
  newsletter: "Newsletter",
  video: "Video Gallery",
  contact: "Contact Us",
  admission: "Admission",
  library: "Library",
  reviews: "Reviews",
  sitemap: "Sitemap",
  launch: "Launch",
  pcet: "PCET",
  sbpcsc: "SBPCSC",
}

export function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) return null

  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = labelMap[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    const isLast = index === segments.length - 1
    return { href, label, isLast }
  })

  return (
    <div className="border-b border-border bg-muted">
      <div className="container mx-auto px-4">
        <nav aria-label="breadcrumb">
          <ol className="m-0 flex items-center gap-1.5 py-2 text-sm">
            <li>
              <Link href="/" className="flex items-center gap-1 text-muted-foreground no-underline hover:text-brand">
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {items.map((item) => (
              <li key={item.href} className="flex items-center gap-1.5">
                <span className="text-muted-foreground">/</span>
                {item.isLast ? (
                  <span className="text-brand font-semibold">{item.label}</span>
                ) : (
                  <Link href={item.href} className="text-muted-foreground no-underline hover:text-brand">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
