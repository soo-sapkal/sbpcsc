import { PageBanner } from "@/components/sections/PageBanner"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Breadcrumb } from "@/features/navigation"
import { Sidebar } from "@/features/navigation"
import { aboutSidebar } from "@/features/navigation/data/sidebar-links"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner title="About Us" />
      <Breadcrumb />
      <ContentWithSidebar sidebar={<Sidebar section={aboutSidebar} />}>
        {children}
      </ContentWithSidebar>
    </>
  )
}
