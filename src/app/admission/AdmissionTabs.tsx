"use client"

import Image from "next/image"
import { NavPills } from "@/components/sections/NavPills"
import type { ReactNode } from "react"

function PdfThumb({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 rounded border border-[#ddd] bg-[#fff] p-4 text-center no-underline transition-shadow hover:shadow-md"
    >
      <Image src="/images/pdficon.png" alt="PDF" width={100} height={100} className="h-auto w-[100px]" />
      <span className="text-sm font-medium text-[#333]">{label}</span>
    </a>
  )
}

export function AdmissionTabs() {
  const tabs: { id: string; label: string; content: ReactNode }[] = [
    {
      id: "one",
      label: "Admission Process",
      content: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PdfThumb href="/pdf/11th-admission-process-01.pdf" label="11th Admission Process" />
        </div>
      ),
    },
    {
      id: "two",
      label: "Cut Off",
      content: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PdfThumb href="/pdf/cut-off-sbpcsc-2025-26.pdf" label="Cut Off of A.Y. 2025-26" />
          <PdfThumb href="/pdf/cut-off-sbpcsc-2024-25.pdf" label="Cut Off of A.Y. 2024-25" />
          <PdfThumb href="/pdf/cut-off-sbpcsc-2023-24.pdf" label="Cut Off of A.Y. 2023-24" />
        </div>
      ),
    },
    {
      id: "three",
      label: "Intake & Eligibility",
      content: (
        <div>
          <h2 className="mb-3 text-lg font-semibold text-[#146ab5]">Intake</h2>
          <ul className="list-disc pl-6">
            <li>Science : 360</li>
            <li>Commerce : 120</li>
            <li>Bifocal Computer Science : 50</li>
            <li>IT : 180 in Science , 60 in Commerce</li>
          </ul>
        </div>
      ),
    },
    {
      id: "four",
      label: "Admission Form",
      content: (
        <div>
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <PdfThumb href="/pdf/SARAL-form.pdf" label="SARAL Form" />
            <PdfThumb href="/pdf/I-card-form.pdf" label="I Card Form" />
          </div>
          <p className="mb-2">
            Fill it and submit to{" "}
            <a href="mailto:sbpc.science@gmail.com" className="text-[#146ab5] underline">
              sbpc.science@gmail.com
            </a>
            ,{" "}
            <a href="mailto:adi.upasani@yahoo.com" className="text-[#146ab5] underline">
              adi.upasani@yahoo.com
            </a>
          </p>
          <p className="mb-4 text-justify">
            Admission for 11th Science & Commerce is through Centralised Admission Process(CAP) by Higher Secondary
            board of Maharashtra for Pune and Pimpri-Chinchwad Region.
          </p>
          <p className="font-semibold">College Code :</p>
          <p>
            Science - PN244SFE
            <br />
            Commerce - PN244CFE
            <br />
            Bifocal Computer Science - PN244SFECSN
          </p>
        </div>
      ),
    },
    {
      id: "five",
      label: "Documents Required",
      content: (
        <ol className="list-decimal pl-6">
          <li>10th Class Marksheet - Xerox</li>
          <li>School Leaving Certificate – Original</li>
          <li>Migration Certificate – Original (Applicable for those who have passed 10th from CBSE, ICSE or other state board)</li>
          <li>Caste Certificate - Xerox ( if applicable)</li>
        </ol>
      ),
    },
    {
      id: "six",
      label: "Fee Structure",
      content: (
        <div>
          <h2 className="mb-3 text-lg font-semibold text-[#146ab5]">Fee Structure (2026-27) - SCIENCE</h2>
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse border border-[#ddd] text-left text-sm">
              <thead>
                <tr className="bg-[#146ab5] text-white">
                  <th className="border border-[#ddd] p-2">Stream</th>
                  <th className="border border-[#ddd] p-2">Tuition Fee</th>
                  <th className="border border-[#ddd] p-2">Admin Charges</th>
                  <th className="border border-[#ddd] p-2">Total Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Board with Marathi/Hindi</td>
                  <td className="border border-[#ddd] p-2">31,600</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">32,100</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Board with IT</td>
                  <td className="border border-[#ddd] p-2">36,600</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">37,100</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Board with CS</td>
                  <td className="border border-[#ddd] p-2">56,600</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">57,100</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Uniform fees (2 Sets Dress material)</td>
                  <td className="border border-[#ddd] p-2">1,500</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">1,500</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Admission Form Fees</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">500</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Eligibility (CBSC,ICSE,Other than Maharashtra State Board)</td>
                  <td className="border border-[#ddd] p-2">700</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">700</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Hostel Fees</td>
                  <td className="border border-[#ddd] p-2">75,000</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">75,000</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Mess Fees</td>
                  <td className="border border-[#ddd] p-2">50,000</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="mb-3 text-lg font-semibold text-[#146ab5]">Fee Structure (2026-27) - COMMERCE</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#ddd] text-left text-sm">
              <thead>
                <tr className="bg-[#146ab5] text-white">
                  <th className="border border-[#ddd] p-2">Stream</th>
                  <th className="border border-[#ddd] p-2">Tuition Fee</th>
                  <th className="border border-[#ddd] p-2">Admin Charges</th>
                  <th className="border border-[#ddd] p-2">Total Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Board with Marathi/Hindi</td>
                  <td className="border border-[#ddd] p-2">25,000</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">25,500</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Board with IT</td>
                  <td className="border border-[#ddd] p-2">30,000</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">30,500</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Uniform fees (2 Sets Dress material)</td>
                  <td className="border border-[#ddd] p-2">1,500</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">1,500</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Admission Form Fees</td>
                  <td className="border border-[#ddd] p-2">500</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">500</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Eligibility (CBSC,ICSE,Other than Maharashtra State Board)</td>
                  <td className="border border-[#ddd] p-2">700</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">700</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Hostel Fees</td>
                  <td className="border border-[#ddd] p-2">75,000</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">75,000</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-[#ddd] p-2">Mess Fees</td>
                  <td className="border border-[#ddd] p-2">50,000</td>
                  <td className="border border-[#ddd] p-2">-</td>
                  <td className="border border-[#ddd] p-2">50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "seven",
      label: "Brochure",
      content: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PdfThumb href="/pdf/Jr-college-prospectus-final-26-27.pdf" label="College Prospectus" />
        </div>
      ),
    },
    {
      id: "eight",
      label: "Contact",
      content: (
        <div>
          <h3 className="mb-3 text-base font-semibold">For Admission Contact</h3>
          <p className="mb-2">
            Principal, S.B.Patil College of Science & Commerce, Ravet. <br />
            <strong>Contact:-</strong> 9665333344
          </p>
          <p>
            Mr. Aditya Upasni <br />
            <strong>Contact:-</strong> 9767199039
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="nav-tab-section">
      <NavPills tabs={tabs} />
    </div>
  )
}