"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeroCarousel } from "@/features/home/components/HeroCarousel"
import { commerceSliderImages } from "@/features/home/data/commerce-slider-images"

const iconBoxes = [
  { label: "Hostel", icon: "/images/icons/hostel_icon.webp", href: "/about/infrastructure" },
  { label: "Library", icon: "/images/icons/library_icon.webp", href: "/about/infrastructure" },
  { label: "Email", icon: "/images/icons/email_icon.webp", href: "mailto:sbpc.science@gmail.com" },
  { label: "Call", icon: "/images/icons/call_icon.webp", href: "tel:+91-7424080910" },
  { label: "Class Room", icon: "/images/icons/classroom_icon.webp", href: "/about/infrastructure" },
  { label: "Reading Hall", icon: "/images/icons/reading_hall_icon.webp", href: "/about/infrastructure" },
]

const testimonials = [
  {
    name: "Prasad Anil Fegade",
    stream: "Commerce Stream",
    text: `Hello all,
Myself Prasad Anil Fegade, I have passed my 11th and 12th in Commerce stream from S.B. Patil College of Science and Commerce, Ravet College. I am glad to share my experience of past 2 years with the college.
S.B. Patil college of Science and Commerce is a very good college with very humble and excellent facilities. I had a very good experience in this college as the teachers here are very supportive in nature and they put a lot of effort so that we can clearly understand every concept.
Our principal, Mr. Sandip Patil sir, is also very supportive, and he always motivated and encouraged us throughout the years to give our best. I am very thankful to every faculty as they made these 2 years my best experience in this college.`,
  },
  {
    name: "Amruta Prashant Nehete",
    stream: "Commerce Stream",
    text: `Hello all,
It is with great pride & privilege that I write this feedback as a student who had recently completed 12th grade at S.B. Patil College. As the topper of my batch, I feel honored to share my experience from the outstanding academic journey. I recognize how college had been offering me a strong foundation in my subjects. It not only benefit me for my 12th exams but also for preparing for my next phase of education.
One of the standout aspects of my experience was dedication & support from faculty, my all the teachers. They were a mentor & were always available to clear my doubts. My experience was overwhelmingly positive, I believe there is always room for growth. The teachers arranged some mentor sessions before the exams which help us in clearing our doubts & provided a valuable time management in our exams. It was an enriching & rewarding experience. The combination of excellent teaching & supportive faculty & opportunity for extracurricular involvement made my academic more memorable. I am proud to be the part of this institution & will be always grateful for the valuable experience it provided me.`,
  },
  {
    name: "Niharika Bora",
    stream: "Commerce Stream",
    text: `Hello all,
As a student of SB Patil Junior college for almost 2 years, I had a truly positive and wonderful experience. The faculty members were always supportive and guided us through both academics and personal growth. The college, along with the teachers, took initiatives and always encouraged participation in various events, which helped me build confidence and skills. I'm grateful for the learning environment and opportunities I received here.`,
  },
]

