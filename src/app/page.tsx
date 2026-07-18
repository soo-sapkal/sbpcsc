import { HeroCarousel } from "@/features/home"
import { OverviewSection } from "@/features/home"
import { TestimonialPreview } from "@/features/home"
import { IconBoxGrid } from "@/features/home"
import { EnrollmentModal } from "@/features/home"

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <OverviewSection />
      <TestimonialPreview />
      <IconBoxGrid />
      <EnrollmentModal />
    </main>
  )
}
