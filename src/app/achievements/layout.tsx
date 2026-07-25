import type { Metadata } from "next"
import { Breadcrumb } from "@/features/navigation"
import { PageBanner } from "@/components/sections/PageBanner"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Sidebar } from "@/features/navigation"
import { studentCornerSidebar } from "@/features/navigation/data/sidebar-links"

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Academic achievements, co-curricular activities, and sports accomplishments of SBPCSC students.",
}

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb />
      <PageBanner />
      <ContentWithSidebar sidebar={<Sidebar section={studentCornerSidebar} />}>
        {children}
      </ContentWithSidebar>
    </>
  )
}
