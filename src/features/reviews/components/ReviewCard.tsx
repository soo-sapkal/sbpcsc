import { Quote, Star } from "lucide-react";
import { type Review } from "../data/review-data";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-surface p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand/30">
      {/* Accent color strip */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 ${
          review.type === "parent" ? "bg-accent" : "bg-brand"
        }`} 
      />

      <div className="flex-1">
        {/* Rating and Quote */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-0.5 text-amber-500">
            {Array.from({ length: review.rating || 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <Quote className="h-8 w-8 text-muted-foreground" />
        </div>

        {/* Testimonial Content */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-line italic">
          &ldquo;{review.content}&rdquo;
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-brand font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
          <p className="text-xs text-brand font-semibold">{review.role}</p>
          {review.batch && (
            <span className="text-[10px] text-muted-foreground font-medium">Batch: {review.batch}</span>
          )}
        </div>
      </div>
    </div>
  );
}
