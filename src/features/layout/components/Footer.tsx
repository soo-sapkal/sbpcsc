import { Phone, Mail, MapPin } from "lucide-react"
import { SocialIcons } from "./SocialIcons"
import { siteConfig } from "@/data/site-config"
import { EXTERNAL_LINKS } from "@/data/constants"
import Link from "next/link"

const importantLinks = [
  { label: "NCERT", href: EXTERNAL_LINKS.NCERT },
  { label: "JEE MAINS", href: EXTERNAL_LINKS.JEE_MAINS },
  { label: "MH CET", href: EXTERNAL_LINKS.MH_CET },
  { label: "NEET", href: EXTERNAL_LINKS.NEET },
  { label: "NATA", href: EXTERNAL_LINKS.NATA },
  { label: "NIFD", href: EXTERNAL_LINKS.NIFD },
  { label: "ICAI", href: EXTERNAL_LINKS.ICAI },
  { label: "ICSI", href: EXTERNAL_LINKS.ICSI },
]

const quickLinks = [
  { label: "Admission", href: "/admission" },
  { label: "Academics", href: "/academics/plan" },
  { label: "Blog", href: "/blog" },
  { label: "Library", href: "/library" },
  { label: "ERP", href: EXTERNAL_LINKS.ERP_TEACHER },
  { label: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <>
      <footer className="bg-[#0a5faa] pb-10 pt-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="mb-10 md:mb-0">
              <h3 className="mb-5 pb-5 text-[28px] font-bold text-white">GET IN TOUCH</h3>
              <p className="mb-2">
                <MapPin className="mr-1 inline-block h-4 w-4" />
                Opposite of S.B. Patil Public School,
                <br /> S. No. 110, Gate No.1,
                <br /> Ravet, Pune - 412101.
              </p>
              <p className="mb-2">
                <Phone className="mr-1 inline-block h-4 w-4" />
                {siteConfig.phone} / {siteConfig.phoneAlt}
              </p>
              <p className="mb-2">
                <Mail className="mr-1 inline-block h-4 w-4" />
                <a href={`mailto:${siteConfig.email}`} className="text-white no-underline hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <SocialIcons variant="footer" />
            </div>

            <div className="mb-10 md:mb-0">
              <h3 className="mb-5 pb-5 text-[28px] font-bold text-white">IMPORTANT LINKS</h3>
              <ul className="m-0 list-none p-0">
                {importantLinks.map((link, i) => (
                  <li key={i} className="border-b border-dotted border-white py-1">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline transition-colors duration-300 hover:text-[#0c1e3d]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 md:mb-0">
              <h3 className="mb-5 pb-5 text-[28px] font-bold text-white">QUICK LINKS</h3>
              <ul className="m-0 list-none p-0">
                {quickLinks.map((link, i) => {
                  const isExternal = link.href.startsWith("http")
                  if (isExternal) {
                    return (
                      <li key={i} className="border-b border-dotted border-white py-1">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white no-underline transition-colors duration-300 hover:text-[#0c1e3d]"
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={i} className="border-b border-dotted border-white py-1">
                      <Link
                        href={link.href}
                        className="text-white no-underline transition-colors duration-300 hover:text-[#0c1e3d]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 pb-5 text-[28px] font-bold text-white">LOCATION</h3>
              <iframe
                className="mt-1 w-full rounded-[20px] border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.258871352793!2d73.74075511434064!3d18.65237588733234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba04003bbb83%3A0x2e3c5fc34bc28590!2sS+B+PATIL+COLLEGE+OF+SCIENCE+AND+COMMERCE!5e0!3m2!1sen!2sin!4v1485500977009"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                width="100%"
                height="160px"
                title="College Location"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#011322] px-4 py-[10px] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <span className="text-sm">Copyright &copy; 2026 S.B. Patil College Of Science And Commerce</span>
            <span className="mt-1 text-sm sm:mt-0 sm:text-right">
              Designed &amp; Developed by{" "}
              <a
                href="http://pcet.org.in/digital-marketing-team/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white no-underline"
              >
                Digital Marketing Team, PCET
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
