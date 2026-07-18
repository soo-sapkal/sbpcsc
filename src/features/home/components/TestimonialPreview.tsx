import Link from "next/link"
import { testimonials } from "@/features/home/data/testimonials"

export function TestimonialPreview() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <h2 className="testm-heading mb-5 text-center text-[1.75rem] font-bold text-[#cf2b1f]">Testimonials</h2>
          </div>

          {testimonials.map((t, i) => (
            <div key={i} className="relative mb-4 w-full px-4 sm:w-1/2 md:w-1/3">
              <div className="flex">
                <div className="testm-bg-1 w-[12.5%]" />
                <div className="testm-bg-gray w-[87.5%]">
                  <div className="mb-3 flex justify-center">
                    <span className="text-2xl text-gray-400">&ldquo;</span>
                  </div>
                  <div className="testm-para max-h-[9.375rem] overflow-auto pr-1 text-justify text-[0.875rem] leading-[1.438rem] text-black">
                    {t.content.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < t.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  <h5 className="mt-3 text-xs font-semibold text-gray-600">
                    <strong>{t.author}</strong>
                  </h5>
                </div>
              </div>
              <div className="testm-user-pic">
                <span className="text-2xl text-gray-600">&#128100;</span>
              </div>
            </div>
          ))}

          <div className="w-full px-4 text-center">
            <Link
              href="/reviews"
              className="btn btn-primary inline-block rounded bg-[#337ab7] px-3 py-2 text-[0.875rem] font-normal text-white no-underline hover:bg-[#286090]"
            >
              Read More
            </Link>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
