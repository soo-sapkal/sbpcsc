import type { Metadata } from "next"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "About SBPCSC",
  description:
    "Our vision is to create new horizons for the achievement of knowledge with the mission to provide a platform to every student to identify his skills & talents.",
}

export default function SbpcscPage() {
  return (
    <>
      <PageHeading title="About SBPCSC" />
      <p className="mb-4 text-justify">
        <strong>S.B. Patil College of Science and Commerce (SBPCSC)</strong> is a progressive, student-centered,
        co-educational private college, committed to providing quality education to all its students. The college
        strives for educational innovation and academic excellence. It is run by a lively caring organization called{" "}
        <strong>Pimpri Chinchwad Education Trust (PCET)</strong>, a time-tested brand in education since{" "}
        <strong>1990</strong>.
      </p>
      <h2 className="mb-2 mt-8 text-2xl font-bold text-[#cf2b1f]">Vision</h2>
      <p className="mb-4 text-justify">
        To inculcate strong self esteem and moral values in a child with skills necessary to excel in every walk.
      </p>
      <h2 className="mb-2 mt-8 text-2xl font-bold text-[#cf2b1f]">Mission</h2>
      <p className="mb-4 text-justify">
        We strive to provide world class academic and cultural foundation to every child to realize his/her greatest
        potentials emphasizing Social, Emotional, Physical and Spiritual Development, making a child extrovert to meet
        challenges of life with a positive attitude and great confidence.
      </p>
      <h2 className="mb-2 mt-8 text-2xl font-bold text-[#cf2b1f]">Quality Policy</h2>
      <p className="mb-4 text-justify">
        We at Pimpri Chinchwad Education Trust (PCET), are engaged in development, establishment &amp; sustenance of
        educational institutes.
      </p>
      <p className="mb-2">We are committed for:</p>
      <ul className="mb-4 list-disc pl-6">
        <li>Compliance of applicable statutory requirements</li>
        <li>Satisfaction of our stakeholders</li>
      </ul>
      <p className="text-justify">
        This shall be achieved through continual improvement &amp; monitoring of infrastructure, human resource,
        economic growth &amp; overall performance of the institutes.
      </p>
    </>
  )
}
