"use client"

import { useState, useMemo, use } from "react"
import { motion } from "framer-motion"
import { GalleryCard } from "./GalleryCard"
import { GuestLectureCard } from "./GuestLectureCard"
import { Lightbox } from "./Lightbox"
import { cn } from "@/lib/utils"
import type { GalleryImage, GalleryYear } from "@/types/gallery"

const galleryData: GalleryYear[] = [
  {
    year: "2025-26",
    label: "2025-26",
    events: [
      {
        name: "Independence Day Celebration",
        anchorId: "independence-day",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Flag hoisting ceremony", caption: "Flag hoisting ceremony" },
          { src: "/images/placeholder-gallery.jpg", alt: "Cultural performance", caption: "Students performing patriotic songs" },
          { src: "/images/placeholder-gallery.jpg", alt: "Chief guest address", caption: "Chief guest addressing the gathering" },
          { src: "/images/placeholder-gallery.jpg", alt: "Group photo", caption: "Staff and students group photo" },
        ],
        type: "activities",
      },
      {
        name: "Ganesh Chaturthi",
        anchorId: "ganesh-chaturthi",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Ganpati decoration", caption: "College Ganpati decoration" },
          { src: "/images/placeholder-gallery.jpg", alt: "Aarti ceremony", caption: "Evening aarti ceremony" },
          { src: "/images/placeholder-gallery.jpg", alt: "Prasad distribution", caption: "Prasad distribution to students" },
        ],
        type: "activities",
      },
      {
        name: "Guest Lecture on AI & ML",
        anchorId: "guest-lecture-ai",
        images: [
          { src: "/images/placeholder-guestlecture.jpg", alt: "Guest lecture session", caption: "Dr. Rajesh speaking on AI" },
          { src: "/images/placeholder-guestlecture.jpg", alt: "Students attending", caption: "Students attending the lecture" },
        ],
        type: "guest-lecture",
      },
      {
        name: "Science Exhibition 2025",
        anchorId: "science-exhibition",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Science projects display", caption: "Students presenting projects" },
          { src: "/images/placeholder-gallery.jpg", alt: "Winners announcement", caption: "Winners with certificates" },
        ],
        type: "activities",
      },
    ],
  },
  {
    year: "2024-25",
    label: "2024-25",
    events: [
      {
        name: "Annual Sports Day",
        anchorId: "sports-day",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Sports day opening", caption: "March past ceremony" },
          { src: "/images/placeholder-gallery.jpg", alt: "Race event", caption: "100m sprint final" },
          { src: "/images/placeholder-gallery.jpg", alt: "Prize distribution", caption: "Winners receiving medals" },
        ],
        type: "activities",
      },
      {
        name: "Guest Lecture on Career Guidance",
        anchorId: "career-guidance",
        images: [
          { src: "/images/placeholder-guestlecture.jpg", alt: "Career guidance session", caption: "Industry experts panel discussion" },
        ],
        type: "guest-lecture",
      },
      {
        name: "Cultural Fest",
        anchorId: "cultural-fest",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Dance performance", caption: "Students showcasing talents" },
          { src: "/images/placeholder-gallery.jpg", alt: "Music band", caption: "College band performance" },
        ],
        type: "activities",
      },
    ],
  },
  {
    year: "2023-24",
    label: "2023-24",
    events: [
      {
        name: "Freshers Party",
        anchorId: "freshers-party",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Freshers event", caption: "Welcome ceremony for new batch" },
          { src: "/images/placeholder-gallery.jpg", alt: "Cultural program", caption: "Freshers talent show" },
        ],
        type: "activities",
      },
      {
        name: "Guest Lecture on Banking Careers",
        anchorId: "banking-career",
        images: [
          { src: "/images/placeholder-guestlecture.jpg", alt: "Banking lecture", caption: "Session on banking career opportunities" },
        ],
        type: "guest-lecture",
      },
    ],
  },
  {
    year: "2022-23",
    label: "2022-23",
    events: [
      {
        name: "Republic Day Celebration",
        anchorId: "republic-day",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Republic day event", caption: "Flag hoisting and cultural events" },
        ],
        type: "activities",
      },
    ],
  },
  {
    year: "2021-22",
    label: "2021-22",
    events: [
      {
        name: "College Inauguration",
        anchorId: "inauguration",
        images: [
          { src: "/images/placeholder-gallery.jpg", alt: "Inauguration ceremony", caption: "College inaugural function" },
        ],
        type: "activities",
      },
    ],
  },
]

