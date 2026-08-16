import { Phone, Mail } from "lucide-react"
import { SocialIcons } from "./SocialIcons"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"

export function TopStrip() {
  return (
    <div className="border-b border-border bg-muted text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1 py-1.5 text-sm">
            <Phone className="h-4 w-4" />
            <a href="tel:+91-7424080910" className="text-muted-foreground no-underline hover:text-foreground hover:underline">
              {siteConfig.phone}
            </a>
            <span className="mx-1">|</span>
            <Mail className="h-4 w-4" />
            <a href="mailto:sbpc.science@gmail.com" className="text-muted-foreground no-underline hover:text-foreground hover:underline">
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <SocialIcons variant="top-strip" showLabel />
            <a
              href={EXTERNAL_LINKS.ADMISSION_ENQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="enq-btn inline-block rounded-md bg-brand px-4 py-2 text-sm font-bold text-white shadow-sm no-underline transition-colors hover:bg-brand-dark"
            >
              Admission Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
