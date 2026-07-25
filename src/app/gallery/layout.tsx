import { Breadcrumb } from "@/features/navigation"
import { PageBanner } from "@/components/sections/PageBanner"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb />
      <PageBanner />
      {children}
    </>
  )
}
