import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumb } from "@/features/navigation"
import { PageBanner } from "@/components/sections/PageBanner"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "SBPCSC Library – S.B. Patil College Ravet Pune",
  description:
    "Discover the SBPCSC Library at S.B. Patil College, Ravet Pune — rich resources for Commerce, Economics & Science students, with books, journals, study spaces and digital access.",
  keywords: [
    "SBPCSC library Pune", "S.B. Patil College library Ravet", "college library resources Pune",
    "Commerce & Science student library Pune", "Pune junior college library",
    "library books & journals Ravet", "student study resources Pune", "academic library Pune",
    "SBPCSC digital library", "Pune college library", "Ravet library", "science library Pune",
    "commerce library Pune", "11th standard library", "12th standard library",
    "textbooks Pune", "reference books Pune", "HSC library", "college resources Pune",
    "JEE", "NEET", "CET", "NATA",
  ],
}

const bookCoverImages = [
  "libary-books-01.webp",
  "libary-books-02.webp",
  "libary-books-10.webp",
  "libary-books-04.webp",
  "libary-books-05.webp",
  "libary-books-06.webp",
  "libary-books-11.webp",
  "libary-books-12.webp",
  "libary-books-09.webp",
  "libary-books-10.webp",
  "libary-books-07.webp",
  "libary-books-08.webp",
  "libary-books-13.webp",
]

export default function LibraryPage() {
  return (
    <>
      <Breadcrumb />
      <PageBanner />
      <div className="page_details">
        <div className="container mx-auto px-4 py-8">
          <PageHeading title="Library" />

          <h2 className="mb-4 text-xl font-bold text-[#146ab5]">Library Collection in AY 2024-25</h2>

          <div className="mb-8 overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100 font-semibold">
                  <th rowSpan={2} className="border border-gray-300 p-2 text-center align-middle">
                    SR. NO.
                  </th>
                  <th colSpan={2} className="border border-gray-300 p-2 text-center">
                    TEXT BOOK
                  </th>
                  <th colSpan={6} className="border border-gray-300 p-2 text-center">
                    REFERENCE BOOK
                  </th>
                  <th colSpan={3} className="border border-gray-300 p-2 text-center">
                    STORY BOOKS
                  </th>
                  <th rowSpan={2} className="border border-gray-300 p-2 text-center align-middle">
                    TOTAL BOOKS
                  </th>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <th className="border border-gray-300 p-2 text-center">STATE BOARD</th>
                  <th className="border border-gray-300 p-2 text-center">NCERT</th>
                  <th className="border border-gray-300 p-2 text-center">REF</th>
                  <th className="border border-gray-300 p-2 text-center">JEE</th>
                  <th className="border border-gray-300 p-2 text-center">NEET</th>
                  <th className="border border-gray-300 p-2 text-center">CET</th>
                  <th className="border border-gray-300 p-2 text-center">NATA</th>
                  <th className="border border-gray-300 p-2 text-center">NDA / NA</th>
                  <th className="border border-gray-300 p-2 text-center">ENGLISH</th>
                  <th className="border border-gray-300 p-2 text-center">MARATHI</th>
                  <th className="border border-gray-300 p-2 text-center">HINDI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 p-2 font-semibold">1</td>
                  <td className="border border-gray-300 p-2">836</td>
                  <td className="border border-gray-300 p-2">268</td>
                  <td className="border border-gray-300 p-2">793</td>
                  <td className="border border-gray-300 p-2">132</td>
                  <td className="border border-gray-300 p-2">78</td>
                  <td className="border border-gray-300 p-2">60</td>
                  <td className="border border-gray-300 p-2">18</td>
                  <td className="border border-gray-300 p-2">14</td>
                  <td className="border border-gray-300 p-2">532</td>
                  <td className="border border-gray-300 p-2">742</td>
                  <td className="border border-gray-300 p-2">26</td>
                  <td className="border border-gray-300 p-2 font-semibold">1857</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2 font-semibold" colSpan={2}>
                    MOTIVATIONAL BOOKS
                  </td>
                  <td className="border border-gray-300 p-2 font-semibold" colSpan={2}>
                    AUTO-BIOGRAPHY
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2" />
                  <td className="border border-gray-300 p-2 text-left" colSpan={2}>
                    ENGLISH- 10<br />MARATHI- 4
                  </td>
                  <td className="border border-gray-300 p-2 text-left" colSpan={2}>
                    ENGLISH- 14<br />MARATHI- 5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-4 text-xl font-bold text-[#146ab5]">Books Cover Photos</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookCoverImages.map((filename, i) => (
              <div key={`${i}`} className="flex justify-center">
                <Image
                  src={`/images/libary-books/${filename}`}
                  alt="Libary Books, SBPCSC"
                  width={400}
                  height={350}
                  className="border border-gray-300 object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
