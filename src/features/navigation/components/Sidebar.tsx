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
      <div className="bg-[#146ab5] px-5 py-4">
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
                  className={`flex w-full items-center justify-between px-5 py-3.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 ${
                    link.children?.some((child) => child.href === pathname)
                      ? "text-[#146ab5]"
                      : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#146ab5]" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="bg-neutral-50/50 pb-2 pl-4 flex flex-col divide-y divide-transparent">
                    {link.children!.map((child, cIdx) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={cIdx}
                          href={child.href}
                          className={`block py-2.5 px-5 text-xs font-medium transition-colors border-l-2 ${
                            isChildActive
                              ? "text-[#146ab5] border-[#146ab5] font-bold"
                              : "text-neutral-500 hover:text-[#146ab5] border-transparent"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={idx}
              href={link.href}
              className={`block px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${
                isActive
                  ? "bg-[#cf2b1f]/5 border-[#cf2b1f] text-[#cf2b1f]"
                  : "border-transparent text-neutral-700 hover:bg-neutral-50 hover:text-[#146ab5]"
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
