"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    media.addEventListener("change", listener)
    
    // Avoid calling setState synchronously during render/effect hook execution
    const timeout = setTimeout(() => {
      setMatches(media.matches)
    }, 0)

    return () => {
      clearTimeout(timeout)
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}
