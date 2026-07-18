"use client"

import { cn } from "@/lib/utils"

interface ContentWithSidebarProps {
  sidebar: React.ReactNode
  children: React.ReactNode
  sidebarWidth?: "default" | "narrow" | "wide"
  sticky?: boolean
}

export function ContentWithSidebar({
  sidebar,
  children,
  sidebarWidth = "default",
  sticky = true,
}: ContentWithSidebarProps) {
  return (
    <div className="container-wide py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside
          className={cn(
            "order-2 lg:order-1",
            sidebarWidth === "narrow" && "lg:col-span-1",
            sidebarWidth === "default" && "lg:col-span-1",
            sidebarWidth === "wide" && "lg:col-span-1",
            sticky && "lg:sticky lg:top-24 lg:self-start"
          )}
        >
          {sidebar}
        </aside>
        <main
          className={cn(
            "order-1 min-w-0 lg:order-2",
            sidebarWidth === "narrow" && "lg:col-span-3",
            sidebarWidth === "default" && "lg:col-span-3",
            sidebarWidth === "wide" && "lg:col-span-3"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
