"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { type Review } from "../data/review-data";

interface TestimonialCarouselProps {
  reviews: Review[];
}

export function TestimonialCarousel({ reviews }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const featuredReviews = reviews.filter(
    (r) => r.role.includes("Topper") || r.id === "1" || r.id === "5"
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, featuredReviews.length]);

  if (featuredReviews.length === 0) return null;

  const current = featuredReviews[activeIndex];

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand/10 via-white to-accent/5 border border-brand/15 p-8 md:p-12 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quote icon */}
      <div className="absolute top-6 left-6 opacity-5">
        <Quote className="h-24 w-24 text-brand" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto min-h-[300px] justify-center">
        {/* Rating */}
        <div className="flex gap-1 mb-4 text-amber-500 justify-center">
          {Array.from({ length: current.rating || 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-lg md:text-xl font-medium text-foreground italic leading-relaxed mb-8">
          &ldquo;{current.content}&rdquo;
        </blockquote>

        {/* Profile Details */}
        <div className="flex flex-col items-center mt-auto">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-bold text-lg mb-3 shadow-sm">
            {current.name.charAt(0)}
          </div>
          <cite className="not-italic">
            <span className="block font-bold text-foreground text-base">{current.name}</span>
            <span className="block text-sm text-accent font-bold uppercase tracking-wider mt-0.5">
              {current.role}
            </span>
            {current.batch && (
              <span className="block text-xs text-muted-foreground font-medium mt-0.5">
                Batch: {current.batch}
              </span>
            )}
          </cite>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-border text-muted-foreground shadow-sm transition-all hover:bg-brand hover:text-white hover:border-brand active:scale-95"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-border text-muted-foreground shadow-sm transition-all hover:bg-brand hover:text-white hover:border-brand active:scale-95"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {featuredReviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-brand" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
