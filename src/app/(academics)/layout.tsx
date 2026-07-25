import { PageBanner } from "@/components/sections/PageBanner"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Breadcrumb } from "@/features/navigation"
import { Sidebar } from "@/features/navigation"
import { academicsSidebar } from "@/features/navigation/data/sidebar-links"

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner title="Academics" />
      <Breadcrumb />
      <ContentWithSidebar sidebar={<Sidebar section={academicsSidebar} />}>
        {children}
      </ContentWithSidebar>
    </>
  )
}
