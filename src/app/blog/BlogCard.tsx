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
      <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-bold text-[#cf2b1f]">{post.title}</h3>
          {preview && (
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-600 text-justify">
              {preview.replace(/<[^>]*>/g, "")}
            </p>
          )}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 self-start rounded-lg bg-[#cf2b1f] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
          >
            Read More
          </button>
          {post.author && (
            <p className="mt-3 text-xs font-bold text-gray-500">— {post.author}</p>
          )}
        </div>
      </div>
      {modalOpen && <BlogModal post={post} onClose={() => setModalOpen(false)} />}
    </>
  )
}
