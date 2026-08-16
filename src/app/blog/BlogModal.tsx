"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import type { BlogPost } from "./blog-data"

interface BlogModalProps {
  post: BlogPost
  onClose: () => void
}

const languageStyles: Record<string, { label: string; classes: string }> = {
  marathi: { label: "मराठी", classes: "bg-orange-100 text-orange-800" },
  hindi: { label: "हिन्दी", classes: "bg-green-100 text-green-800" },
  english: { label: "English", classes: "bg-blue-100 text-blue-800" },
}

export function BlogModal({ post, onClose }: BlogModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  const lang = post.language ? languageStyles[post.language] : null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 py-10"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-3xl overflow-hidden rounded-xl bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {post.image && (
          <div className="relative aspect-[21/9]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              unoptimized
            />
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pb-8 pt-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-3xl font-bold leading-tight text-accent">
              {post.title}
            </h2>
            {lang && (
              <span className={`mt-1 shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ${lang.classes}`}>
                {lang.label}
              </span>
            )}
          </div>

          {post.author && (
            <p className="mt-2 text-base text-muted-foreground italic">— {post.author}</p>
          )}

          <hr className="my-6 border-border" />

          <div className="space-y-5">
            {[...post.content, ...(post.readMore || [])].map((p, i) => (
              <p
                key={i}
                className="text-base leading-8 text-foreground text-justify"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
