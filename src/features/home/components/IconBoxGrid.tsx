import Image from "next/image"
import Link from "next/link"
import { iconBoxes } from "@/features/home/data/icon-boxes"
import { Building2 } from "lucide-react"

export function IconBoxGrid() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-200 mb-2">
            <Building2 className="h-3.5 w-3.5 text-[#0a2540]" />
            <span>Campus Life &amp; Key Amenities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a2540] font-serif">
            Student Infrastructure &amp; Facilities
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            Designed to foster academic excellence, focused self-study, and complete student well-being on campus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {iconBoxes.map((box, i) => {
            const isExternal = box.href.startsWith("mailto:") || box.href.startsWith("tel:")
            const content = (
              <div className="group flex flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white p-5 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#0a2540] hover:shadow-md h-full">
                <div className="relative h-16 w-16 mb-3 transition-transform duration-200 group-hover:scale-110">
                  <Image
                    src={box.icon}
                    alt={box.title}
                    width={64}
                    height={64}
                    className="mx-auto object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#0a2540] transition-colors">
                  {box.title}
                </h3>
                <span className="mt-1 text-[0.688rem] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                  Explore Details →
                </span>
              </div>
            )

            if (isExternal) {
              return (
                <a key={i} href={box.href} className="block no-underline">
                  {content}
                </a>
              )
            }

            return (
              <Link key={i} href={box.href} className="block no-underline">
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
