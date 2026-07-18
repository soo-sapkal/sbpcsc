import { Metadata } from "next";
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar";
import { PageBanner } from "@/components/sections/PageBanner";
import { Sidebar } from "@/features/navigation";
import { studentCornerSidebar } from "@/features/navigation/data/sidebar-links";
import { AchievementsList, achievementsData } from "@/features/achievements";

export const metadata: Metadata = {
  title: "Achievements & Awards",
  description: "Browse academic toppers, HSC achievements, MHT-CET milestones, and co-curricular achievements of students at S. B. Patil College of Science and Commerce.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageBanner title="Achievements" />
      
      <ContentWithSidebar sidebar={<Sidebar section={studentCornerSidebar} />}>
        <div className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#146ab5] tracking-tight">
              Student & Faculty Achievements
            </h1>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
              We take pride in our students academic excellence and co-curricular milestones. Explore our achievements, toppers list, and school pride.
            </p>
          </header>

          <AchievementsList achievements={achievementsData} />
        </div>
      </ContentWithSidebar>
    </>
  );
}
