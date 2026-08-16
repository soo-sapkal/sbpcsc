"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 220)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-muted text-accent shadow-lg transition-opacity duration-500 hover:bg-accent hover:text-white hover:opacity-100 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
