"use client";

import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { type Review } from "../data/review-data";

interface TestimonialListProps {
  reviews: Review[];
}

type FilterType = "all" | "science" | "commerce" | "parents";

export function TestimonialList({ reviews }: TestimonialListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredReviews = reviews.filter((review) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "science") return review.type === "student" && review.stream === "science";
    if (activeFilter === "commerce") return review.type === "student" && review.stream === "commerce";
    if (activeFilter === "parents") return review.type === "parent";
    return true;
  });

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All Reviews", value: "all" },
    { label: "Science Students", value: "science" },
    { label: "Commerce Students", value: "commerce" },
    { label: "Parents", value: "parents" },
  ];

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-neutral-100 pb-6">
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setActiveFilter(btn.value)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all active:scale-95 ${
              activeFilter === btn.value
                ? "bg-[#146ab5] text-white shadow-sm"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-neutral-500">
          No reviews found in this category.
        </div>
      )}
    </div>
  );
}
