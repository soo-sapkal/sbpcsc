import type { Metadata } from "next"
import { ContactPage } from "@/features/contact"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with S. B. Patil College of Science and Commerce, Ravet, Pune.",
}

export default function Page() {
  return <ContactPage />
}
