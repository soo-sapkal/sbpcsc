import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/data/site-config"

export function Header() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center py-5 md:justify-between">
        <div className="hidden md:block w-[12.5%]">
          <Link href="/">
            <Image
              src={siteConfig.logo}
              alt="SBPCSC Logo"
              width={100}
              height={100}
              className="mx-auto"
              unoptimized
            />
          </Link>
        </div>
        <div className="w-full text-center md:w-[75%]">
          <div className="text-[#3b5998] text-lg font-bold md:text-[1.313rem] tracking-wide">
            Pimpri Chinchwad Education Trust&apos;s
          </div>
          <div className="text-[#cf2b1f] text-2xl font-bold md:text-3xl uppercase tracking-wide py-1">
            S. B. PATIL COLLEGE OF SCIENCE AND COMMERCE
          </div>
          <div className="text-[#333] text-xs md:text-[0.938rem]">
            <strong>INDEX NO :- {siteConfig.indexNo} | U-DISE NO :- {siteConfig.udiseNo}</strong>
          </div>
        </div>
        <div className="hidden md:block w-[12.5%]">
          <a href="https://pcet.org.in/" target="_blank" rel="noopener noreferrer">
            <Image
              src={siteConfig.trustLogo}
              alt="PCET Trust Logo"
              width={100}
              height={100}
              className="mx-auto"
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  )
}
