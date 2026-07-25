import type { Metadata } from "next"

import { PageHeading } from "@/components/sections/PageHeading"
import { videoIds } from "@/features/media/data/video-data"

export const metadata: Metadata = {
  title: "SBPCSC Video – S.B. Patil College Ravet Pune",
  description:
    "See why students love SBPCSC! Watch official SBPCSC videos showcasing campus life, faculty, events and student experiences at S.B. Patil College of Science & Commerce, Ravet Pune.",
}

export default function VideoPage() {
  return (
    <>
      <PageHeading title="Video" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {videoIds.map((id, i) => (
          <iframe
            key={i}
            width="100%"
            className="aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${id}`}
            title="SBPCSC Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ))}
      </div>
    </>
  )
}
