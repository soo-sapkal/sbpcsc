"use client";

import Image from "next/image";
import { type GalleryEvent } from "../data/gallery-data";

interface GalleryCardProps {
  event: GalleryEvent;
  eventIndex: number;
  onImageClick: (eventIndex: number, imageIndex: number) => void;
}

export function GalleryCard({ event, eventIndex, onImageClick }: GalleryCardProps) {
  return (
    <div className="space-y-4 rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
      <div className="space-y-2 border-l-4 border-[#146ab5] pl-4">
        <h3 className="text-xl font-bold text-neutral-900">{event.title}</h3>
        {event.description && (
          <p className="text-neutral-600 text-sm leading-relaxed whitespace-pre-line">
            {event.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
        {event.images.map((img, imgIdx) => (
          <button
            key={imgIdx}
            onClick={() => onImageClick(eventIndex, imgIdx)}
            className="group relative aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#146ab5]"
          >
            <Image
              src={img.src}
              alt={img.alt || event.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Hover Overlay */}
            <div className="absolute inset-0 bg-[#146ab5]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>
    </div>
  );
}
export default GalleryCard;
