"use client";

import Image from "next/image";
import { type SubjectAboutData } from "../data/academics-data";

interface SubjectAboutProps {
  about: SubjectAboutData;
  subjectTitle: string;
}

export function SubjectAbout({ about, subjectTitle }: SubjectAboutProps) {
  const hasPoints = about.points && about.points.length > 0;
  const hasParagraphs = about.paragraphs && about.paragraphs.length > 0;

  // Helper to ensure clean absolute image paths
  let imageSrc = about.image || "";
  if (imageSrc && !imageSrc.startsWith("/")) {
    imageSrc = "/" + imageSrc;
  }
  imageSrc = imageSrc.replace("//", "/");

  // Fallback to commerce-specific images if present under /images/commerce/
  if (imageSrc.startsWith("/images/") && !imageSrc.startsWith("/images/commerce/")) {
    imageSrc = "/images/commerce" + imageSrc.substring(7);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 border-l-4 border-[#146ab5] pl-4">
        <h2 className="text-2xl font-bold text-neutral-800">
          {about.title || `About ${subjectTitle}`}
        </h2>
      </div>

      {hasPoints && (
        <ol className="list-decimal pl-5 space-y-3 text-neutral-750 font-medium">
          {about.points.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ol>
      )}

      {/* Main Subject Illustration / Graphic */}
      {imageSrc && (
        <div className="flex justify-center py-4">
          <div className="relative w-full max-w-xl aspect-[16/10] overflow-hidden rounded-xl border border-neutral-100 shadow-sm bg-neutral-50">
            <Image
              src={imageSrc}
              alt={about.title || `${subjectTitle} Illustration`}
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-contain p-2"
              priority
            />
          </div>
        </div>
      )}

      {hasParagraphs && (
        <div className="space-y-4 text-neutral-750 font-medium leading-relaxed">
          {about.paragraphs.map((para, idx) => (
            <p key={idx} className="text-justify whitespace-pre-line">
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default SubjectAbout;
