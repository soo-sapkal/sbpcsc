"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Sparkles, 
  Layers, 
  Settings, 
  Play, 
  Check, 
  Eye, 
  Flame,
  Star,
  Info
} from "lucide-react"

export default function AestheticsSandboxPage() {
  const [glassBlur, setGlassBlur] = useState("backdrop-blur-md")
  const [glassOpacity, setGlassOpacity] = useState("bg-white/5")
  const [glassBorder, setGlassBorder] = useState("border-white/10")
  const [copied, setCopied] = useState(false)

  const cardCode = `/* Glassmorphism Preset */
.glass-panel {
  ${glassOpacity};
  ${glassBlur};
  border: 1px solid;
  border-color: ${glassBorder === "border-white/10" ? "rgba(255, 255, 255, 0.1)" : "rgba(124, 58, 237, 0.2)"};
  border-radius: 1.5rem;
}`

  const copyCode = () => {
    navigator.clipboard.writeText(cardCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden pb-24 selection:bg-indigo-500/30">
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
        
        {/* Header navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/experiments" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-semibold text-emerald-300">
            <Flame className="w-3.5 h-3.5" />
            Aesthetic Lab v2.0
          </div>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Aesthetics Playground
          </h1>
          <p className="text-slate-400 text-lg">
            Build and test high-end glassmorphism configurations, interactive buttons, dynamic gradient effects, and smooth hover feedback.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Controls Panel */}
          <div className="space-y-8 p-8 rounded-3xl bg-slate-900/40 border border-slate-900 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-400" />
              Configure Glass Effects
            </h2>

            {/* Blur Slider / Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">Blur Strength</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Light", value: "backdrop-blur-sm" },
                  { label: "Medium", value: "backdrop-blur-md" },
                  { label: "Strong", value: "backdrop-blur-2xl" }
                ].map(item => (
                  <button
                    key={item.value}
                    onClick={() => setGlassBlur(item.value)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      glassBlur === item.value 
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/10" 
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Opacity Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">Fill Opacity</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Super Subtle (5%)", value: "bg-white/5" },
                  { label: "Standard (10%)", value: "bg-white/10" },
                  { label: "Opaque (20%)", value: "bg-white/20" }
                ].map(item => (
                  <button
                    key={item.value}
                    onClick={() => setGlassOpacity(item.value)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      glassOpacity === item.value 
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/10" 
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Tint Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">Border Tint</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "White Subtle", value: "border-white/10" },
                  { label: "Violet Colored", value: "border-violet-500/20" }
                ].map(item => (
                  <button
                    key={item.value}
                    onClick={() => setGlassBorder(item.value)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      glassBorder === item.value 
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/10" 
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro Interaction Section */}
            <div className="pt-6 border-t border-slate-850 space-y-4">
              <h3 className="text-sm font-semibold text-slate-300">Premium Hover Micro-Interactions</h3>
              <div className="flex flex-wrap gap-4">
                {/* Scale button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-white rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Spring Scale
                </motion.button>
                {/* Glow button */}
                <motion.button 
                  whileHover={{ boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 rounded-xl border border-indigo-500"
                >
                  Shadow Glow
                </motion.button>
                {/* Gradient shine button */}
                <button className="relative overflow-hidden px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl border border-purple-500 group">
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  Shine Slide
                </button>
              </div>
            </div>

          </div>

          {/* Preview Panel */}
          <div className="space-y-8 flex flex-col justify-between">
            
            {/* Visual Preview */}
            <div className="relative flex-1 min-h-[300px] rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 border border-slate-900 flex items-center justify-center p-8 overflow-hidden">
              
              {/* Backglow element */}
              <div className="absolute w-44 h-44 rounded-full bg-purple-500/20 blur-[50px] animate-pulse pointer-events-none" />

              {/* Dynamic Glass Panel */}
              <div className={`p-8 rounded-2xl ${glassOpacity} ${glassBlur} border ${glassBorder} w-full max-w-sm shadow-2xl relative z-10 transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Glassmorphism</h3>
                    <p className="text-xs text-slate-400">Preset Component</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Observe how backdrop blur integrates cleanly with color backgrounds and shapes behind it, delivering a high-quality depth effect.
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-indigo-400/40 text-indigo-400" /> Premium</span>
                  <span>v2.0</span>
                </div>
              </div>
            </div>

            {/* Generated CSS Panel */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-900 font-mono text-xs relative overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-500 text-xs">GENERATED CLASSES</span>
                <button 
                  onClick={copyCode}
                  className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Eye className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Presets"}
                </button>
              </div>
              <pre className="text-slate-300 overflow-x-auto whitespace-pre-wrap">{cardCode}</pre>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
