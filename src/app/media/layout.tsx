import { Breadcrumb } from "@/features/navigation"
import { PageBanner } from "@/components/sections/PageBanner"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Sidebar } from "@/features/navigation"
import { mediaSidebar } from "@/features/navigation/data/sidebar-links"

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb />
      <PageBanner />
      <ContentWithSidebar sidebar={<Sidebar section={mediaSidebar} />}>
        {children}
      </ContentWithSidebar>
    </>
  )
}
