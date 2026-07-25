import { redirect } from "next/navigation"
import { activitiesGallery } from "@/features/gallery/data/gallery-data"

const defaultYear = activitiesGallery[0]?.year || "2026-27"

export default function ActivitiesPage() {
  redirect(`/gallery/activities/${defaultYear}`)
}
