"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FlaskConical, 
  Image as ImageIcon, 
  Compass, 
  Sparkles, 
  ArrowUpRight, 
  Palette, 
  Layers, 
  Cpu
} from "lucide-react"

interface ExperimentCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  tags: string[]
  status: "Active" | "Draft" | "Planned"
  color: string
}

const experiments: ExperimentCardProps[] = [
  {
    title: "Gallery V2 Design",
    description: "Experimental image grid layout with advanced hover effects, custom category filtering animations, and a polished media viewer.",
    href: "/experiments/gallery-v2",
    icon: <ImageIcon className="w-6 h-6 text-indigo-400" />,
    tags: ["Grid", "Framer Motion", "Lightbox"],
    status: "Active",
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400",
  },
  {
    title: "Aesthetics Playground",
    description: "A sandbox page demonstrating custom glassmorphism components, gradients, and micro-interactions for the new UI guidelines.",
    href: "/experiments/aesthetics-sandbox",
    icon: <Palette className="w-6 h-6 text-emerald-400" />,
    tags: ["Glassmorphism", "CSS Variables", "Buttons"],
    status: "Draft",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
  },
  {
    title: "Interactive Navigation V2",
    description: "Smooth multi-level navigation system with dynamic sub-menu hover cards, spring animations, and an off-canvas mobile layout.",
    href: "/experiments/navigation-v2",
    icon: <Compass className="w-6 h-6 text-pink-400" />,
    tags: ["Navigation", "Layout", "Interactions"],
    status: "Planned",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
  },
]

export default function ExperimentsDashboard() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 relative overflow-hidden bg-slate-950 font-sans selection:bg-indigo-500/30">
      {/* Decorative gradient glow elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200 mb-8 group gap-1">
          <span>←</span> Back to Main Website
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold tracking-wide text-indigo-300 uppercase mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              Developer Lab
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Frontend Experiments
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              An isolated sandbox for testing modern designs, rich micro-animations, and visual layouts without disrupting the core website components.
            </p>
          </div>
          
          {/* Quick stats/info */}
          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 px-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Total Labs</div>
                <div className="text-xl font-bold text-white">3</div>
              </div>
            </div>
            <div className="w-[1px] bg-slate-800 self-stretch" />
            <div className="flex items-center gap-3 px-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Framework</div>
                <div className="text-xl font-bold text-white">Next.js 16</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl transition-all duration-300 overflow-hidden"
            >
              {/* Radial glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

              <div>
                {/* Header of the card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 group-hover:text-white transition-colors duration-300">
                    {exp.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    exp.status === "Active" ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" :
                    exp.status === "Draft" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
                    "bg-slate-800 border-slate-700 text-slate-400"
                  }`}>
                    {exp.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                  {exp.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Bottom footer of the card */}
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-800/80 border border-slate-850 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Navigation Button */}
                {exp.status !== "Planned" ? (
                  <Link 
                    href={exp.href} 
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors duration-200 shadow-sm"
                  >
                    Launch Lab
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button 
                    disabled 
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/50 text-slate-500 font-semibold text-sm border border-slate-800 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-20 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Crafting future aesthetics for S. B. Patil College</span>
          </div>
          <div>
            <span>Press <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Ctrl + C</code> in terminal to stop dev server.</span>
          </div>
        </div>

      </div>
    </div>
  )
}
