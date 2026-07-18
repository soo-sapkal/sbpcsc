"use client"

export function Spotlight() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container-fluid">
        <div className="flex">
          <div className="w-1/6 p-0 md:w-[8.33%]">
            <div className="px-4 py-[5px] text-[15px] font-bold uppercase tracking-wide text-[#0f2747]">
              <span className="animate-blink">Highlights:</span>
            </div>
          </div>
          <div className="w-5/6 overflow-hidden md:w-[91.67%]">
            <div className="scrolling-text flex items-center py-[5px]">
              <div className="scrolling-content flex whitespace-nowrap">
                <a
                  href="/images/brain-waves-2025-highlight.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-5 font-bold text-red-600 no-underline hover:underline"
                >
                  Brain Waves 2025
                </a>
                <span className="mx-5" />
                <a
                  href="/pdf/pcet-brochure-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-5 font-bold text-[#333] no-underline hover:underline"
                >
                  PCET Brochure
                </a>
                <span className="mx-5" />
                <a
                  href="https://pcu.edu.in/pcu-brochures.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-5 font-bold text-[#333] no-underline hover:underline"
                >
                  PCU Brochure
                </a>
                <span className="mx-5" />
                <a
                  href="#!"
                  className="mx-5 font-bold text-red-600 no-underline hover:underline"
                >
                  Enquiries for Science and Commerce 2026-27
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
