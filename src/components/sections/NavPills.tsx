"use client"

import { useState, type ReactNode } from "react"

interface TabConfig {
  id: string
  label: string
  content: ReactNode
}

export function NavPills({ tabs }: { tabs: TabConfig[] }) {
  const [active, setActive] = useState(tabs[0]?.id)

  return (
    <div className="nav-tab-section">
      <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActive(tab.id)}
              className={`cursor-pointer rounded-lg border-0 px-5 py-3 text-sm font-semibold tracking-wide no-underline transition-all duration-200 ${
                active === tab.id
                  ? "bg-[#cf2b1f] text-white shadow-md"
                  : "bg-transparent text-gray-500 hover:bg-red-50 hover:text-[#cf2b1f]"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  )
}
