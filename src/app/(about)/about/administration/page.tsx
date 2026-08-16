import type { Metadata } from "next"
import Image from "next/image"
import { PageHeading } from "@/components/sections/PageHeading"

export const metadata: Metadata = {
  title: "Administration at SBPCSC | PCET | Ravet",
  description:
    "Administration and contact information at S. B. Patil College of Science and Commerce, Ravet-Pimpri Chinchwad, Pune",
}

const adminStaff = [
  {
    name: "Mr. Aditya Upasani",
    role: "Administrator",
    experience: "8 years",
    email: "adi_upasani@yahoo.com",
    img: "/images/faculty/aditya-upasani.webp",
  },
  {
    name: "Mr. Tushar Gade",
    role: "Administrator",
    experience: "5 Years",
    email: "tushargade99dj@gmail.com",
    img: "/images/faculty/tushar-gade.webp",
  },
  {
    name: "Mrs. Medhavinee Jagtap",
    role: "Administrator",
    experience: "8 Years",
    email: "medhavinee.jagtap07@gmail.com",
    img: "/images/faculty/medhavinee-jagtap.webp",
  },
  {
    name: "Mrs. Kanchan Rahul Landge",
    role: "Administrator",
    qualification: "M.Com",
    experience: "2.5 years",
    email: "kanchanlandge1988@gmail.com",
    img: "/images/faculty/kanchan-rahul-landge.webp",
  },
  {
    name: "Anita Kashinath Abhang",
    role: "Administrator",
    qualification: "B.Com",
    experience: "3 years",
    email: "anitaabhang12@gmail.com",
    img: "/images/faculty/Anita-Kashinath-Abhang.jpg",
  },
]

const peonStaff = [
  {
    name: "Mr. Balkrishna Waikar",
    email: "balkrishnaw444@gmail.com",
    img: "/images/faculty/balkrishna-waikar.webp",
  },
  {
    name: "Mr. Vijay Garade",
    email: "vijaygarade98403@gmail.com",
    img: "/images/faculty/vijay-garade.webp",
  },
  {
    name: "Mr. Sachin Shete",
    email: "sshete897@gmail.com",
    img: "/images/faculty/sachin-shete.webp",
  },
  {
    name: "Mr. Mauli Kalbhor",
    email: "",
    img: "/images/faculty/mauli-kalbhor.webp",
  },
]

function StaffCard({ person, showQualification }: { person: (typeof adminStaff)[number]; showQualification?: boolean }) {
  return (
    <tr>
      <td className="border border-border p-2 text-center align-middle">
        <Image
          src={person.img}
          alt={person.name}
          width={150}
          height={150}
          className="mx-auto h-auto w-full max-w-[9.375rem]"
          unoptimized
        />
      </td>
      <td className="border border-border p-2 align-middle">
        <strong>Name:</strong> {person.name}<br />
        {showQualification && person.qualification ? <><strong>Qualification:</strong> {person.qualification}<br /></> : null}
        <strong>Experience:</strong> {person.experience}<br />
        <strong>Email:</strong> {person.email}
      </td>
    </tr>
  )
}

function PeonCard({ person }: { person: (typeof peonStaff)[number] }) {
  return (
    <tr>
      <td className="border border-border p-2 text-center align-middle">
        <Image
          src={person.img}
          alt={person.name}
          width={150}
          height={150}
          className="mx-auto h-auto w-full max-w-[9.375rem]"
          unoptimized
        />
      </td>
      <td className="border border-border p-2 align-middle">
        <strong>Name:</strong> {person.name}<br />
        <strong>Email:</strong> {person.email}
      </td>
    </tr>
  )
}

export default function AdministrationPage() {
  return (
    <>
      <PageHeading title="Administration" />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="bg-brand text-white">
              <th className="border border-border p-2 text-left" colSpan={2}>
                <strong>Administrator</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {adminStaff.map((person, i) => (
              <StaffCard key={i} person={person} showQualification={i >= 3} />
            ))}
          </tbody>
          <thead>
            <tr className="bg-brand text-white">
              <th className="border border-border p-2 text-left" colSpan={2}>
                <strong>Peon</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {peonStaff.map((person, i) => (
              <PeonCard key={i} person={person} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
