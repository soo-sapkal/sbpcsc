"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNav, type NavItem } from "@/data/navigation"
import { ChevronDown } from "lucide-react"

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href && pathname === item.href) return true
  if (item.children) return item.children.some((child) => isActive(pathname, child))
  return false
}

function MobileNavItem({
  item,
  pathname,
  onLinkClick,
  depth = 0,
}: {
  item: NavItem
  pathname: string
  onLinkClick: () => void
  depth?: number
}) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0
  const active = isActive(pathname, item) || (item.href === "/" && pathname === "/")

  if (!hasChildren && item.href) {
    const isExternal = item.href.startsWith("http")
    const Comp = isExternal ? "a" : Link
    const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

    return (
      <li className="border-t border-[#999]">
        <Comp
          href={item.href}
          onClick={onLinkClick}
          className={`block w-full px-4 py-3 text-[0.938rem] font-bold uppercase text-white no-underline ${
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
    <li className="border-t border-[#999]">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between px-4 py-3 text-[0.938rem] font-bold uppercase text-white ${
          active ? "bg-[#cf2b1f]" : ""
        }`}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="m-0 list-none bg-[#333] p-0">
          {item.children!.map((child, i) => (
            <MobileNavItem key={i} item={child} pathname={pathname} onLinkClick={onLinkClick} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="menu-strip bg-[#146ab5] lg:hidden">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[2.875rem]">
          <div className="px-4 py-[1.438rem] text-xs font-bold text-[#ddd]" id="head-mobile" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`button absolute right-0 top-0 z-[9999] cursor-pointer`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          />
          {menuOpen && (
            <ul className="m-0 w-full list-none border-none bg-[#146ab5] p-0">
              {mainNav.map((item, i) => (
                <MobileNavItem key={i} item={item} pathname={pathname} onLinkClick={closeMenu} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
