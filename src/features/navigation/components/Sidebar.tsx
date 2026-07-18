"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { aboutSidebar } from "@/features/navigation/data/sidebar-links"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Sidebar() {
  const pathname = usePathname()

  const { title, links } = aboutSidebar

  return (
    <nav aria-label="Section navigation" className="rounded-xl border border-border bg-card shadow-soft">
      <div className="border-b border-border bg-gradient-to-r from-primary to-primary-dark px-5 py-3.5">
        <h2 className="font-heading text-base font-bold text-white">{title}</h2>
      </div>
      <ul className="space-y-0.5 p-2">
        {links.map((link, i) => (
          <SidebarLink
            key={i}
            link={link}
            pathname={pathname}
            depth={0}
          />
        ))}
      </ul>
    </nav>
  )
}

function SidebarLink({
  link,
  pathname,
  depth,
}: {
  link: { label: string; href: string; children?: { label: string; href: string }[] }
  pathname: string
  depth: number
}) {
  const [open, setOpen] = useState(
    link.children?.some((c) => pathname === c.href) ?? false
  )
  const hasChildren = link.children && link.children.length > 0
  const active = pathname === link.href
  const hasActiveChild = link.children?.some((c) => pathname === c.href)

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={link.href}
          className={cn(
            "block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
            active
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {link.label}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
          hasActiveChild || active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-l-2 border-primary/20 pl-3"
          >
            {link.children!.map((child, j) => (
              <li key={j}>
                <Link
                  href={child.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-all duration-200",
                    pathname === child.href
                      ? "font-medium text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}
