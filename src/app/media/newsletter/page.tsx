import { Metadata } from "next";
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar";
import { PageBanner } from "@/components/sections/PageBanner";
import { Sidebar } from "@/features/navigation";
import { mediaSidebar } from "@/features/navigation/data/sidebar-links";
import { NewsletterPageContent, newsletterData } from "@/features/newsletter";

export const metadata: Metadata = {
  title: "Media Newsletter & Press Clippings",
  description: "Browse news articles, achievements publications, press coverage, and campus updates for S. B. Patil College of Science and Commerce.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageBanner title="Newsletter" />
      
      <ContentWithSidebar sidebar={<Sidebar section={mediaSidebar} />}>
        <div className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#146ab5] tracking-tight">
              Media Coverage & Newsletters
            </h1>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Stay updated with our latest media achievements, newspaper publications, and academic announcements covered in major press journals.
            </p>
          </header>

          <NewsletterPageContent newsletterYears={newsletterData} />
        </div>
      </ContentWithSidebar>
    </>
  );
}
