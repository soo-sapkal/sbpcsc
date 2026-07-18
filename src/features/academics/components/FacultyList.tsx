"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, GraduationCap, Award, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { FacultyMember } from "@/types/faculty"

interface FacultyListProps {
  faculty: FacultyMember[]
  stream: string
  subjectName: string
}

export function FacultyList({ faculty, stream, subjectName }: FacultyListProps) {
  if (faculty.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-12 text-center">
        <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <h3 className="mt-4 font-heading font-bold">Faculty Details Coming Soon</h3>
        <p className="mt-2 text-muted-foreground">
          Faculty information for {subjectName} will be updated shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {faculty.map((member, i) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <Card hover className="group overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-white hover:text-primary-light"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold">{member.name}</h3>
              <p className="text-sm text-primary">{member.subject}</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 shrink-0" />
                  <span>{member.qualification}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5 shrink-0" />
                  <span>Experience: {member.experience}</span>
                </div>
                {member.specialization && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5 shrink-0" />
                    <span>{member.specialization}</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
