import { NewsScroll } from "./NewsScroll"
import { EXTERNAL_LINKS } from "@/data/constants"

export function OverviewSection() {
  return (
    <section className="section1 py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/3">
            <h1 className="heading_h1h mb-4 text-[1.75rem] font-bold text-[#cf2b1f]">Overview</h1>
            <p className="text-justify text-[#333]">
              <strong>
                <a href="/about/sbpcsc" className="text-primary hover:underline">
                  S.B. Patil College of Science and Commerce
                </a>
              </strong>
              &nbsp;(SBPCSC) is a progressive, student-centered, co-educational private college, committed to providing
              quality education to all its students. It is also listed as one of the best junior colleges in Ravet, Pune.
              It is run by a lively caring organization called Pimpri Chinchwad Education Trust (PCET), a time-tested
              brand in education since 1990.
            </p>
            <a href="/about/sbpcsc" className="font-bold text-primary hover:underline">
              Read More
            </a>
            <p>&nbsp;</p>
          </div>

          <div className="w-full px-4 md:w-1/3">
            <h2 className="heading_h3h mb-4 text-[1.75rem] font-bold text-[#cf2b1f]">About PCET</h2>
            <p className="text-justify text-[#333]">
              <strong>
                <a href={EXTERNAL_LINKS.PCET} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Pimpri Chinchwad Education Trust (PCET)
                </a>
              </strong>
              &nbsp;was established in 1990 by visionary Late. Shri. Shankarrao B. Patil, Late. Smt. Lilatai Shankarrao
              Patil, Shri. Dnyaneswar P. Landage, Shri. Vitthal S. Kalbhor, Shri. Shantaram D. Garade, Late. Shri.
              Bhaijan Kazi with an idea of providing quality education from K.G. to P.G. Its sole mission was aimed at
              serving society, the industry and all stakeholders through value-inculcating.
            </p>
            <a href={EXTERNAL_LINKS.PCET} target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">
              Read More
            </a>
            <p>&nbsp;</p>
          </div>

          <div className="w-full px-4 md:w-1/3">
            <h2 className="heading_h3h mb-4 text-[1.75rem] font-bold text-[#cf2b1f]">SBPCSC NEWS</h2>
            <NewsScroll />
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
