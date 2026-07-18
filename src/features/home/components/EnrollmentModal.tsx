"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function EnrollmentModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const shown = sessionStorage.getItem("enrollment-modal-shown")
    if (shown) return

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem("enrollment-modal-shown", "true")
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative mx-4 w-full max-w-md rounded-lg bg-white shadow-xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 z-10 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
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
