import { Quote } from "lucide-react";
import { reviewsData } from "../data/review-data";

export function TestimonialHighlight() {
  const highlight = reviewsData[0]; // First topper
  
  if (!highlight) return null;

  return (
    <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-6 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-[#146ab5]/10" />
      <p className="text-neutral-600 text-sm italic mb-4">&ldquo;{highlight.content}&rdquo;</p>
      <div>
        <h5 className="font-bold text-neutral-800 text-xs">{highlight.name}</h5>
        <span className="text-[10px] text-[#146ab5] font-semibold">{highlight.role}</span>
      </div>
    </div>
  );
}
export default TestimonialHighlight;
