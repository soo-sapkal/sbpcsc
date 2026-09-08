import Link from "next/link"
import { testimonials } from "@/features/home/data/testimonials"
import { Quote, ArrowRight, Award, GraduationCap } from "lucide-react"

// Parse reviewer metadata cleanly
function parseAuthorDetails(authorString: string) {
  if (authorString.includes("Miss. Anisha Mahesh Kale")) {
    return {
      name: "Anisha Mahesh Kale",
      role: "Science Stream Topper",
      badge: "MHT-CET Merit Ranker",
      initials: "AK",
    }
  }
  if (authorString.includes("Miss. Anushka Somnath Pol")) {
    return {
      name: "Anushka Somnath Pol",
      role: "1st Topper (Science)",
      badge: "Competitive Exam Merit",
      initials: "AP",
    }
  }
  if (authorString.includes("Miss. Pranjal Vijaykumar Thorat")) {
    return {
      name: "Pranjal Vijaykumar Thorat",
      role: "3rd Topper (Science)",
      badge: "HSC Board & CET Excellence",
      initials: "PT",
    }
  }
  return {
    name: authorString.replace(/^Review of\s*/i, ""),
    role: "Student Alumnus",
    badge: "SBPCSC Merit Holder",
    initials: "SC",
  }
}

export function TestimonialPreview() {
  return (
    <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 border border-amber-200 mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-amber-700" />
            <span>Student &amp; Parent Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a2540] font-serif">
            Voices of Our Academic Achievers
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            Read firsthand accounts from our state and board exam rankers about the mentorship, discipline, and culture at SBPCSC.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => {
            const author = parseAuthorDetails(t.author)
            // Extract the core recommendation paragraph for clean, balanced display
            const paragraphs = t.content.split("\n\n").filter(Boolean)
            const mainQuote = paragraphs.length > 1 ? paragraphs[0] : t.content.slice(0, 240) + "..."

            return (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Quote Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0a2540]">
                      <Quote className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[0.688rem] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <Award className="h-3 w-3 text-emerald-600" />
                      <span>{author.badge}</span>
                    </span>
                  </div>

                  {/* Quote Content */}
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic mb-6">
                    &ldquo;{mainQuote}&rdquo;
                  </p>
                </div>

                {/* Author Credentials Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0a2540] text-amber-300 font-bold text-sm shadow-xs">
                    {author.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-[#0a2540] truncate">
                      {author.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium truncate">
                      {author.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Reviews Link */}
        <div className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a2540] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#133863] transition-colors"
          >
            <span>Read All Student &amp; Parent Reviews</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
