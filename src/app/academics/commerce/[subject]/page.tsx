import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ContentWithSidebar } from "@/components/layouts/ContentWithSidebar";
import { PageBanner } from "@/components/sections/PageBanner";
import { Sidebar } from "@/features/navigation";
import { academicsSidebar } from "@/features/navigation/data/sidebar-links";
import {
  subjectsData,
  SubjectAbout,
  FacultyList,
  SubjectTabs,
} from "@/features/academics";

// Map slugs to subject IDs in JSON
const slugMap: Record<string, string> = {
  secretarial: "sp",
  sp: "sp",
  account: "account",
  economics: "economics",
  it: "it",
  math: "math",
  english: "english",
  hindi: "hindi",
  marathi: "marathi",
  ocm: "ocm",
};

interface PageProps {
  params: Promise<{
    subject: string;
  }>;
}

// Generate static routes for all subjects (SSG)
export async function generateStaticParams() {
  return [
    { subject: "secretarial" },
    { subject: "sp" },
    { subject: "account" },
    { subject: "economics" },
    { subject: "it" },
    { subject: "math" },
    { subject: "english" },
    { subject: "hindi" },
    { subject: "marathi" },
    { subject: "ocm" },
  ];
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.subject.toLowerCase();
  const subjectId = slugMap[slug] || slug;
  const subject = subjectsData.find((s) => s.id === subjectId);

  if (!subject) {
    return {
      title: "Subject Not Found",
    };
  }

  return {
    title: `${subject.title} - Commerce Department`,
    description: `Explore the ${subject.title} subject details, curriculum resources, and faculty profiles at S. B. Patil College of Science and Commerce.`,
  };
}

export default async function SubjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.subject.toLowerCase();
  const subjectId = slugMap[slug] || slug;
  const subject = subjectsData.find((s) => s.id === subjectId);

  if (!subject) {
    notFound();
  }

  return (
    <>
      <PageBanner title={`${subject.title}`} />

      <ContentWithSidebar sidebar={<Sidebar section={academicsSidebar} />}>
        <div className="space-y-10">
          {/* Main header block */}
          <header className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#146ab5]">
              Academics / Commerce Department
            </span>
            <h1 className="text-3xl font-extrabold text-[#146ab5] tracking-tight">
              {subject.title}
            </h1>
          </header>

          {/* About/Importance section */}
          <section className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
            <SubjectAbout about={subject.about} subjectTitle={subject.title} />
          </section>

          {/* Faculty section */}
          {subject.faculty && subject.faculty.length > 0 && (
            <section className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
              <FacultyList faculty={subject.faculty} />
            </section>
          )}

          {/* Tabbed resources area */}
          <section className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="space-y-2 border-l-4 border-[#146ab5] pl-4 mb-4">
                <h2 className="text-2xl font-bold text-neutral-800">Resources & Downloads</h2>
              </div>
              <SubjectTabs
                syllabus={subject.syllabus}
                questionPapers={subject.questionPapers}
                downloads={subject.downloads}
              />
            </div>
          </section>
        </div>
      </ContentWithSidebar>
    </>
  );
}
