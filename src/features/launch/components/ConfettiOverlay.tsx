"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  velocityX: number
  velocityY: number
  color: string
  size: number
  shape: "rect" | "circle"
}

const COLORS = ["#146ab5", "#cf2b1f", "#f59e0b", "#10b981", "#8b5cf6", "#ec4899", "#06b6d4", "#f97316", "#22c55e", "#e11d48"]

interface ConfettiOverlayProps {
  active: boolean
  duration?: number
}

export function ConfettiOverlay({ active, duration = 4000 }: ConfettiOverlayProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    if (!active) {
      setPieces([])
      return
    }

    const newPieces: ConfettiPiece[] = []
    for (let i = 0; i < 80; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * 3,
        velocityY: 1 + Math.random() * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 8,
        shape: Math.random() > 0.5 ? "rect" : "circle",
      })
    }
    setPieces(newPieces)
    startRef.current = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startRef.current
      if (elapsed >= duration) {
        setPieces([])
        return
      }

      setPieces((prev) =>
        prev
          .map((p) => ({
            ...p,
            y: p.y + p.velocityY * 0.3,
            x: p.x + p.velocityX * 0.3,
            rotation: p.rotation + 2,
            velocityY: p.velocityY + 0.05,
          }))
          .filter((p) => p.y < 110),
      )

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, duration])

  return (
    <AnimatePresence>
      {active && pieces.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute"
              style={{
                left: `${piece.x}%`,
                top: `${piece.y}%`,
                width: piece.size,
                height: piece.shape === "rect" ? piece.size * 0.6 : piece.size,
                backgroundColor: piece.color,
                borderRadius: piece.shape === "circle" ? "50%" : "2px",
                transform: `rotate(${piece.rotation}deg)`,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
