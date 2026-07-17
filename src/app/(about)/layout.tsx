import { PageBanner } from "@/components/sections/PageBanner"
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar"
import { Breadcrumb } from "@/features/navigation/components/Breadcrumb"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner title="About Us" />
      <Breadcrumb />
      <ContentWithSidebar sidebar={<div>{/* Sidebar component here */}</div>}>
        {children}
      </ContentWithSidebar>
    </>
  )
}
