import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar";
import { PageBanner } from "@/components/sections/PageBanner";
import { Sidebar } from "@/features/navigation";
import { studentCornerSidebar } from "@/features/navigation/data/sidebar-links";
import { GalleryGrid, GalleryYearNav, guestLecturesData } from "@/features/gallery";

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return guestLecturesData.map((d) => ({
    year: d.year,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `Guest Lectures Gallery (${year})`,
    description: `Explore guest lectures, expert seminars, and career guidance programs conducted at S. B. Patil College of Science and Commerce for the year ${year}.`,
  };
}

export default async function GuestLecturesYearPage({ params }: PageProps) {
  const { year } = await params;
  const currentData = guestLecturesData.find((d) => d.year === year);

  if (!currentData) {
    notFound();
  }

  const years = guestLecturesData.map((d) => d.year);

  return (
    <>
      <PageBanner title="Guest Lectures" />
      
      <ContentWithSidebar sidebar={<Sidebar section={studentCornerSidebar} />}>
        <div className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#146ab5] tracking-tight">
              Guest Lectures & Seminars ({year})
            </h1>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Explore guidance seminars, health camps, cyber security sessions, and expert interactions organized for our Junior College students during the academic year {year}.
            </p>
          </header>

          {/* Year Pills Navigation */}
          <GalleryYearNav
            years={years}
            currentYear={year}
            basePath="/gallery/guest-lectures"
          />

          {/* Events Grid */}
          <GalleryGrid events={currentData.events} />
        </div>
      </ContentWithSidebar>
    </>
  );
}
