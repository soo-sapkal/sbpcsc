"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Phone, Mail, MapPin, BadgeCheck } from "lucide-react"
import { Section } from "@/components/sections/Section"
import { Card } from "@/components/ui/card"

interface StaffMember {
  name: string
  designation: string
  department: string
  qualification: string
  experience: string
  email: string
  phone: string
  photo: string
}

const staffMembers: StaffMember[] = [
  {
    name: "Dr. Rajendra K. Sharma",
    designation: "Principal",
    department: "Administration",
    qualification: "M.Sc., Ph.D., NET",
    experience: "25+ Years",
    email: "principal@sbpatilcollege.com",
    phone: "9665333344",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Prof. Sanjay V. Patil",
    designation: "Vice Principal",
    department: "Administration",
    qualification: "M.Sc., M.Ed.",
    experience: "20+ Years",
    email: "sanjay.patil@sbpatilcollege.com",
    phone: "9767199039",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Dr. Anita S. Kulkarni",
    designation: "Head of Department - Science",
    department: "Science",
    qualification: "M.Sc., Ph.D.",
    experience: "18+ Years",
    email: "anita.kulkarni@sbpatilcollege.com",
    phone: "9876543210",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Prof. Ramesh K. Joshi",
    designation: "Head of Department - Commerce",
    department: "Commerce",
    qualification: "M.Com., NET, MBA",
    experience: "15+ Years",
    email: "ramesh.joshi@sbpatilcollege.com",
    phone: "9876543211",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Shri. Prakash G. More",
    designation: "Administrative Officer",
    department: "Administration",
    qualification: "M.A., DBM",
    experience: "22+ Years",
    email: "prakash.more@sbpatilcollege.com",
    phone: "9876543212",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Shri. Dattatray S. Pawar",
    designation: "Librarian",
    department: "Library",
    qualification: "M.Lib., NET",
    experience: "12+ Years",
    email: "library@sbpatilcollege.com",
    phone: "9876543213",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Shri. Sunil D. Deshmukh",
    designation: "Accountant",
    department: "Finance",
    qualification: "M.Com., MBA",
    experience: "10+ Years",
    email: "accounts@sbpatilcollege.com",
    phone: "9876543214",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Smt. Meena S. Joshi",
    designation: "Office Superintendent",
    department: "Administration",
    qualification: "B.A., DBM",
    experience: "16+ Years",
    email: "office@sbpatilcollege.com",
    phone: "9876543215",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Shri. Vijay K. Patil",
    designation: "Physical Education Director",
    department: "Sports",
    qualification: "M.P.Ed., NET",
    experience: "14+ Years",
    email: "sports@sbpatilcollege.com",
    phone: "9876543216",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Dr. Priya M. Deshmukh",
    designation: "Senior Faculty - Physics",
    department: "Science",
    qualification: "M.Sc., Ph.D.",
    experience: "12+ Years",
    email: "priya.deshmukh@sbpatilcollege.com",
    phone: "9876543217",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Prof. Amit S. Sharma",
    designation: "Senior Faculty - Chemistry",
    department: "Science",
    qualification: "M.Sc., SET",
    experience: "10+ Years",
    email: "amit.sharma@sbpatilcollege.com",
    phone: "9876543218",
    photo: "/placeholder-principal.jpg",
  },
  {
    name: "Prof. Neha S. Pawar",
    designation: "Senior Faculty - Commerce",
    department: "Commerce",
    qualification: "M.Com., NET",
    experience: "8+ Years",
    email: "neha.pawar@sbpatilcollege.com",
    phone: "9876543219",
    photo: "/placeholder-principal.jpg",
  },
]

export function AdminStaffList() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[250px] items-center md:min-h-[300px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Administration
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                Meet the dedicated team of administrators and staff who ensure the smooth functioning of our college.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staffMembers.map((staff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Card hover className="group overflow-hidden">
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={staff.photo}
                      alt={staff.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <a
                        href={`tel:${staff.phone}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary transition-colors hover:bg-white"
                        aria-label={`Call ${staff.name}`}
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${staff.email}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary transition-colors hover:bg-white"
                        aria-label={`Email ${staff.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading font-bold">{staff.name}</h3>
                      <p className="text-sm text-primary">{staff.designation}</p>
                    </div>
                    <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{staff.department}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Qualification:</span> {staff.qualification}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Experience:</span> {staff.experience}
                    </p>
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
