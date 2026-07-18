"use client"

import { motion } from "framer-motion"
import { Rocket, Sparkles } from "lucide-react"
import { CountdownTimer } from "./CountdownTimer"
import { FireworksCanvas } from "./FireworksCanvas"
import { GiftBox } from "./GiftBox"

export function LaunchPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-dot opacity-40" />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            New Website Launch
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Something Amazing Is
            <span className="gradient-primary bg-clip-text text-transparent"> Coming Soon</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are rebuilding the digital experience of S. B. Patil College of Science and Commerce.
            Get ready for a faster, smarter, and more beautiful website.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 w-full max-w-4xl"
        >
          <div className="relative h-[300px] sm:h-[400px]">
            <FireworksCanvas />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <GiftBox />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-6 py-3 shadow-soft backdrop-blur-sm">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Stay tuned for the launch!
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
