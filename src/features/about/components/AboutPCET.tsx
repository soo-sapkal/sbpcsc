"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, GraduationCap, BookOpen, Target, Star, Users, Building2, ArrowRight } from "lucide-react"
import { EXTERNAL_LINKS } from "@/data/constants"
import { Section } from "@/components/sections/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const institutions = [
  { name: "S. B. Patil Public School", location: "Ravet, Pune", grade: "CBSE (K.G. to X)" },
  { name: "S. B. Patil College of Science & Commerce", location: "Ravet, Pune", grade: "11th & 12th (Science & Commerce)" },
  { name: "S. B. Patil Institute of Management", location: "Ravet, Pune", grade: "MBA" },
  { name: "S. B. Patil Institute of Engineering", location: "Ravet, Pune", grade: "Engineering" },
  { name: "S. B. Patil Polytechnic", location: "Ravet, Pune", grade: "Polytechnic" },
  { name: "S. B. Patil College of Architecture", location: "Ravet, Pune", grade: "B.Arch" },
  { name: "S. B. Patil College of Nursing", location: "Ravet, Pune", grade: "B.Sc Nursing" },
  { name: "S. B. Patil D.Ed College", location: "Ravet, Pune", grade: "D.Ed" },
]

const milestones = [
  { year: "1990", event: "PCET Trust established by visionary founders" },
  { year: "1992", event: "First institution - S. B. Patil Public School started" },
  { year: "2000", event: "Expansion into higher education with junior college" },
  { year: "2005", event: "Engineering and Management institutes established" },
  { year: "2010", event: "Architecture and Nursing programs launched" },
  { year: "2020", event: "Digital transformation and ERP implementation" },
  { year: "2024", event: "Continuing legacy of excellence - 34+ years of education" },
]

const philosophyPoints = [
  "Holistic development through balanced academic and extracurricular programs",
  "Value-based education rooted in Indian culture and tradition",
  "Innovation and adaptability to modern educational methodologies",
  "Inclusive education accessible to all sections of society",
  "Industry-academia partnership for practical exposure",
  "Continuous faculty development and research orientation",
]

export function AboutPCET() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[300px] items-center md:min-h-[400px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-light">
                Pimpri Chinchwad Education Trust
              </p>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                About PCET
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
                A time-tested brand in education since 1990, nurturing minds from K.G. to P.G.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section variant="muted" title="Our Legacy" subtitle="Three decades of shaping futures through quality education">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: GraduationCap, label: "Institutions", value: "8+" },
            { icon: Users, label: "Students Annually", value: "5000+" },
            { icon: Star, label: "Years of Excellence", value: "34+" },
            { icon: Building2, label: "Campuses", value: "Multi-campus" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <stat.icon className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-3 font-heading text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Our Story" variant="default">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/pcet-trust-logo.jpg"
                  alt="PCET Trust"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-primary p-4 text-white shadow-strong">
                <p className="font-heading text-2xl font-bold">1990</p>
                <p className="text-sm text-white/80">Established</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pimpri Chinchwad Education Trust (PCET) was established in 1990 by visionary founders{" "}
              <strong>Late Shri. Shankarrao B. Patil</strong>, <strong>Late Smt. Lilatai Shankarrao Patil</strong>,{" "}
              <strong>Shri. Dnyaneswar P. Landage</strong>, <strong>Shri. Vitthal S. Kalbhor</strong>,{" "}
              <strong>Shri. Shantaram D. Garade</strong>, and <strong>Late Shri. Bhaijan Kazi</strong> with the noble
              mission of providing quality education from K.G. to P.G.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Over three decades, PCET has grown into a premier educational institution in the Pimpri Chinchwad region,
              known for academic excellence, discipline, and holistic development of students.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section variant="muted" title="Vision & Mission">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card glass className="h-full p-6">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-heading text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                To be a premier educational institution that nurtures globally competent professionals with strong ethical
                values, fostering innovation, research, and societal development through quality education.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card glass className="h-full p-6">
              <BookOpen className="h-10 w-10 text-accent" />
              <h3 className="mt-4 font-heading text-xl font-bold">Our Mission</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Provide affordable and accessible quality education to all",
                  "Develop intellectual, social, and cultural capabilities of students",
                  "Create a conducive environment for research and innovation",
                  "Inculcate values of integrity, discipline, and social responsibility",
                  "Bridge the gap between academia and industry",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section title="Educational Philosophy">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {philosophyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "flex items-start gap-4 rounded-xl border p-5 transition-all duration-300 hover:shadow-card-hover",
              )}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <p className="text-muted-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Our Journey" subtitle="Key milestones in PCET's growth">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-0.5" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "relative flex items-center gap-4 pl-10 md:gap-8 md:pl-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                <div className={cn("flex-1", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <div className={cn(
                    "rounded-xl border bg-card p-4 shadow-soft transition-all duration-300 hover:shadow-medium",
                    i % 2 === 0 ? "md:mr-8" : "md:ml-8",
                  )}>
                    <span className="font-heading text-sm font-bold text-primary">{m.year}</span>
                    <p className="mt-1 text-muted-foreground">{m.event}</p>
                  </div>
                </div>
                <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background md:static md:left-auto">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="flex-1 max-md:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Institutions Under PCET">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {institutions.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card hover className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold">{inst.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{inst.location}</p>
                    <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {inst.grade}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="muted" className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-heading text-2xl font-bold md:text-3xl">Learn More About PCET</h2>
          <p className="mt-3 text-muted-foreground">
            Visit the official PCET website for more information about the trust and its institutions.
          </p>
          <Link
            href={EXTERNAL_LINKS.PCET}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary-dark"
          >
            Visit PCET Website
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
