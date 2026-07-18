"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Sparkles, Rocket, PartyPopper } from "lucide-react"
import { ConfettiOverlay } from "./ConfettiOverlay"

export function GiftBox() {
  const [opened, setOpened] = useState(false)
  const [confettiActive, setConfettiActive] = useState(false)

  const handleOpen = () => {
    if (!opened) {
      setOpened(true)
      setConfettiActive(true)
    }
  }

  return (
    <>
      <ConfettiOverlay active={confettiActive} duration={5000} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.button
          onClick={handleOpen}
          whileHover={!opened ? { scale: 1.1 } : {}}
          whileTap={!opened ? { scale: 0.95 } : {}}
          className="group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={opened ? "Gift box opened" : "Open gift box"}
          disabled={opened}
        >
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.div
                key="closed"
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-accent shadow-glow sm:h-48 sm:w-48">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/10 to-transparent" />
                  <div className="absolute -left-2 top-1/2 h-8 w-4 -translate-y-1/2 rounded-r-full bg-accent/80" />
                  <div className="absolute -right-2 top-1/2 h-8 w-4 -translate-y-1/2 rounded-l-full bg-accent/80" />
                  <div className="absolute left-1/2 -top-2 h-4 w-8 -translate-x-1/2 rounded-b-full bg-accent/80" />
                  <div className="absolute bottom-1/2 left-1/2 h-4 w-8 -translate-x-1/2 rounded-t-full bg-accent/80" />
                  <Gift className="relative z-10 h-14 w-14 text-white drop-shadow-lg" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2"
                >
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="opened"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 shadow-strong sm:h-48 sm:w-48"
              >
                <PartyPopper className="mb-2 h-10 w-10 text-white" />
                <Rocket className="h-8 w-8 text-white" />
                <p className="mt-2 text-sm font-bold text-white">Surprise!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <h3 className="text-xl font-bold text-foreground">Welcome to Our New Website!</h3>
              <p className="mt-2 text-muted-foreground">
                Explore the all-new S. B. Patil College of Science and Commerce experience.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
