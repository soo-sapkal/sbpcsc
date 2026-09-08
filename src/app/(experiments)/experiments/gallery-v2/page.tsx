"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  Sparkles, 
  Calendar, 
  Info, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Play, 
  Grid,
  Heart
} from "lucide-react"

// Import actual data from the project
import { activitiesData, guestLecturesData, type GalleryEvent } from "@/features/gallery/data/gallery-data"

export default function GalleryV2Page() {
  const [activeTab, setActiveTab] = useState<"lectures" | "activities">("lectures")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [likedImages, setLikedImages] = useState<Record<string, boolean>>({})

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string; eventTitle: string }[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Get available years based on selected tab
  const years = useMemo(() => {
    const data = activeTab === "lectures" ? guestLecturesData : activitiesData
    const yearsList = data.map(item => item.year)
    return ["all", ...Array.from(new Set(yearsList))]
  }, [activeTab])

  // Get filtered events
  const filteredEvents = useMemo(() => {
    const data = activeTab === "lectures" ? guestLecturesData : activitiesData
    let eventsList: (GalleryEvent & { year: string })[] = []

    data.forEach(yearGroup => {
      if (selectedYear === "all" || yearGroup.year === selectedYear) {
        yearGroup.events.forEach(event => {
          eventsList.push({
            ...event,
            year: yearGroup.year
          })
        })
      }
    })

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      eventsList = eventsList.filter(e => 
        e.title.toLowerCase().includes(query) || 
        (e.description && e.description.toLowerCase().includes(query))
      )
    }

    // Limit to first 12 events for experiment performance
    return eventsList.slice(0, 12)
  }, [activeTab, selectedYear, searchQuery])

  // Handle open lightbox
  const openLightbox = (event: GalleryEvent, imgIndex: number) => {
    const imgs = event.images.map(img => ({
      src: img.src,
      alt: img.alt || event.title,
      eventTitle: event.title
    }))
    setLightboxImages(imgs)
    setLightboxIndex(imgIndex)
    setLightboxOpen(true)
  }

  // Handle like toggle
  const toggleLike = (src: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedImages(prev => ({
      ...prev,
      [src]: !prev[src]
    }))
  }

  // Render single event section
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden pb-24 selection:bg-purple-500/30">
      
      {/* Dynamic Gradients */}
      <div className="absolute top-[-10%] left-[-15%] w-[800px] h-[800px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/experiments" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            Aesthetic Lab v2.0
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Cinematic Gallery Design
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Testing a premium visual architecture for college events. Featuring dark mode glassmorphism, responsive masonry cards, interactive animations, and a rich media preview lightbox.
          </p>
        </div>

        {/* Filter controls panel */}
        <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-2xl mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Tab selection */}
            <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800 max-w-fit">
              <button
                onClick={() => { setActiveTab("lectures"); setSelectedYear("all"); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === "lectures"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Guest Lectures
              </button>
              <button
                onClick={() => { setActiveTab("activities"); setSelectedYear("all"); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === "activities"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Activities
              </button>
            </div>

            {/* Search and Year filters */}
            <div className="flex flex-wrap items-center gap-4 flex-1 md:justify-end">
              {/* Search bar */}
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm focus:outline-none focus:border-purple-500 text-slate-100 placeholder-slate-500 w-full sm:w-64 transition-colors"
              />

              {/* Year Select dropdown */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 rounded-xl bg-slate-950 border border-slate-800 text-sm focus:outline-none focus:border-purple-500 text-slate-100 cursor-pointer min-w-[120px]"
                >
                  {years.map(y => (
                    <option key={y} value={y}>
                      {y === "all" ? "All Years" : y}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500 text-xs">
                  ▼
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 bg-slate-900/20 border border-slate-900 rounded-3xl backdrop-blur-xl">
            <Info className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
            <p className="text-slate-400 text-sm">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, eventIdx) => (
              <motion.div
                key={`${event.title}-${event.year}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/30 border border-slate-900 hover:border-slate-800/80 backdrop-blur-xl transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/5"
              >
                
                {/* Event header with Year tag */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-purple-400 font-semibold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.year}
                    </span>
                    <span className="text-xs text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-900">
                      {event.images.length} Photos
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Event Image Layout (Creative Collage/Grid) */}
                <div className="px-6 pb-6 pt-2">
                  <div className="grid grid-cols-3 gap-2 h-44">
                    {event.images.slice(0, 3).map((img, imgIdx) => {
                      const isFirst = imgIdx === 0
                      const hasMore = event.images.length > 3 && imgIdx === 2
                      return (
                        <div 
                          key={imgIdx}
                          onClick={() => openLightbox(event, imgIdx)}
                          className={`relative rounded-xl overflow-hidden cursor-pointer bg-slate-950 border border-slate-900 group/img ${
                            isFirst ? "col-span-2 row-span-2 h-full" : "h-[84px]"
                          }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt || event.title}
                            fill
                            sizes="(max-width: 768px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Maximize2 className="w-5 h-5 text-white drop-shadow-lg" />
                          </div>
                          
                          {/* Heart Like button */}
                          <button 
                            onClick={(e) => toggleLike(img.src, e)}
                            className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 hover:bg-black/80"
                          >
                            <Heart className={`w-3.5 h-3.5 ${likedImages[img.src] ? "fill-rose-500 text-rose-500" : "text-white"}`} />
                          </button>

                          {hasMore && (
                            <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center text-xs font-bold text-purple-300">
                              +{event.images.length - 3} More
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Component */}
        <AnimatePresence>
          {lightboxOpen && lightboxImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between"
            >
              {/* Lightbox Header */}
              <div className="p-6 flex items-center justify-between text-white border-b border-white/5 relative z-10 bg-gradient-to-b from-black/50 to-transparent">
                <div>
                  <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Viewing Gallery</span>
                  <h4 className="text-sm sm:text-base font-bold truncate max-w-md sm:max-w-2xl">{lightboxImages[lightboxIndex]?.eventTitle}</h4>
                </div>
                <button 
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Slider View */}
              <div className="flex-1 flex items-center justify-between px-4 sm:px-8 relative">
                {/* Left navigation arrow */}
                <button
                  onClick={() => setLightboxIndex(prev => (prev === 0 ? lightboxImages.length - 1 : prev - 1))}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* The Slide Image */}
                <div className="relative w-full max-w-4xl h-[60vh] sm:h-[70vh] mx-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lightboxIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={lightboxImages[lightboxIndex].src}
                        alt={lightboxImages[lightboxIndex].alt}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right navigation arrow */}
                <button
                  onClick={() => setLightboxIndex(prev => (prev === lightboxImages.length - 1 ? 0 : prev + 1))}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer */}
              <div className="p-6 text-center border-t border-white/5 relative z-10 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-slate-400 text-xs sm:text-sm mb-4">
                  {lightboxImages[lightboxIndex].alt}
                </p>
                <div className="flex justify-center items-center gap-1.5 text-xs text-slate-500">
                  <span>Photo {lightboxIndex + 1} of {lightboxImages.length}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
