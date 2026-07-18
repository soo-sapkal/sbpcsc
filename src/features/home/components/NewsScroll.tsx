"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { newsItems } from "@/features/home/data/news-items"

export function NewsScroll() {
  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ul = ulRef.current
    if (!ul) return

    let animationId: number
    let scrollPos = 0

    const step = () => {
      scrollPos += 0.5
      ul.scrollTop = scrollPos
      if (scrollPos >= ul.scrollHeight - ul.clientHeight) {
        scrollPos = 0
      }
      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="sbpcsc-news-scroll max-h-64 overflow-hidden">
      <ul ref={ulRef} className="m-0 list-none overflow-hidden p-0" style={{ height: "220px" }}>
        {newsItems.map((item, i) => (
          <li key={i} className="flex items-start gap-2 border-b border-dashed border-[#38a361] p-[10px]">
            <span className="shrink-0">
              <Image
                src="/images/new.gif"
                alt="NEW"
                width={24}
                height={10}
                className="inline"
                unoptimized
              />
            </span>
            <a
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className={
                item.className === "spotlight_red"
                  ? "font-medium text-red-600 hover:underline"
                  : "font-medium text-blue-600 hover:underline"
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
