import { PageBanner } from "@/components/sections/PageBanner"
import { Breadcrumb } from "@/features/navigation"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Sidebar } from "@/features/navigation"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner title="About Us" />
      <ContentWithSidebar sidebar={<Sidebar />}>
        <Breadcrumb />
        {children}
      </ContentWithSidebar>
    </>
  )
}
