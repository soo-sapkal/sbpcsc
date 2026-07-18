"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  color: string
  size: number
  life: number
  maxLife: number
  gravity: number
  trail: { x: number; y: number }[]
}

interface Rocket {
  x: number
  y: number
  targetY: number
  speed: number
  color: string
  size: number
}

const COLORS = [
  "#146ab5", "#cf2b1f", "#f59e0b", "#10b981", "#8b5cf6",
  "#ec4899", "#06b6d4", "#f97316", "#22c55e", "#e11d48",
]

export function FireworksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rocketsRef = useRef<Rocket[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight ?? 400
    }
    resize()
    window.addEventListener("resize", resize)

    const createFirework = (x: number, y: number, color: string) => {
      const count = 40 + Math.floor(Math.random() * 30)
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3
        const speed = 2 + Math.random() * 4
        const particle: Particle = {
          x,
          y,
          vx: Math.cos(angle) * speed * (0.5 + Math.random()),
          vy: Math.sin(angle) * speed * (0.5 + Math.random()),
          alpha: 1,
          color,
          size: 2 + Math.random() * 3,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          gravity: 0.04,
          trail: [],
        }
        particlesRef.current.push(particle)
      }
    }

    const launchRocket = () => {
      const x = Math.random() * canvas.width
      const targetY = 50 + Math.random() * (canvas.height * 0.5)
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      rocketsRef.current.push({
        x,
        y: canvas.height,
        targetY,
        speed: 6 + Math.random() * 4,
        color,
        size: 2 + Math.random() * 1.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      rocketsRef.current = rocketsRef.current.filter((rocket) => {
        ctx.beginPath()
        ctx.arc(rocket.x, rocket.y, rocket.size, 0, Math.PI * 2)
        ctx.fillStyle = rocket.color
        ctx.fill()

        rocket.y -= rocket.speed

        if (rocket.y <= rocket.targetY) {
          createFirework(rocket.x, rocket.y, rocket.color)
          return false
        }
        return true
      })

      particlesRef.current = particlesRef.current.filter((p) => {
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 5) p.trail.shift()

        p.vx *= 0.98
        p.vy *= 0.98
        p.vy += p.gravity
        p.x += p.vx
        p.y += p.vy
        p.life++
        p.alpha = 1 - p.life / p.maxLife

        if (p.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(p.trail[0].x, p.trail[0].y)
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y)
          }
          ctx.strokeStyle = p.color.replace(")", `,${p.alpha * 0.3})`).replace("rgb", "rgba")
          ctx.lineWidth = p.size * 0.5
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(")", `,${p.alpha})`).replace("rgb", "rgba")
        ctx.fill()

        return p.life < p.maxLife && p.alpha > 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const launchInterval = setInterval(launchRocket, 800)
    launchRocket()
    launchRocket()
    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      clearInterval(launchInterval)
      window.removeEventListener("resize", resize)
      particlesRef.current = []
      rocketsRef.current = []
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full rounded-2xl"
      aria-label="Fireworks animation"
    />
  )
}
