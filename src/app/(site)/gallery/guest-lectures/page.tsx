import { redirect } from "next/navigation";
import { guestLecturesData } from "@/features/gallery";

export default function GuestLecturesIndexPage() {
  const latestYear = guestLecturesData[0]?.year || "2025-26";
  redirect(`/gallery/guest-lectures/${latestYear}`);
}
