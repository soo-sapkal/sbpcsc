import type { Metadata } from "next"
import { GalleryPage } from "@/features/gallery"

export const metadata: Metadata = {
  title: "Guest Lectures Gallery",
  description: "Gallery of guest lectures at S. B. Patil College of Science and Commerce.",
}

export default function Page({ params }: { params: Promise<{ year: string }> }) {
  return <GalleryPage params={params} type="guest-lectures" />
}
