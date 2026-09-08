"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNav, type NavItem } from "@/data/navigation"
import { ChevronDown } from "lucide-react"

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href && pathname === item.href) return true
  if (item.children) return item.children.some((child) => isActive(pathname, child))
  return false
}

function NavLink({ item, pathname, depth = 0 }: { item: NavItem; pathname: string; depth?: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const hasChildren = item.children && item.children.length > 0
  const active = isActive(pathname, item) || (item.href === "/" && pathname === "/")

  useEffect(() => {
    const el = ref.current
    if (!el || !hasChildren) return
    const handleMouseEnter = () => setOpen(true)
    const handleMouseLeave = () => setOpen(false)
    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasChildren])

  if (!hasChildren && item.href) {
    const isExternal = item.href.startsWith("http")
    const Comp = isExternal ? "a" : Link
    const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

    return (
      <li className="relative">
        <Comp
          href={item.href}
          className={`block px-3.5 py-3.5 text-[0.875rem] font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 border-b-2 ${
            active
              ? "bg-[#133863] border-amber-400 text-amber-200"
              : "border-transparent hover:bg-[#133863] hover:border-amber-400/70"
          }`}
          {...extraProps}
        >
          {item.label}
        </Comp>
      </li>
    )
  }

  if (!hasChildren) return null

  return (
    <li ref={ref} className="relative">
      <span
        className={`flex cursor-pointer items-center gap-1.5 px-3.5 py-3.5 text-[0.875rem] font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 border-b-2 ${
          active
            ? "bg-[#133863] border-amber-400 text-amber-200"
            : "border-transparent hover:bg-[#133863] hover:border-amber-400/70"
        }`}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-amber-400" : "text-slate-300"}`} />
      </span>
      <ul
        className={`nav-dropdown absolute left-0 z-[99] m-0 list-none border border-slate-700/50 bg-[#0a2540] shadow-xl rounded-b-md overflow-hidden p-0 ${
          open ? "nav-dropdown-open" : ""
        }`}
        style={{
          minWidth: "15rem",
          display: open ? "block" : undefined,
        }}
      >
        {item.children!.map((child, i) => (
          <NavDropdownItem key={i} item={child} pathname={pathname} depth={depth + 1} />
        ))}
      </ul>
    </li>
  )
}

function NavDropdownItem({ item, pathname, depth }: { item: NavItem; pathname: string; depth: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const hasChildren = item.children && item.children.length > 0
  const active = isActive(pathname, item)

  useEffect(() => {
    const el = ref.current
    if (!el || !hasChildren) return
    const handleMouseEnter = () => setOpen(true)
    const handleMouseLeave = () => setOpen(false)
    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasChildren])

  if (!hasChildren && item.href) {
    const isExternal = item.href.startsWith("http")
    const Comp = isExternal ? "a" : Link
    const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

    return (
      <li>
        <Comp
          href={item.href}
          className={`block w-full border-b border-slate-700/40 px-4 py-2.5 text-[0.844rem] font-medium tracking-wide text-slate-100 no-underline transition-colors duration-200 hover:bg-[#143e6d] hover:text-white ${
            active ? "bg-[#143e6d] text-amber-300 font-semibold border-l-2 border-amber-400" : ""
          }`}
          {...extraProps}
        >
          {item.label}
        </Comp>
      </li>
    )
  }

  if (!hasChildren) return null

  return (
    <li ref={ref} className="relative">
      <span className="flex w-full cursor-pointer items-center justify-between border-b border-slate-700/40 px-4 py-2.5 text-[0.844rem] font-medium tracking-wide text-slate-100 no-underline transition-colors duration-200 hover:bg-[#143e6d] hover:text-white">
        {item.label}
        <ChevronDown className="h-3 w-3 -rotate-90 text-slate-400" />
      </span>
      <ul
        className={`nav-dropdown absolute left-full top-0 z-[99] m-0 list-none border border-slate-700/50 bg-[#0a2540] shadow-xl rounded-md overflow-hidden p-0 ${
          open ? "nav-dropdown-open" : ""
        }`}
        style={{
          minWidth: "15rem",
          display: open ? "block" : undefined,
        }}
      >
        {item.children!.map((child, i) => (
          <NavDropdownItem key={i} item={child} pathname={pathname} depth={depth + 1} />
        ))}
      </ul>
    </li>
  )
}

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="menu-strip bg-[#0a2540] border-t border-slate-800 hidden lg:block shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <ul className="m-0 flex list-none justify-center p-0 flex-wrap">
            {mainNav.map((item, i) => (
              <NavLink key={i} item={item} pathname={pathname} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
