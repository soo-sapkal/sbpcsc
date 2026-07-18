"use client";

import Image from "next/image";
import { type AchievementItem } from "../data/achievements-data";

interface AchievementCardProps {
  achievement: AchievementItem;
  idx: number;
  onImageClick: (idx: number, imageIndex: number) => void;
}

export function AchievementCard({ achievement, idx, onImageClick }: AchievementCardProps) {
  const hasImages = achievement.images && achievement.images.length > 0;

  return (
    <div className="space-y-4 rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
      <div className="space-y-2 border-l-4 border-[#146ab5] pl-4">
        <h3 className="text-xl font-bold text-neutral-900">{achievement.title}</h3>
        {achievement.description && (
          <p className="text-neutral-600 text-sm leading-relaxed whitespace-pre-line">
            {achievement.description}
          </p>
        )}
      </div>

      {hasImages && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
          {achievement.images.map((img, imgIdx) => {
            const isSingle = achievement.images.length === 1;
            return (
              <button
                key={imgIdx}
                onClick={() => onImageClick(idx, imgIdx)}
                className={`group relative overflow-hidden rounded-lg bg-neutral-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#146ab5] ${
                  isSingle
                    ? "col-span-full max-w-lg aspect-video sm:aspect-[4/3] md:aspect-[16/10]"
                    : "aspect-video md:aspect-[4/3] w-full"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || achievement.title}
                  fill
                  sizes={isSingle ? "(max-width: 768px) 100vw, 512px" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#146ab5]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default AchievementCard;
