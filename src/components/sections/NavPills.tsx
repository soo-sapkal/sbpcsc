"use client"

import { useRef, useState, type ReactNode } from "react"

interface TabConfig {
  id: string
  label: string
  content: ReactNode
}

export function NavPills({ tabs }: { tabs: TabConfig[] }) {
  const [active, setActive] = useState(tabs[0]?.id)
  const listRef = useRef<HTMLDivElement>(null)

  if (tabs.length === 0) return null

  const activate = (index: number) => {
    const clamped = (index + tabs.length) % tabs.length
    setActive(tabs[clamped].id)
    const button = listRef.current?.querySelector<HTMLButtonElement>(
      `[data-tab-id="${tabs[clamped].id}"]`,
    )
    button?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = tabs.findIndex((t) => t.id === active)
    if (e.key === "ArrowRight") {
      e.preventDefault()
      activate(currentIndex + 1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      activate(currentIndex - 1)
    } else if (e.key === "Home") {
      e.preventDefault()
      activate(0)
    } else if (e.key === "End") {
      e.preventDefault()
      activate(tabs.length - 1)
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Content sections" className="mb-4 flex flex-wrap gap-1">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              data-tab-id={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={onKeyDown}
              className={`cursor-pointer rounded-lg border-0 px-5 py-3 text-sm font-semibold tracking-wide no-underline transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                isActive
                  ? "bg-accent text-white shadow-md"
                  : "bg-transparent text-muted-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div>
        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          key={active}
          className="animate-in fade-in-0 duration-300"
        >
          {tabs.find((t) => t.id === active)?.content}
        </div>
      </div>
    </div>
  )
}