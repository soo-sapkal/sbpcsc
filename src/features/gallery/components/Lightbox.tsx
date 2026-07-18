"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { type GalleryImage } from "../data/gallery-data";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while lightbox is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  if (currentIndex === -1 || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm">
      {/* Top Bar / Close Control */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={onClose}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
          aria-label="Close Lightbox"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex flex-1 w-full max-w-5xl items-center justify-center">
        {/* Navigation - Left */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* The Image */}
        <div className="relative max-h-[80vh] w-full aspect-video md:aspect-[4/3] max-w-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation - Right */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label="Next Image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Caption & Counter */}
      <div className="mt-4 text-center max-w-2xl">
        <p className="text-white text-sm md:text-base font-medium">
          {currentImage.alt}
        </p>
        <span className="mt-1 block text-neutral-400 text-xs">
          Image {currentIndex + 1} of {images.length}
        </span>
      </div>
    </div>
  );
}
