"use client"
import { useState } from "react"
import { BlogModal } from "./BlogModal"
import type { BlogPost } from "./blog-data"

interface BlogCardProps { post: BlogPost }

export function BlogCard({ post }: BlogCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const preview = post.content.find(
    (p) => p.replace(/<[^>]*>/g, "").trim().length >= 20
  )

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-bold text-accent">{post.title}</h3>
          {preview && (
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground text-justify">
              {preview.replace(/<[^>]*>/g, "")}
            </p>
          )}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 self-start rounded-lg bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
          >
            Read More
          </button>
          {post.author && (
            <p className="mt-3 text-xs font-bold text-muted-foreground">— {post.author}</p>
          )}
        </div>
      </div>
      {modalOpen && <BlogModal post={post} onClose={() => setModalOpen(false)} />}
    </>
  )
}
