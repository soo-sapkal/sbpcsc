"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const targetDate = new Date("2026-08-01T00:00:00")

function FlipUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0")

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-2 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-primary to-primary-dark shadow-lg shadow-primary/30 sm:h-24 sm:w-24">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  if (isExpired) {
    return (
      <div className="text-center">
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-accent"
        >
          🎉 We Are Live! 🎉
        </motion.p>
      </div>
    )
  }

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      <FlipUnit value={timeLeft.days} label="Days" />
      <FlipUnit value={timeLeft.hours} label="Hours" />
      <FlipUnit value={timeLeft.minutes} label="Minutes" />
      <FlipUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
