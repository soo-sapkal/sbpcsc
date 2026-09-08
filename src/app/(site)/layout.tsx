import { TopStrip } from "@/features/layout"
import { Header } from "@/features/layout"
import { MainNav } from "@/features/navigation"
import { MobileNav } from "@/features/navigation"
import { Spotlight } from "@/features/layout"
import { Footer } from "@/features/layout"
import { ScrollToTop } from "@/features/layout"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopStrip />
      <Header />
      <MainNav />
      <MobileNav />
      <Spotlight />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
