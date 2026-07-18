"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { mainNav, type NavItem } from "@/data/navigation"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href && pathname === item.href) return true
  if (item.children) return item.children.some((child) => isActive(pathname, child))
  return false
}

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scaleY: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.15, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: 8,
    scaleY: 0.95,
    transition: { duration: 0.1, ease: "easeIn" as const },
  },
}

function NavLink({ item, pathname, depth = 0 }: { item: NavItem; pathname: string; depth?: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const hasChildren = item.children && item.children.length > 0
  const active = isActive(pathname, item) || (item.href === "/" && pathname === "/")

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 100)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  if (!hasChildren && item.href) {
    const isExternal = item.href.startsWith("http")
    const Comp = isExternal ? "a" : Link
    const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

    return (
      <li className="relative">
        <Comp
          href={item.href}
          className={cn(
            "relative block px-3 py-[14px] text-[13px] font-semibold uppercase tracking-wider text-white no-underline transition-colors duration-200",
            "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white after:transition-all after:duration-300",
            "hover:bg-white/10",
            active && "bg-white/15 after:w-1/2"
          )}
          {...extraProps}
        >
          {item.label}
        </Comp>
      </li>
    )
  }

  if (!hasChildren) return null

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex cursor-pointer items-center gap-1 px-3 py-[14px] text-[13px] font-semibold uppercase tracking-wider text-white no-underline transition-colors duration-200",
          "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white after:transition-all after:duration-300",
          "hover:bg-white/10",
          active && "bg-white/15 after:w-1/2"
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 top-full z-[99] min-w-[220px] origin-top rounded-xl border border-white/10 bg-primary-dark p-1.5 shadow-strong"
            style={{ transformOrigin: "top center" }}
          >
            {item.children!.map((child, i) => (
              <NavDropdownItem key={i} item={child} pathname={pathname} depth={depth + 1} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

function NavDropdownItem({ item, pathname, depth }: { item: NavItem; pathname: string; depth: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const hasChildren = item.children && item.children.length > 0
  const active = isActive(pathname, item)

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 100)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  if (!hasChildren && item.href) {
    const isExternal = item.href.startsWith("http")
    const Comp = isExternal ? "a" : Link
    const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" as const } : {}

    return (
      <li>
        <Comp
          href={item.href}
          className={cn(
            "block rounded-lg px-3 py-2 text-sm font-medium text-white/80 no-underline transition-all duration-200",
            "hover:bg-white/10 hover:text-white",
            active && "bg-white/15 text-white"
          )}
          {...extraProps}
        >
          {item.label}
        </Comp>
      </li>
    )
  }

  if (!hasChildren) return null

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-white/80 no-underline transition-all duration-200",
          "hover:bg-white/10 hover:text-white",
          active && "bg-white/15 text-white"
        )}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="h-3 w-3 -rotate-90" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-full top-0 z-[99] min-w-[220px] origin-top-left rounded-xl border border-white/10 bg-primary-dark p-1.5 shadow-strong"
          >
            {item.children!.map((child, i) => (
              <NavDropdownItem key={i} item={child} pathname={pathname} depth={depth + 1} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden bg-primary lg:block" aria-label="Main navigation">
      <div className="container-wide">
        <ul className="flex list-none items-center">
          {mainNav.map((item, i) => (
            <NavLink key={i} item={item} pathname={pathname} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
