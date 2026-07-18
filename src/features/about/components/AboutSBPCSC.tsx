"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, BookOpen, Target, Users, Award, TrendingUp, Library, FlaskConical, Trophy, Shield, GraduationCap, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site-config"
import { Section } from "@/components/sections/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useState, useRef } from "react"

function AnimatedCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const duration = 2000
          const step = Math.ceil(value / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
          observer.disconnect()
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-3xl font-bold text-primary md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

const highlights = [
  { icon: Award, title: "Top Results", description: "Consistently excellent HSC board results with distinction" },
  { icon: Users, title: "Expert Faculty", description: "Highly qualified and experienced teaching staff" },
  { icon: Library, title: "Rich Library", description: "Well-stocked library with 5000+ books and journals" },
  { icon: FlaskConical, title: "Modern Labs", description: "State-of-the-art science and computer laboratories" },
  { icon: Trophy, title: "Co-Curricular Excellence", description: "Awards in sports, cultural and academic competitions" },
  { icon: Shield, title: "Safe Campus", description: "Secure campus with 24/7 CCTV surveillance" },
]

const whyChoose = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Proven track record of outstanding HSC results with students securing top university ranks.",
  },
  {
    icon: Users,
    title: "Individual Attention",
    description: "Small class sizes ensuring personalized mentoring and academic support for every student.",
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description: "Dedicated career counseling cell for competitive exam preparation and career planning.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    description: "Balanced focus on academics, sports, cultural activities, and personality development.",
  },
]

export function AboutSBPCSC() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gradient-hero relative flex min-h-[300px] items-center md:min-h-[400px]">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-center opacity-10" />
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-light">
                {siteConfig.tagline}
              </p>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                {siteConfig.shortName}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
                {siteConfig.name} — A progressive, student-centered, co-educational college committed to quality education.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </div>
      </section>

      <Section variant="primary" title="At a Glance">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <AnimatedCounter value={34} suffix="+" label="Years of Excellence" />
          <AnimatedCounter value={5000} suffix="+" label="Students Educated" />
          <AnimatedCounter value={100} suffix="%" label="Qualified Faculty" />
          <AnimatedCounter value={98} suffix="%" label="Pass Percentage" />
        </div>
      </Section>

      <Section title="About the College">
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
                  src="/images/sbpcsc-logo.png"
                  alt={siteConfig.shortName}
                  width={600}
                  height={400}
                  className="h-full w-full object-contain p-8"
                />
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
              <strong className="text-foreground">{siteConfig.name}</strong> (SBPCSC) is a progressive, student-centered,
              co-educational private college, committed to providing quality education to all its students. It is listed as
              one of the best junior colleges in Ravet, Pune. The college is run by the Pimpri Chinchwad Education Trust
              (PCET), a time-tested brand in education since 1990.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Affiliated to the Maharashtra State Board of Secondary and Higher Secondary Education, Pune, SBPCSC offers
              11th and 12th standard education in Science and Commerce streams, with a focus on academic excellence,
              holistic development, and career readiness.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm">
                <span className="font-semibold text-primary">Index No:</span> {siteConfig.indexNo}
              </div>
              <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm">
                <span className="font-semibold text-primary">UDISE No:</span> {siteConfig.udiseNo}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section variant="muted" title="Vision & Mission">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card glass className="h-full p-6">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-heading text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                To be a premier junior college that nurtures academically excellent, socially responsible, and ethically
                strong individuals who contribute meaningfully to society and the nation.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card glass className="h-full p-6">
              <BookOpen className="h-10 w-10 text-accent" />
              <h3 className="mt-4 font-heading text-xl font-bold">Our Mission</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Provide quality education in Science and Commerce streams",
                  "Foster critical thinking, creativity, and problem-solving skills",
                  "Prepare students for higher education and professional careers",
                  "Create a supportive and inclusive learning environment",
                  "Promote cultural values, sportsmanship, and community service",
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

      <Section title="Key Highlights" subtitle="What makes SBPCSC a preferred choice for students">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card hover className="p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <h.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-heading font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Why Choose SBPCSC?">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card hover className="flex gap-5 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="College History">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Established under the aegis of Pimpri Chinchwad Education Trust (PCET), <strong>{siteConfig.name}</strong>{" "}
              was founded with the mission of providing affordable, quality higher secondary education to students in the
              Ravet and Pimpri-Chinchwad region. Since its inception, the college has grown steadily, earning a reputation
              for academic excellence, discipline, and holistic student development.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The college boasts modern infrastructure, well-equipped laboratories, a comprehensive library, and dedicated
              sports facilities. With a team of highly qualified and experienced faculty members, SBPCSC has consistently
              produced excellent HSC board results, with many students securing admissions to prestigious universities and
              professional courses across the country.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Beyond academics, the college encourages students to participate in a wide range of co-curricular and
              extracurricular activities, including sports, cultural events, debates, and community service programs,
              ensuring the overall personality development of every student.
            </p>
          </Card>
        </motion.div>
      </Section>
    </>
  )
}
