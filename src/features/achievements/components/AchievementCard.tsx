"use client";

import Image from "next/image";
import { type AchievementItem } from "../data/achievements-data";

interface AchievementCardProps {
  achievement: AchievementItem;
  idx: number;
  onImageClick: (idx: number, imageIndex: number) => void;
  onTableImageClick?: (src: string, alt: string) => void;
}

export function AchievementCard({
  achievement,
  idx,
  onImageClick,
  onTableImageClick,
}: AchievementCardProps) {
  const hasImages = achievement.images && achievement.images.length > 0;
  const hasTable = achievement.table && achievement.table.rows && achievement.table.rows.length > 0;

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

      {/* Renders normal image grids */}
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

      {/* Renders tabular achievements data (toppers tables, sports medals grid) */}
      {hasTable && achievement.table && (
        <div className="overflow-x-auto rounded-xl border border-neutral-150 mt-4 shadow-inner">
          <table className="min-w-full divide-y divide-neutral-200 text-sm">
            {achievement.table.headers && achievement.table.headers.length > 0 && (
              <thead className="bg-neutral-50/75">
                <tr>
                  {achievement.table.headers.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className="px-4 py-3 text-left font-bold text-neutral-800 border-b border-neutral-200 select-none"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-neutral-100 bg-white">
              {achievement.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-neutral-50/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-3 text-neutral-700 font-medium border-b border-neutral-100 align-middle"
                    >
                      {cell.image ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              if (onTableImageClick) {
                                onTableImageClick(cell.image!, cell.text || achievement.title);
                              }
                            }}
                            className="group relative h-14 w-12 overflow-hidden rounded-md bg-neutral-100 border border-neutral-250 transition-all hover:scale-105 active:scale-95 shadow-sm"
                            aria-label={`Zoom photo of ${cell.text}`}
                          >
                            <Image
                              src={cell.image}
                              alt={cell.text || "Topper profile photo"}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#146ab5]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                          {cell.text && <span className="font-semibold text-neutral-800">{cell.text}</span>}
                        </div>
                      ) : (
                        cell.text
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default AchievementCard;
