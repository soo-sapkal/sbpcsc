import type { Metadata } from "next"
import { Breadcrumb } from "@/features/navigation"
import { PageBanner } from "@/components/sections/PageBanner"
import { PageHeading } from "@/components/sections/PageHeading"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Contact S.B. Patil College: Pune's Top Science & Commerce College",
  description:
    "Contact S.B. Patil College of Science & Commerce (SBPCSC) in Ravet, Pune. Reach us for admissions, enquiries, or support at 9665333344 / 9767199039 or sbpc.science@gmail.com.",
  keywords: [
    "S.B. Patil College", "SBPCSC", "Pune college", "Ravet college",
    "Science college Pune", "Commerce college Pune", "11th admission Pune",
    "2026-27 admissions", "contact Pune college", "best science college Pune",
    "top commerce college Pune", "junior college Pune", "HSC college Pune",
  ],
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumb />
      <PageBanner />
      <div className="page_details">
        <div className="container mx-auto px-4 py-8">
          <PageHeading title="Contact Us" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-3 text-xl font-bold text-[#146ab5]">Address :</h2>
              <address className="mb-6 not-italic text-gray-700">
                S.B. Patil College of Science And Commerce,
                <br />
                Opposite of S.B. Patil Public School,
                <br />
                S. No. 110, Gate No.1,
                <br />
                Ravet, Pune - 412101.
                <br />
                <br />
                <strong>Mobile No:</strong> 9665333344 / 9767199039
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:sbpc.science@gmail.com" className="text-[#146ab5] hover:underline">
                  sbpc.science@gmail.com
                </a>
              </address>

              <h2 className="mb-3 text-xl font-bold text-[#146ab5]">Contact Form :</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-[#146ab5]">Location :</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.258871352793!2d73.74075511434064!3d18.65237588733234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba04003bbb83%3A0x2e3c5fc34bc28590!2sS+B+PATIL+COLLEGE+OF+SCIENCE+AND+COMMERCE!5e0!3m2!1sen!2sin!4v1485500977009"
                width="100%"
                height="525"
                className="rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SBPCSC Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
