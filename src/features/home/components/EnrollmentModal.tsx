"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function EnrollmentModal() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const shown = sessionStorage.getItem("enrollment-modal-shown")
    if (shown) return

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem("enrollment-modal-shown", "true")
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div className="relative w-full max-w-md rounded-lg bg-surface shadow-card">
        <button
          ref={closeRef}
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 z-10 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Close enquiry modal"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-4 pt-8">
          <Image
            src="/images/enquiry-sbpcsc-2026-27.jpg"
            alt="Enquiry SBPCSC 2026-27"
            width={500}
            height={700}
            className="mx-auto rounded"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}