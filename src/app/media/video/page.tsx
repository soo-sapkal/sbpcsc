import { Metadata } from "next";
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar";
import { PageBanner } from "@/components/sections/PageBanner";
import { Sidebar } from "@/features/navigation";
import { mediaSidebar } from "@/features/navigation/data/sidebar-links";
import { VideoPageContent, videoData } from "@/features/video";

export const metadata: Metadata = {
  title: "Campus Video Gallery",
  description: "Watch videos showcasing student life, campus activities, principal messages, and events at S. B. Patil College of Science and Commerce.",
};

export default function VideoPage() {
  return (
    <>
      <PageBanner title="Video Gallery" />
      
      <ContentWithSidebar sidebar={<Sidebar section={mediaSidebar} />}>
        <div className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#146ab5] tracking-tight">
              Campus Videos & Highlights
            </h1>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Explore our YouTube video collection showcasing annual gatherings, cultural events, guidance workshops, and campus activities.
            </p>
          </header>

          <VideoPageContent videos={videoData} />
        </div>
      </ContentWithSidebar>
    </>
  );
}
