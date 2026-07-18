"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.15 },
  },
}

export function EnrollmentModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const shown = sessionStorage.getItem("enrollment-modal-shown")
    if (shown) return

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem("enrollment-modal-shown", "true")
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-strong"
            role="dialog"
            aria-modal="true"
            aria-label="Enrollment enquiry"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative">
              <Image
                src="/images/enquiry-sbpcsc-2026-27.jpg"
                alt="Enquiry SBPCSC 2026-27"
                width={500}
                height={700}
                className="w-full object-cover"
                unoptimized
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
