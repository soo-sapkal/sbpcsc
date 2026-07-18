import type { Metadata } from "next"
import { AchievementsPage } from "@/features/achievements"

export const metadata: Metadata = {
  title: "Achievements",
  description: "Student achievements at S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <AchievementsPage />
}
