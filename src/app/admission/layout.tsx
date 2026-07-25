import { Breadcrumb } from "@/features/navigation"
import { PageBanner } from "@/components/sections/PageBanner"

export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb />
      <PageBanner />
      <div className="container mx-auto px-4 py-8">{children}</div>
    </>
  )
}