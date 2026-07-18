"use client";

import Link from "next/link";

interface GalleryYearNavProps {
  years: string[];
  currentYear: string;
  basePath: string;
}

export function GalleryYearNav({ years, currentYear, basePath }: GalleryYearNavProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 border-b border-neutral-100 pb-6 mb-8">
      {years.map((year) => {
        const isActive = year === currentYear;
        return (
          <Link
            key={year}
            href={`${basePath}/${year}`}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all active:scale-95 ${
              isActive
                ? "bg-[#146ab5] text-white shadow-sm"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {year}
          </Link>
        );
      })}
    </div>
  );
}
export default GalleryYearNav;
