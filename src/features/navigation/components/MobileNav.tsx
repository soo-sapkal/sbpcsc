"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNav, type NavItem } from "@/data/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

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

  const paddingLeftClass = depth === 0 ? "px-4" : depth === 1 ? "pl-8 pr-4" : "pl-12 pr-4"

  if (!hasChildren && item.href) {
    const isExternal = item.href.startsWith("http")
    const Comp = isExternal ? "a" : Link
    const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

    return (
      <li className="border-t border-slate-700/50">
        <Comp
          href={item.href}
          onClick={onLinkClick}
          className={`block w-full py-3 text-[0.875rem] font-semibold uppercase tracking-wider text-slate-100 no-underline transition-colors ${paddingLeftClass} ${
            active ? "bg-[#133863] text-amber-300 font-bold border-l-4 border-amber-400" : "hover:bg-[#133863]"
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
    <li className="border-t border-slate-700/50">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between py-3 text-[0.875rem] font-semibold uppercase tracking-wider text-slate-100 transition-colors ${paddingLeftClass} ${
          active ? "bg-[#133863] text-amber-300 font-bold border-l-4 border-amber-400" : "hover:bg-[#133863]"
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180 text-amber-400" : "text-slate-400"}`} />
      </button>
      {open && (
        <ul className="m-0 list-none bg-[#071b30] p-0 border-t border-slate-800">
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
    <div className="bg-[#0a2540] lg:hidden border-t border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
            Navigation Menu
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 rounded bg-[#133863] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1d4d82] focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? (
              <>
                <X className="h-4 w-4 text-amber-400" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="h-4 w-4 text-amber-400" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>

        {menuOpen && (
          <ul className="m-0 w-full list-none border-t border-slate-700/60 bg-[#0a2540] p-0 shadow-lg">
            {mainNav.map((item, i) => (
              <MobileNavItem key={i} item={item} pathname={pathname} onLinkClick={closeMenu} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
