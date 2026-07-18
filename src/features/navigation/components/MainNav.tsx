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
          className={`block px-3 py-[18px] text-[15px] font-bold uppercase tracking-wide text-white no-underline transition-colors duration-300 ${
            active ? "bg-[#cf2b1f]" : "hover:bg-[#cf2b1f]"
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
        className={`flex cursor-pointer items-center gap-1 px-3 py-[18px] text-[15px] font-bold uppercase tracking-wide text-white no-underline transition-colors duration-300 ${
          active ? "bg-[#cf2b1f]" : "hover:bg-[#cf2b1f]"
        }`}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5" />
      </span>
      <ul
        className={`nav-dropdown absolute left-0 z-[99] m-0 list-none border-none bg-[#146ab5] p-0 ${
          open ? "nav-dropdown-open" : ""
        }`}
        style={{
          minWidth: "220px",
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
          className={`block w-[220px] border-b border-white/15 px-4 py-[11px] text-[15px] font-bold uppercase text-white no-underline transition-colors duration-300 hover:bg-[#cf2b1f] ${
            active ? "bg-[#cf2b1f]" : ""
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
      <span className="flex w-[220px] cursor-pointer items-center justify-between border-b border-white/15 px-4 py-[11px] text-[15px] font-bold uppercase text-white no-underline transition-colors duration-300 hover:bg-[#cf2b1f]">
        {item.label}
        <ChevronDown className="h-3 w-3 -rotate-90" />
      </span>
      <ul
        className="nav-dropdown absolute left-full top-0 z-[99] m-0 list-none border-none bg-[#146ab5] p-0"
        style={{
          minWidth: "220px",
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
    <div className="menu-strip bg-[#146ab5] hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="mbl_nopadd">
          <nav id="cssmenu">
            <ul className="m-0 flex list-none p-0">
              {mainNav.map((item, i) => (
                <NavLink key={i} item={item} pathname={pathname} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
