import { Quote } from "lucide-react";
import { reviewsData } from "../data/review-data";

export function TestimonialHighlight() {
  const highlight = reviewsData[0]; // First topper
  
  if (!highlight) return null;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-brand/10" />
      <p className="text-muted-foreground text-sm italic mb-4">&ldquo;{highlight.content}&rdquo;</p>
      <div>
        <h5 className="font-bold text-foreground text-xs">{highlight.name}</h5>
        <span className="text-[10px] text-brand font-semibold">{highlight.role}</span>
      </div>
    </div>
  );
}
export default TestimonialHighlight;
