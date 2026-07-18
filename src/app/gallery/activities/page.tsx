import { redirect } from "next/navigation";
import { activitiesData } from "@/features/gallery";

export default function ActivitiesIndexPage() {
  const latestYear = activitiesData[0]?.year || "2026-27";
  redirect(`/gallery/activities/${latestYear}`);
}
