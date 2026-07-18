import type { Metadata } from "next"
import { GalleryPage } from "@/features/gallery"

export const metadata: Metadata = {
  title: "Activities Gallery",
  description: "Gallery of activities at S. B. Patil College of Science and Commerce.",
}

export default function Page({ params }: { params: Promise<{ year: string }> }) {
  return <GalleryPage params={params} type="activities" />
}
