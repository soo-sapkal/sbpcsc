"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import { CollegeMap } from "./CollegeMap"

export function ContactPage() {
  return (
    <>
      <section className="gradient-primary section-padding text-white">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-3xl font-bold md:text-4xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-white/80"
          >
            We would love to hear from you. Reach out with any questions, feedback, or admission enquiries.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide">
          <CollegeMap />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "9665333344 / 9767199039",
                action: "tel:9665333344",
                label: "Call Now",
              },
              {
                icon: Mail,
                title: "Email Us",
                value: "sbpc.science@gmail.com",
                action: "mailto:sbpc.science@gmail.com",
                label: "Send Email",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "Ravet, Pune - 412101",
                action: "https://www.google.com/maps/search/S.+B.+Patil+College+Ravet+Pune",
                label: "Get Directions",
              },
            ].map((item, i) => (
              <motion.a
                key={item.title}
                href={item.action}
                target={item.action.startsWith("http") ? "_blank" : undefined}
                rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-soft transition-all hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{item.value}</p>
                <span className="text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  {item.label} &rarr;
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
