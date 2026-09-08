import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar";
import { PageBanner } from "@/components/sections/PageBanner";
import { Sidebar } from "@/features/navigation";
import { studentCornerSidebar } from "@/features/navigation/data/sidebar-links";
import { GalleryGrid, GalleryYearNav, activitiesData } from "@/features/gallery";

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return activitiesData.map((d) => ({
    year: d.year,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `Activities Gallery (${year})`,
    description: `Explore photos from annual events, sports activities, Republic Day celebrations, and other campus activities at S. B. Patil College of Science and Commerce for the year ${year}.`,
  };
}

export default async function ActivitiesYearPage({ params }: PageProps) {
  const { year } = await params;
  const currentData = activitiesData.find((d) => d.year === year);

  if (!currentData) {
    notFound();
  }

  const years = activitiesData.map((d) => d.year);

  return (
    <>
      <PageBanner title="Activities Gallery" />
      
      <ContentWithSidebar sidebar={<Sidebar section={studentCornerSidebar} />}>
        <div className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#146ab5] tracking-tight">
              Activities & Events ({year})
            </h1>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
              Explore various co-curricular activities, cultural fests, days celebrations, and workshops conducted during the academic year {year}.
            </p>
          </header>

          {/* Year Pills Navigation */}
          <GalleryYearNav
            years={years}
            currentYear={year}
            basePath="/gallery/activities"
          />

          {/* Events Grid */}
          <GalleryGrid events={currentData.events} />
        </div>
      </ContentWithSidebar>
    </>
  );
}
