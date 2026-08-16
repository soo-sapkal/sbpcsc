import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { activitiesGallery } from "@/features/gallery/data/gallery-data"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Sidebar } from "@/features/navigation"
import { studentCornerSidebar } from "@/features/navigation/data/sidebar-links"
import { PageHeading } from "@/components/sections/PageHeading"
import { GalleryYearNav, GalleryGrid } from "@/features/gallery"

export function generateStaticParams() {
  return activitiesGallery.map((g) => ({ year: g.year }))
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  const { year } = await params
  const yearData = activitiesGallery.find((g) => g.year === year)
  if (!yearData) return {}
  return {
    title: `Gallery Activities - ${year} | S. B. Patil College of Science and Commerce`,
    description: `Explore gallery activities for the academic year ${year} at S. B. Patil College of Science and Commerce, Ravet, Pune.`,
  }
}

export default async function ActivitiesYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params
  const yearData = activitiesGallery.find((g) => g.year === year)
  if (!yearData) notFound()

  return (
    <ContentWithSidebar sidebar={<Sidebar section={studentCornerSidebar} />}>
      <PageHeading title={`Gallery Activities - ${year}`} />
      <GalleryYearNav years={activitiesGallery} currentYear={year} type="activities" />
      <GalleryGrid events={yearData.events} />
    </ContentWithSidebar>
  )
}
