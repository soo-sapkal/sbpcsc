"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Library, FlaskConical, Monitor, Dumbbell, BookOpen, Wifi, Bus, Building2, UtensilsCrossed, BedDouble, Microscope, Shield } from "lucide-react"
import { Section } from "@/components/sections/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Facility {
  title: string
  description: string
  icon: typeof Library
  features: string[]
  image: string
}

const facilities: Facility[] = [
  {
    title: "Library & Reading Hall",
    description: "A well-stocked library with over 5,000 books, national and international journals, and a spacious reading hall.",
    icon: Library,
    features: ["5,000+ Books", "National Journals", "Digital Library", "Reading Hall"],
    image: "/images/infrastructure/library.jpg",
  },
  {
    title: "Science Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology laboratories with modern apparatus and safety equipment.",
    icon: FlaskConical,
    features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Safety Equipment"],
    image: "/images/infrastructure/lab.jpg",
  },
  {
    title: "Computer Lab",
    description: "State-of-the-art computer laboratory with high-speed internet and the latest software for IT and CS students.",
    icon: Monitor,
    features: ["50+ Systems", "High-Speed Internet", "Latest Software", "UPS Backup"],
    image: "/images/infrastructure/computer-lab.jpg",
  },
  {
    title: "Smart Classrooms",
    description: "Modern classrooms equipped with smart boards, projectors, and audio-visual aids for interactive learning.",
    icon: Building2,
    features: ["Smart Boards", "Projectors", "AC Classrooms", "Comfortable Seating"],
    image: "/images/infrastructure/classroom.jpg",
  },
  {
    title: "Sports Facilities",
    description: "Extensive indoor and outdoor sports facilities including playground, gymnasium, and courts for various sports.",
    icon: Dumbbell,
    features: ["Playground", "Indoor Games", "Gymnasium", "Cricket Nets"],
    image: "/images/infrastructure/sports.jpg",
  },
  {
    title: "Auditorium",
    description: "A modern, air-conditioned auditorium with a seating capacity of 300 for seminars, events, and cultural programs.",
    icon: BookOpen,
    features: ["Seating 300+", "Stage & Sound", "Projection System", "Green Room"],
    image: "/images/infrastructure/auditorium.jpg",
  },
  {
    title: "Cafeteria",
    description: "A hygienic, spacious cafeteria serving nutritious and affordable meals and snacks to students and staff.",
    icon: UtensilsCrossed,
    features: ["Hygienic Food", "Affordable Rates", "Seating Area", "Pure Drinking Water"],
    image: "/images/infrastructure/cafeteria.jpg",
  },
  {
    title: "Hostel Facilities",
    description: "Separate hostels for boys and girls with all modern amenities within a secure campus environment.",
    icon: BedDouble,
    features: ["Boys Hostel", "Girls Hostel", "24/7 Security", "Mess Facility"],
    image: "/images/infrastructure/hostel.jpg",
  },
  {
    title: "Transport",
    description: "College bus service covering major routes in Pimpri-Chinchwad and surrounding areas for student convenience.",
    icon: Bus,
    features: ["Multiple Routes", "GPS Tracked", "Safe & Reliable", "Experienced Drivers"],
    image: "/images/infrastructure/transport.jpg",
  },
]

export function InfrastructureShowcase() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[250px] items-center md:min-h-[300px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Infrastructure & Facilities
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                Our campus provides state-of-the-art facilities to create an enriching learning environment.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section variant="muted" title="Campus Highlights">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {[
            { icon: Building2, label: "5+ Acres Campus" },
            { icon: Microscope, label: "3 Science Labs" },
            { icon: Monitor, label: "Computer Lab" },
            { icon: Library, label: "Rich Library" },
            { icon: Wifi, label: "Wi-Fi Campus" },
            { icon: Shield, label: "24/7 Security" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass flex flex-col items-center rounded-xl p-4 text-center"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <p className="mt-2 text-xs font-medium md:text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card hover className="group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90">
                        <facility.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-white">{facility.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {facility.features.map((f, fi) => (
                      <span
                        key={fi}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
