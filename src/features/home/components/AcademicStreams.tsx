import Link from "next/link"
import { ArrowRight, CheckCircle2, FlaskConical, Briefcase, GraduationCap } from "lucide-react"

export function AcademicStreams() {
  return (
    <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0a2540] border border-blue-200 mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-[#0a2540]" />
            <span>Junior College Academic Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a2540] font-serif">
            Science &amp; Commerce Streams (Std. XI &amp; XII)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Affiliated to Maharashtra State Board of Secondary &amp; Higher Secondary Education (Pune Division).
            Delivering conceptual clarity, practical laboratory learning, and integrated competitive exam mentorship.
          </p>
        </div>

        {/* Two Streams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Science Wing */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Stream 01</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] mt-0.5">Faculty of Science</h3>
                  <p className="text-xs text-slate-500 mt-1">HSC Science with Integrated CET/NEET/JEE Foundation</p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0a2540] border border-blue-100">
                  <FlaskConical className="h-6 w-6" />
                </div>
              </div>

              {/* Subject Offerings */}
              <div className="py-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Core Electives &amp; Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Information Technology (IT)", "Geography", "English", "Marathi", "Hindi"].map((sub) => (
                      <span key={sub} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Key Advantages</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Dedicated, fully-equipped Physics, Chemistry &amp; Biology Laboratories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Hi-tech Computer Laboratories for Bifocal Computer Science &amp; IT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Regular doubt-solving, mock tests, and MHT-CET / NEET performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">Eligible after Std. X (SSC/CBSE/ICSE)</span>
              <Link
                href="/academics/science/physics"
                className="inline-flex items-center gap-1.5 rounded bg-[#0a2540] px-4 py-2 text-xs font-bold text-white hover:bg-[#133863] transition-colors"
              >
                <span>View Science Department</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Commerce Wing */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#991b1b]">Stream 02</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540] mt-0.5">Faculty of Commerce</h3>
                  <p className="text-xs text-slate-500 mt-1">HSC Commerce with CA Foundation, Banking &amp; Corporate Finance Orientation</p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#991b1b] border border-red-100">
                  <Briefcase className="h-6 w-6" />
                </div>
              </div>

              {/* Subject Offerings */}
              <div className="py-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Core Electives &amp; Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Book Keeping & Accountancy", "Secretarial Practice (SP)", "Organization of Commerce (OCM)", "Economics", "Mathematics & Statistics", "Information Technology (IT)", "English", "Marathi", "Hindi"].map((sub) => (
                      <span key={sub} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Key Advantages</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>In-depth focus on Double Entry Book Keeping, Accounting Principles &amp; Balance Sheets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Secretarial practice &amp; Company Law compliance foundation for future CS aspirants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Practical Tally ERP &amp; computerized accounting training in IT labs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">Eligible after Std. X (SSC/CBSE/ICSE)</span>
              <Link
                href="/academics/commerce/secretarial"
                className="inline-flex items-center gap-1.5 rounded bg-[#991b1b] px-4 py-2 text-xs font-bold text-white hover:bg-[#b91c1c] transition-colors"
              >
                <span>View Commerce Department</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
