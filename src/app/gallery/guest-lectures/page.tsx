import { redirect } from "next/navigation"
import { guestLecturesGallery } from "@/features/gallery/data/gallery-data"

const defaultYear = guestLecturesGallery[0]?.year || "2025-26"

export default function GuestLecturesPage() {
  redirect(`/gallery/guest-lectures/${defaultYear}`)
}
