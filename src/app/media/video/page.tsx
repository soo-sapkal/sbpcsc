import type { Metadata } from "next"
import { VideoGallery } from "@/features/media"

export const metadata: Metadata = {
  title: "Videos",
  description: "Video gallery of S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <VideoGallery />
}
