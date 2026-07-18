"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/data/site-config"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass shadow-strong"
          : "bg-white"
      )}
    >
      <div className="container-wide py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/" className="shrink-0" aria-label="Home">
              <Image
                src={siteConfig.logo}
                alt="SBPCSC Logo"
                width={55}
                height={55}
                className="h-auto w-[45px] md:w-[55px]"
                unoptimized
              />
            </Link>
            <div className="flex flex-col">
              <span className="font-heading text-[10px] font-semibold tracking-wider text-primary md:text-xs">
                {siteConfig.tagline}
              </span>
              <Link href="/" className="no-underline">
                <h1 className="font-heading text-sm font-bold leading-tight text-accent md:text-lg lg:text-xl">
                  {siteConfig.name}
                </h1>
              </Link>
              <div className="hidden gap-2 text-[10px] text-muted-foreground md:flex md:text-xs">
                <span>INDEX NO : {siteConfig.indexNo}</span>
                <span className="text-muted-foreground/50">|</span>
                <span>U-DISE NO : {siteConfig.udiseNo}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://pcet.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 md:block"
              aria-label="PCET Trust"
            >
              <Image
                src={siteConfig.trustLogo}
                alt="PCET Trust Logo"
                width={55}
                height={55}
                className="h-auto w-[45px] rounded-full ring-2 ring-primary/10 md:w-[55px]"
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
