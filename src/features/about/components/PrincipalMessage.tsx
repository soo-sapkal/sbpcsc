"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, GraduationCap, BookOpen, Target, Users, Award, Star, Phone, Mail } from "lucide-react"
import { siteConfig } from "@/data/site-config"
import { Section } from "@/components/sections/Section"
import { Card } from "@/components/ui/card"

export function PrincipalMessage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[300px] items-center md:min-h-[400px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-light">From the Desk of</p>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                Principal&apos;s Desk
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
                A message from our respected Principal
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative mx-auto w-64 overflow-hidden rounded-2xl shadow-strong lg:mx-0">
                <Image
                  src="/placeholder-principal.jpg"
                  alt="Principal - S. B. Patil College"
                  width={300}
                  height={400}
                  className="h-80 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-heading text-lg font-bold text-white">Dr. Rajendra K. Sharma</h3>
                  <p className="text-sm text-white/80">Principal</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Qualification</p>
                    <p className="text-sm font-medium">M.Sc., Ph.D., NET</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="text-sm font-medium">25+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Contact</p>
                    <p className="text-sm font-medium">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">{siteConfig.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="relative overflow-hidden p-8">
              <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/10" />
              <div className="relative z-10">
                <p className="font-heading text-2xl font-bold text-foreground">Dear Students, Parents, and Well-wishers,</p>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    It is with great pride and a deep sense of responsibility that I welcome you to{" "}
                    <strong>{siteConfig.name}</strong>. As the Principal of this esteemed institution, I am privileged to
                    lead a team of dedicated educators and staff who are committed to nurturing the next generation of
                    leaders, thinkers, and innovators.
                  </p>
                  <p>
                    At {siteConfig.shortName}, we believe that education is not merely about acquiring knowledge but about
                    shaping character, building values, and developing the skills necessary to navigate an ever-changing
                    world. Our mission is to provide a holistic learning environment that fosters academic excellence,
                    critical thinking, creativity, and social responsibility.
                  </p>
                  <p>
                    Our college offers a comprehensive curriculum in Science and Commerce streams, delivered through
                    innovative teaching methodologies by our highly qualified faculty. We have state-of-the-art
                    laboratories, a well-stocked library, modern classrooms, and excellent sports facilities that provide
                    students with every opportunity to explore their potential.
                  </p>
                  <p>
                    Beyond the classroom, we encourage students to participate in a wide range of co-curricular and
                    extracurricular activities — debates, sports, cultural events, community service, and more. These
                    experiences are essential in developing well-rounded individuals who are ready to contribute
                    meaningfully to society.
                  </p>
                  <p>
                    I firmly believe that every student has unique talents and capabilities. Our dedicated team works
                    tirelessly to identify and nurture these talents, providing personalized guidance and mentorship to
                    help each student achieve their goals. We maintain an open-door policy and encourage students and
                    parents to share their concerns and suggestions.
                  </p>
                  <p>
                    As we move forward, we are committed to continuous improvement and innovation in education. We are
                    integrating technology into our teaching-learning processes, strengthening our industry partnerships,
                    and expanding our career guidance and counseling services to ensure that our students are well-prepared
                    for the challenges of the future.
                  </p>
                  <p>
                    I extend a warm invitation to all prospective students and parents to visit our campus and experience
                    the vibrant learning environment that sets {siteConfig.shortName} apart. Together, let us embark on a
                    journey of discovery, growth, and excellence.
                  </p>
                </div>

                <div className="mt-8 border-t pt-6">
                  <p className="font-heading text-lg font-bold text-foreground">Dr. Rajendra K. Sharma</p>
                  <p className="text-sm text-muted-foreground">Principal, {siteConfig.name}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section variant="muted" title="Vision for the College">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Academic Excellence",
              description: "Achieve 100% result with quality grade in HSC board examinations through innovative teaching and continuous assessment.",
            },
            {
              icon: Users,
              title: "Holistic Development",
              description: "Create a vibrant campus culture that nurtures leadership, teamwork, and social responsibility among students.",
            },
            {
              icon: Award,
              title: "Industry Readiness",
              description: "Prepare students for competitive exams and professional careers through focused guidance and skill development programs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-heading font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
