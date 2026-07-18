import type { Metadata } from "next"
import { AdminStaffList } from "@/features/about"

export const metadata: Metadata = {
  title: "Administration",
  description: "Administration staff of S. B. Patil College of Science and Commerce.",
}

export default function Page() {
  return <AdminStaffList />
}
