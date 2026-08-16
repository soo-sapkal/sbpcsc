import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { guestLecturesGallery } from "@/features/gallery/data/gallery-data"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Sidebar } from "@/features/navigation"
import { studentCornerSidebar } from "@/features/navigation/data/sidebar-links"
import { PageHeading } from "@/components/sections/PageHeading"
import { GalleryYearNav, GalleryGrid } from "@/features/gallery"

export function generateStaticParams() {
  return guestLecturesGallery.map((g) => ({ year: g.year }))
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  const { year } = await params
  const yearData = guestLecturesGallery.find((g) => g.year === year)
  if (!yearData) return {}
  return {
    title: `Guest Lectures - ${year} | S. B. Patil College of Science and Commerce`,
    description: `Explore guest lectures for the academic year ${year} at S. B. Patil College of Science and Commerce, Ravet, Pune.`,
  }
}

export default async function GuestLecturesYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params
  const yearData = guestLecturesGallery.find((g) => g.year === year)
  if (!yearData) notFound()

  return (
    <ContentWithSidebar sidebar={<Sidebar section={studentCornerSidebar} />}>
      <PageHeading title={`Guest Lectures - ${year}`} />
      <GalleryYearNav years={guestLecturesGallery} currentYear={year} type="guest-lecture" />
      <GalleryGrid events={yearData.events} />
    </ContentWithSidebar>
  )
}
