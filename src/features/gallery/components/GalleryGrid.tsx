"use client";

import { useState } from "react";
import { GalleryCard } from "./GalleryCard";
import { Lightbox } from "./Lightbox";
import { type GalleryEvent } from "../data/gallery-data";

interface GalleryGridProps {
  events: GalleryEvent[];
}

export function GalleryGrid({ events }: GalleryGridProps) {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number>(-1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);

  const handleImageClick = (eventIndex: number, imageIndex: number) => {
    setSelectedEventIndex(eventIndex);
    setSelectedImageIndex(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedEventIndex(-1);
    setSelectedImageIndex(-1);
  };

  const handleNavigateLightbox = (newImageIndex: number) => {
    setSelectedImageIndex(newImageIndex);
  };

  const currentEvent = selectedEventIndex !== -1 ? events[selectedEventIndex] : null;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8">
        {events.map((event, idx) => (
          <GalleryCard
            key={idx}
            event={event}
            eventIndex={idx}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {currentEvent && (
        <Lightbox
          images={currentEvent.images}
          currentIndex={selectedImageIndex}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}
export default GalleryGrid;
