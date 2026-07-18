import Link from "next/link"
import { Quote } from "lucide-react"
import { testimonials } from "@/features/home/data/testimonials"

export function TestimonialPreview() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-[1.75rem] font-bold text-[#cf2b1f]">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
              <div className="max-h-[10rem] overflow-y-auto text-justify text-sm leading-relaxed text-gray-600">
                {t.content.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < t.content.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-block rounded bg-[#337ab7] px-6 py-2 text-sm text-white no-underline transition-colors hover:bg-[#286090]"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
