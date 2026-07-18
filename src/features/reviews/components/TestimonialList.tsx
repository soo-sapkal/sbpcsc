"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { TestimonialCard } from "./TestimonialCard"
import { TestimonialHighlight } from "./TestimonialHighlight"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types/testimonial"

const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Anisha Mahesh Kale",
    stream: "science",
    batch: "2024-25",
    rank: "MHT-CET Topper",
    content: "I am grateful to S.B. Patil Junior College for playing a significant role in my academic journey and success in MHT-CET. The college provides an excellent learning environment with highly supportive and experienced teachers who are always ready to guide students. The faculty members explain concepts clearly, conduct regular tests, and provide valuable feedback that helps students improve continuously.",
  },
  {
    id: "t-2",
    name: "Anushka Somnath Pol",
    stream: "science",
    batch: "2024-25",
    rank: "HSC Topper",
    content: "My experience at S.B. Patil Junior College has been extremely positive and enriching. The college has always focused on academic excellence while ensuring that students receive the right guidance and support. The faculty members are knowledgeable, approachable, and dedicated to helping students achieve their goals.",
  },
  {
    id: "t-3",
    name: "Pranjal Vijaykumar Thorat",
    stream: "science",
    batch: "2024-25",
    rank: "HSC 3rd Rank",
    content: "I've been studying at S.B. Patil Junior College for my 12th and overall it's been a good experience for academics and discipline. The teachers are experienced. They focus on clearing concepts rather than just rushing through the syllabus, which really helps for board exams and CET prep. Regular tests, exams and prelims keep you on track.",
  },
  {
    id: "t-4",
    name: "Rohit Sharma",
    stream: "commerce",
    batch: "2024-25",
    rank: "Commerce Topper",
    content: "The Commerce department at S.B. Patil College is outstanding. The teachers have extensive industry knowledge and they connect classroom learning with real-world business scenarios. The regular workshops on financial literacy, stock market, and entrepreneurship have been incredibly valuable for my career aspirations.",
  },
  {
    id: "t-5",
    name: "Priya Patil",
    stream: "science",
    batch: "2025-26",
    rank: "Sports Scholar",
    content: "S.B. Patil College has given me the perfect platform to balance academics and sports. The college encourages sports participation and the faculty has always been accommodating with my practice schedules. I am proud to have represented the college and won medals in athletics.",
  },
  {
    id: "t-6",
    name: "Neha Gupta",
    stream: "commerce",
    batch: "2025-26",
    content: "The college environment is very conducive to learning. The library is well-stocked with books and digital resources, the classrooms are comfortable, and the campus is well-maintained. I particularly appreciate the career counseling sessions that helped me chart my future path in the commerce field.",
  },
  {
    id: "t-7",
    name: "Sneha Joshi",
    stream: "science",
    batch: "2025-26",
    rank: "Science Exhibition Winner",
    content: "The science curriculum at S.B. Patil College is comprehensive and practical. The well-equipped laboratories allow us to perform experiments hands-on, which deepens our understanding of theoretical concepts. The science exhibition was a great platform to showcase our innovative projects.",
  },
  {
    id: "t-8",
    name: "Rahul More",
    stream: "commerce",
    batch: "2024-25",
    content: "I joined S.B. Patil College for my 11th and 12th Commerce and it was one of the best decisions I made. The faculty's dedication, the comprehensive curriculum, and the focus on overall personality development have prepared me well for my future endeavors in business and management.",
  },
]

export function TestimonialList() {
  const [activeStream, setActiveStream] = useState<string>("All")

  const filtered = useMemo(
    () => testimonials.filter((t) => activeStream === "All" || t.stream === activeStream),
    [activeStream],
  )

  const highlightTestimonial = filtered.find((t) => t.rank === "MHT-CET Topper") || filtered[0]
  const remaining = filtered.filter((t) => t.id !== highlightTestimonial.id)

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Student Testimonials</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from our students about their experiences at S. B. Patil College of Science and Commerce
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveStream("All")}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              activeStream === "All"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground shadow-soft hover:text-primary",
            )}
          >
            All Streams
          </button>
          <button
            onClick={() => setActiveStream("science")}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              activeStream === "science"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground shadow-soft hover:text-primary",
            )}
          >
            Science
          </button>
          <button
            onClick={() => setActiveStream("commerce")}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              activeStream === "commerce"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground shadow-soft hover:text-primary",
            )}
          >
            Commerce
          </button>
        </div>

        {highlightTestimonial && (
          <div className="mb-10">
            <TestimonialHighlight testimonial={highlightTestimonial} />
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remaining.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-white shadow-soft">
            <p className="text-muted-foreground">No testimonials found for the selected stream.</p>
          </div>
        )}
      </div>
    </section>
  )
}
