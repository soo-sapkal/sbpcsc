"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { type SidebarSection } from "@/types/navigation";

interface SidebarProps {
  section: SidebarSection;
}

export function Sidebar({ section }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    // Automatically expand sections that contain the active path
    const initial: Record<string, boolean> = {};
    section.links.forEach((link) => {
      if (link.children) {
        const hasActiveChild = link.children.some((child) => child.href === pathname);
        if (hasActiveChild) {
          initial[link.label] = true;
        }
      }
    });
    return initial;
  });

  const toggleExpand = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="w-full rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
      <div className="bg-brand px-5 py-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{section.title}</h3>
      </div>
      <nav className="divide-y divide-neutral-100">
        {section.links.map((link, idx) => {
          const hasChildren = link.children && link.children.length > 0;
          const isActive = pathname === link.href;
          const isExpanded = expandedSections[link.label];

          if (hasChildren) {
            return (
              <div key={idx} className="flex flex-col">
                <button
                  onClick={() => toggleExpand(link.label)}
                  aria-expanded={isExpanded}
                  aria-controls={`sidebar-panel-${idx}`}
                  id={`sidebar-trigger-${idx}`}
                  className={`flex w-full items-center justify-between border-l-4 border-accent/30 px-5 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted ${
                    link.children?.some((child) => child.href === pathname)
                      ? "text-accent"
                      : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <div
                  id={`sidebar-panel-${idx}`}
                  role="region"
                  aria-labelledby={`sidebar-trigger-${idx}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-3 my-2 rounded-lg bg-accent/10 p-2 flex flex-col gap-0.5">
                      {link.children!.map((child, cIdx) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className={`block rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                              isChildActive
                                ? "bg-accent text-white"
                                : "text-muted-foreground hover:bg-accent/10 hover:text-accent"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={idx}
              href={link.href}
              className={`block px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${
                isActive
                  ? "bg-accent/5 border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:bg-muted hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