const guestLectureData = [
  {
    speaker: "Dr. Rajesh Kumar",
    topic: "Artificial Intelligence and Machine Learning: Career Opportunities",
    date: "January 15, 2026",
    description: "An insightful session on the future of AI and how students can build careers in this rapidly growing field. Dr. Kumar demonstrated real-world AI applications and shared learning resources.",
    image: "/images/placeholder-guestlecture.jpg",
    year: "2025-26",
  },
  {
    speaker: "Ms. Priya Sharma",
    topic: "Career Guidance and Higher Education Planning",
    date: "December 10, 2025",
    description: "Comprehensive guidance on choosing the right career path, higher education options in India and abroad, and preparing for competitive examinations.",
    year: "2025-26",
  },
  {
    speaker: "Mr. Amit Patel",
    topic: "Banking Sector Careers: From Clerk to PO",
    date: "November 5, 2025",
    description: "A detailed overview of career opportunities in the banking sector, preparation strategies for bank exams, and insights into the life of a banking professional.",
    image: "/images/placeholder-guestlecture.jpg",
    year: "2024-25",
  },
  {
    speaker: "Dr. Sneha Deshmukh",
    topic: "Environmental Sustainability and Climate Change",
    date: "October 20, 2025",
    description: "An eye-opening lecture on environmental challenges and the role of young citizens in building a sustainable future through scientific innovation.",
    year: "2024-25",
  },
  {
    speaker: "CA Anand Joshi",
    topic: "Financial Literacy and Investment Strategies",
    date: "September 15, 2025",
    description: "Practical insights into personal finance management, stock market basics, mutual funds, and building long-term wealth through disciplined investing.",
    image: "/images/placeholder-guestlecture.jpg",
    year: "2023-24",
  },
  {
    speaker: "Prof. Vikram Singh",
    topic: "Preparation Strategies for Competitive Exams",
    date: "August 25, 2025",
    description: "Effective strategies for cracking MHT-CET, JEE, NEET, and other competitive exams including time management, study planning, and stress management techniques.",
    year: "2023-24",
  },
]

interface GalleryGridProps {
  type: "activities" | "guest-lectures"
  params: Promise<{ year: string }>
}

export function GalleryGrid({ type, params }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([])
  const [activeTab, setActiveTab] = useState<string>("All")

  const { year } = use(params)

  const currentYearData = galleryData.find((g) => g.year === year)
  const yearEvents = currentYearData?.events ?? []
  const yearGuestLectures = guestLectureData.filter((gl) => gl.year === year)

  const eventNames = useMemo(() => {
    const names = new Set(yearEvents.map((e) => e.name))
    if (type === "guest-lectures") guestLectureData.filter((gl) => gl.year === year).forEach((gl) => names.add(gl.topic))
    return ["All", ...Array.from(names)]
  }, [yearEvents, type, year])

  const filteredEvents = useMemo(() => {
    if (activeTab === "All") return yearEvents
    return yearEvents.filter((e) => e.name === activeTab)
  }, [activeTab, yearEvents])

  const filteredLectures = useMemo(() => {
    if (activeTab === "All") return yearGuestLectures
    return yearGuestLectures.filter((gl) => gl.topic === activeTab)
  }, [activeTab, yearGuestLectures])

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const allImages = useMemo(() => yearEvents.flatMap((e) => e.images), [yearEvents])

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            {type === "activities" ? "Gallery" : "Guest Lectures"}
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {type === "activities"
              ? "Moments captured from events and activities at S. B. Patil College"
              : "Knowledge sessions by industry experts and academicians"}
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {eventNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeTab === name
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground shadow-soft hover:text-primary",
              )}
              aria-pressed={activeTab === name}
            >
              {name}
            </button>
          ))}
        </div>

        {type === "activities" && (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredEvents.length > 0
              ? filteredEvents.flatMap((event) =>
                  event.images.map((img, i) => (
                    <div key={`${event.anchorId}-${i}`} className="mb-4 break-inside-avoid">
                      <GalleryCard
                        image={img}
                        index={i}
                        onOpen={(idx) => openLightbox(event.images, idx)}
                      />
                    </div>
                  )),
                )
              : allImages.map((img, i) => (
                  <div key={`all-${i}`} className="mb-4 break-inside-avoid">
                    <GalleryCard
                      image={img}
                      index={i}
                      onOpen={(idx) => openLightbox(allImages, idx)}
                    />
                  </div>
                ))}
          </div>
        )}

        {type === "guest-lectures" && (
          <div className="space-y-4">
            {(filteredLectures.length > 0 ? filteredLectures : yearGuestLectures).map((lecture, i) => (
              <GuestLectureCard key={i} {...lecture} index={i} />
            ))}
          </div>
        )}

        {lightboxOpen && (
          <Lightbox
            images={lightboxImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={(idx) => setLightboxIndex(idx)}
          />
        )}
      </div>
    </section>
  )
}