export default function CommerceLandingPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById("enquiryModal")
      if (el) {
        ;(el as HTMLDialogElement).showModal()
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <HeroCarousel images={commerceSliderImages} />

      {/* Overview / About PCET / News */}
      <section className="section1 bg-white py-10">
        <div className="mx-auto max-w-8xl px-4">
          <div className="flex flex-wrap">
            <div className="mb-8 w-full px-3 md:w-1/3">
              <h1 className="mb-4 text-2xl font-bold text-[#333]">Overview</h1>
              <p className="text-justify">
                <strong>
                  <a href="http://www.sbpatilcollege.com/" target="_blank" className="text-[#337ab7] hover:underline">
                    S.B. Patil College of Science and Commerce
                  </a>
                </strong>{" "}
                (SBPCSC) is a progressive, student-centered, co-educational private college, committed to providing
                quality education to all its students. It is also listed as one of the best junior colleges in Ravet,
                Pune. It is run by a lively caring organization called Pimpri Chinchwad Education Trust (PCET), a
                time-tested brand in education since 1990.
              </p>
              <Link href="/about/sbpcsc" className="font-bold text-[#337ab7] hover:underline">
                Read More
              </Link>
            </div>

            <div className="mb-8 w-full px-3 md:w-1/3">
              <h2 className="mb-4 text-xl font-bold text-[#333]">About PCET</h2>
              <p className="text-justify">
                <strong>
                  <a href="https://www.pcet.org.in/" target="_blank" className="text-[#337ab7] hover:underline">
                    Pimpri Chinchwad Education Trust (PCET)
                  </a>
                </strong>{" "}
                was established in 1990 by visionary Late. Shri. Shankarrao B. Patil, Late. Smt. Lilatai Shankarrao
                Patil, Shri. Dnyaneswar P. Landage, Shri. Vitthal S. Kalbhor, Shri. Shantaram D. Garade, Late. Shri.
                Bhaijan Kazi with an idea of providing quality education from K.G. to P.G. Its sole mission was aimed at
                serving society, the industry and all stakeholders through value-inculcating,
              </p>
              <a href="http://pcet.org.in/" target="_blank" className="font-bold text-[#337ab7] hover:underline">
                Read More
              </a>
            </div>

            <div className="mb-8 w-full px-3 md:w-1/3">
              <h2 className="mb-4 text-xl font-bold text-[#333]">SBPCSC NEWS</h2>
              <div className="max-h-64 overflow-hidden">
                <div className="animate-scroll-up">
                  <ul className="list-none space-y-3 p-0">
                    {[
                      { label: "BRAINWAVES 2025", href: "/activities#BRAINWAVES2025" },
                      { label: "Navarasa Utsav 2025", href: "/activities#NavarasaUtsav2025" },
                      { label: "Visit to Tolani Maritime Institute", href: "/activities#TMI" },
                      { label: "Time Table HSC Board March 2026", href: "/pdf/timetable-hsc-board-march-2026.pdf" },
                      { label: "11th CAP Website", href: "https://pune.11thadmission.org.in/Public/Home.aspx" },
                      { label: "Career in Biology", href: "/pdf/careers-in-biology.pdf" },
                      { label: "11th Online Admission Process", href: "/admission" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Image
                          src="/images/new.gif"
                          alt="SBPCSC NEWS"
                          width={30}
                          height={11}
                          className="inline"
                          unoptimized
                        />
                        {" "}
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[#cf2b1f] hover:underline"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-8xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#333]">Testimonials</h2>
          <div className="flex flex-wrap">
            {testimonials.map((t, i) => (
              <div key={i} className="mb-6 w-full px-3 md:w-1/3">
                <div className="h-full rounded bg-white p-6 shadow-sm">
                  <div className="mb-4 text-center text-2xl text-[#cf2b1f]">
                    <i className="fa fa-quote-left" />
                  </div>
                  <p className="mb-4 text-justify text-sm leading-relaxed whitespace-pre-line">{t.text}</p>
                  <h5 className="text-center font-bold">
                    <strong>Review of {t.stream} student {t.name}</strong>
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/reviews" className="inline-block rounded bg-[#337ab7] px-3 py-2 text-white hover:bg-[#286090]">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Icon Boxes */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-8xl px-4">
          <div className="flex flex-wrap justify-center">
            {iconBoxes.map((box) => (
              <div key={box.label} className="mb-4 w-1/2 px-2 sm:w-1/3 md:w-1/6">
                <a
                  href={box.href}
                  className="block rounded-lg bg-gray-50 p-4 text-center transition-shadow hover:shadow-md"
                >
                  <Image
                    src={box.icon}
                    alt={box.label}
                    width={80}
                    height={80}
                    className="mx-auto"
                    unoptimized
                  />
                  <h3 className="mt-2 text-sm font-bold">{box.label}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <dialog
        id="enquiryModal"
        className="w-[90%] max-w-md rounded-lg border-0 p-0 shadow-xl backdrop:bg-black/50"
      >
        <div className="relative">
          <button
            onClick={() => {
              const el = document.getElementById("enquiryModal") as HTMLDialogElement
              el?.close()
            }}
            className="absolute right-2 top-2 z-10 cursor-pointer border-0 bg-transparent text-2xl text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
          <Image
            src="/images/enquiry-sbpcsc-2026-27.jpg"
            alt="Enquiries 2026-27"
            width={500}
            height={600}
            className="h-auto w-full"
            unoptimized
          />
        </div>
      </dialog>
    </>
  )
}
