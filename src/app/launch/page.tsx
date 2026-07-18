import type { Metadata } from "next"
import { LaunchPage } from "@/features/launch"

export const metadata: Metadata = {
  title: "Launch",
  description: "SBPCSC Launch Event",
}

export default function Page() {
  return <LaunchPage />
}
