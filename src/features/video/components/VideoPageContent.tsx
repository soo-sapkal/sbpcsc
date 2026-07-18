"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { type VideoItem } from "../data/video-data";

interface VideoPageContentProps {
  videos: VideoItem[];
}

export function VideoPageContent({ videos }: VideoPageContentProps) {
  // Track which videos have been clicked and are now active/playing
  const [playingIndices, setPlayingIndices] = useState<Record<number, boolean>>({});

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(embed\/|v\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handlePlay = (idx: number) => {
    setPlayingIndices((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
      {videos.map((video, idx) => {
        const videoId = getYouTubeId(video.src);
        const isPlaying = playingIndices[idx];
        const thumbnailUrl = videoId
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : null;

        return (
          <div
            key={idx}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-900">
              {isPlaying || !thumbnailUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${video.src}${video.src.includes("?") ? "&" : "?"}autoplay=1`}
                  title={video.title || "YouTube video player"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              ) : (
                <button
                  onClick={() => handlePlay(idx)}
                  className="relative h-full w-full focus:outline-none"
                  aria-label={`Play video: ${video.title}`}
                >
                  <Image
                    src={thumbnailUrl}
                    alt={video.title || "Video thumbnail"}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#146ab5]/90 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#146ab5]">
                      <Play className="ml-1 h-6 w-6 fill-current" />
                    </div>
                  </div>
                </button>
              )}
            </div>
            {/* Title / Description */}
            <div className="p-3">
              <h3 className="line-clamp-2 text-sm font-semibold text-neutral-800 leading-snug">
                {video.title || "SBPCSC Event Video"}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default VideoPageContent;
