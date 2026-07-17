"use client"

import { usePathname } from "next/navigation"

export function useActiveNav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return { pathname, isActive }
}
