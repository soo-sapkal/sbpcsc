import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getSubject, commerceSubjects } from "@/data/subjects"
import { PageHeading } from "@/components/sections/PageHeading"
import { SubjectTabs } from "@/features/academics"

export function generateStaticParams() {
  return commerceSubjects.map((s) => ({ subject: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject: slug } = await params
  const subject = getSubject("commerce", slug)
  if (!subject) return {}
  return {
    title: `${subject.name} - Commerce | S. B. Patil College of Science and Commerce`,
    description: `Learn about ${subject.name} department at S. B. Patil College of Science and Commerce, Ravet, Pune.`,
  }
}

export default async function CommerceSubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params
  const subject = getSubject("commerce", slug)
  if (!subject) notFound()

  return (
    <>
      <PageHeading title={subject.name} />
      <SubjectTabs subject={subject} />
    </>
  )
}
