"use client";

import { useState } from "react";
import { AchievementCard } from "./AchievementCard";
import { Lightbox } from "@/features/gallery";
import { type AchievementItem } from "../data/achievements-data";

interface AchievementsListProps {
  achievements: AchievementItem[];
}

export function AchievementsList({ achievements }: AchievementsListProps) {
  const [activeTab, setActiveTab] = useState<"academic" | "co-curricular">("academic");
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(-1);
  
  // Track zoomed table profile images
  const [selectedTableImage, setSelectedTableImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredAchievements = achievements.filter((item) => item.category === activeTab);

  const handleImageClick = (idx: number, imageIndex: number) => {
    setSelectedIdx(idx);
    setSelectedImgIdx(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedIdx(-1);
    setSelectedImgIdx(-1);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setSelectedImgIdx(newIndex);
  };

  const handleTableImageClick = (src: string, alt: string) => {
    setSelectedTableImage({ src, alt });
  };

  const currentAchievement = selectedIdx !== -1 ? filteredAchievements[selectedIdx] : null;

  return (
    <div className="space-y-6">
      {/* Category Selection Tabs */}
      <div className="flex border-b border-neutral-100 pb-4 justify-center gap-4">
        <button
          onClick={() => {
            setActiveTab("academic");
            handleCloseLightbox();
            setSelectedTableImage(null);
          }}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all active:scale-95 ${
            activeTab === "academic"
              ? "bg-[#146ab5] text-white shadow-sm"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          Academic Achievements
        </button>
        <button
          onClick={() => {
            setActiveTab("co-curricular");
            handleCloseLightbox();
            setSelectedTableImage(null);
          }}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all active:scale-95 ${
            activeTab === "co-curricular"
              ? "bg-[#146ab5] text-white shadow-sm"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          Co-Curricular Activities
        </button>
      </div>

      {/* Filtered Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredAchievements.map((achievement, idx) => (
          <AchievementCard
            key={idx}
            achievement={achievement}
            idx={idx}
            onImageClick={handleImageClick}
            onTableImageClick={handleTableImageClick}
          />
        ))}
      </div>

      {/* Lightbox Integration for standard grids */}
      {currentAchievement && (
        <Lightbox
          images={currentAchievement.images}
          currentIndex={selectedImgIdx}
          onClose={handleCloseLightbox}
          onNavigate={handleNavigateLightbox}
        />
      )}

      {/* Lightbox Integration for table images */}
      {selectedTableImage && (
        <Lightbox
          images={[selectedTableImage]}
          currentIndex={0}
          onClose={() => setSelectedTableImage(null)}
          onNavigate={() => {}}
        />
      )}
    </div>
  );
}
export default AchievementsList;
