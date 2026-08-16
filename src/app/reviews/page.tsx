import { Metadata } from "next";
import { PageBanner } from "@/components/sections/PageBanner";
import { TestimonialCarousel, TestimonialList, reviewsData } from "@/features/reviews";

export const metadata: Metadata = {
  title: "Testimonials & Reviews",
  description: "Read authentic feedback, reviews, and success stories from toppers, students, and parents of S. B. Patil College of Science and Commerce (SBPCSC), Ravet Pune.",
  keywords: [
    "SBPCSC reviews",
    "S.B. Patil Junior College Ravet reviews",
    "PCET junior college reviews",
    "best junior college in Pune reviews",
    "science stream toppers feedback",
    "commerce stream reviews SBPCSC",
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <PageBanner title="Testimonials" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-brand tracking-tight">
              What Students & Parents Say
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
              At S.B. Patil College of Science and Commerce, we are committed to providing an enriching academic environment, state-of-the-art infrastructure, and dedicated mentorship. Here is the feedback and success stories shared by our toppers, students, and parents.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider border-l-4 border-accent pl-3">
              Featured Topper Reviews
            </h2>
            <TestimonialCarousel reviews={reviewsData} />
          </section>

          <section className="space-y-6 pt-4">
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wider border-l-4 border-brand pl-3">
              All Testimonials & Feedback
            </h2>
            <TestimonialList reviews={reviewsData} />
          </section>
        </div>
      </div>
    </>
  );
}
