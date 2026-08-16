import type { Metadata } from "next"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "Rules & Regulations at SBPCSC | PCET | Ravet, Pune",
  description:
    "Important Rules & Regulations at SBPCSC Ravet, Pune | e.g. Students should carry their I-Card daily, Ragging is strictly prohibited, etc.",
}

export default function RulesPage() {
  return (
    <>
      <PageHeading title="Rules and Regulations" />

      <div className="text-justify">
        <ul className="list-disc pl-6">
          <li>
            Uniform as prescribed by the Institute, formal black shoes white socks is compulsory for all the students.
          </li>
          <li>Students must be punctual in attending theory lectures and practicals.</li>
          <li>
            As specified by HSC examination board, 75% attendance is compulsory for each subject. Students having less
            than 75% attendance are not eligible for <strong>HSC board exam.</strong>
          </li>
          <li>
            Every student must complete prescribed lab work Journal or file as per the completion schedule fixed by the
            institute.
          </li>
          <li>
            Periodic tests are compulsory and conducted as prescribed in the curriculum. These test marks are considered
            while giving internal marks in 12 Th std. for calculating average passing marks in 11 Th std.
          </li>
          <li>Each student is required to see the notice board daily.</li>
          <li>Students are expected to behave with decorum and to pay respect to their faculty and Subordinate officials.</li>
          <li>Students should carry their I-Card daily.</li>
          <li>Parents should attend all the meetings arranged by the institution.</li>
          <li>
            Parents should keep communication with <strong>mentors</strong> class-teachers for proper feedback of the
            students.
          </li>
          <li>
            Late arrival and early departure at or from a class are recorded as absence from the class for the period
            concerned.
          </li>
          <li>No responsibility can be accepted for any loss or damage to student property within the college premises.</li>
          <li>Drinking, smoking, and use of other intoxicants are strictly prohibited in the institution and hostel.</li>
          <li>Simple Mobile phones WITHOUT CAMERA are allowed with the students in the campus.</li>
          <li>
            <strong>
              <a href="/about/committee" className="text-brand hover:underline">
                Ragging is strictly prohibited
              </a>
            </strong>{" "}
            as per Maharashtra Ragging Act 1999. Any act of the students under ragging act is punishable.
          </li>
          <li>In all matters concerning the institution administration and regulation, the decision of the Principal is final.</li>
        </ul>
      </div>
    </>
  )
}
