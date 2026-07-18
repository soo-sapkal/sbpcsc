"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/features/gallery";
import { type NewsletterYear } from "../data/newsletter-data";

interface NewsletterPageContentProps {
  newsletterYears: NewsletterYear[];
}

export function NewsletterPageContent({ newsletterYears }: NewsletterPageContentProps) {
  // Set default active year to the first one available
  const [activeYear, setActiveYear] = useState<string>(
    newsletterYears[0]?.year || ""
  );
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(-1);

  const currentYearData = newsletterYears.find((d) => d.year === activeYear);
  const clippings = currentYearData?.clippings || [];

  const handleImageClick = (idx: number) => {
    setSelectedImgIdx(idx);
  };

  const handleCloseLightbox = () => {
    setSelectedImgIdx(-1);
  };

  const handleNavigateLightbox = (newIdx: number) => {
    setSelectedImgIdx(newIdx);
  };

  return (
    <div className="space-y-6">
      {/* Year Tabs Selector */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-100 pb-4 justify-center">
        {newsletterYears.map((d) => (
          <button
            key={d.year}
            onClick={() => {
              setActiveYear(d.year);
              handleCloseLightbox();
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all active:scale-95 ${
              activeYear === d.year
                ? "bg-[#146ab5] text-white shadow-sm"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {d.year}
          </button>
        ))}
      </div>

      {/* Grid of Clippings */}
      {clippings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
          {clippings.map((clip, idx) => (
            <button
              key={idx}
              onClick={() => handleImageClick(idx)}
              className="group relative aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-100 bg-white p-2 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#146ab5]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-50">
                <Image
                  src={clip.src}
                  alt={clip.alt || `News Clipping ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#146ab5]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-neutral-400">
          No news clippings found for this academic year.
        </div>
      )}

      {/* Lightbox Overlay */}
      {selectedImgIdx !== -1 && clippings[selectedImgIdx] && (
        <Lightbox
          images={clippings}
          currentIndex={selectedImgIdx}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}
export default NewsletterPageContent;
