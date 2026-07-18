"use client";

import { useState } from "react";
import { type ResourceLink } from "../data/academics-data";
import { FileText, Download, GraduationCap, BookOpen, Files } from "lucide-react";

interface SubjectTabsProps {
  syllabus: ResourceLink[];
  questionPapers: ResourceLink[];
  downloads: ResourceLink[];
}

export function SubjectTabs({ syllabus, questionPapers, downloads }: SubjectTabsProps) {
  const [activeTab, setActiveTab] = useState<"syllabus" | "papers" | "downloads">("syllabus");

  const normalizeHref = (href: string) => {
    let fileHref = href || "";
    if (fileHref) {
      if (!fileHref.startsWith("/pdf/commerce/") && fileHref.startsWith("/pdf/")) {
        fileHref = "/pdf/commerce" + fileHref.substring(4);
      }
    }
    return fileHref;
  };

  const tabs = [
    { id: "syllabus" as const, label: "Syllabus", icon: GraduationCap, count: syllabus.length, data: syllabus },
    { id: "papers" as const, label: "Question Papers", icon: Files, count: questionPapers.length, data: questionPapers },
    { id: "downloads" as const, label: "Downloads & Textbooks", icon: BookOpen, count: downloads.length, data: downloads },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="space-y-6">
      {/* Tab Switcher Headers */}
      <div className="flex flex-col sm:flex-row border-b border-neutral-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-between sm:justify-start gap-2 border-b-2 px-5 py-3 text-sm font-bold uppercase transition-all focus:outline-none ${
                isActive
                  ? "border-[#146ab5] text-[#146ab5]"
                  : "border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </div>
              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-xs font-extrabold ${
                  isActive ? "bg-[#146ab5]/10 text-[#146ab5]" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of PDF downloads */}
      {currentTab.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentTab.data.map((resource, idx) => {
            const finalHref = normalizeHref(resource.href);
            return (
              <a
                key={idx}
                href={finalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-neutral-150 bg-white p-4 shadow-sm hover:border-[#146ab5] hover:shadow-md transition-all duration-300"
              >
                {/* File Icon wrapper */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 group-hover:bg-[#146ab5]/10 group-hover:text-[#146ab5] transition-colors border border-red-100 group-hover:border-blue-100">
                  <FileText className="h-6 w-6" />
                </div>

                {/* Resource Info */}
                <div className="flex-1 space-y-1 min-w-0">
                  <h4 className="text-sm font-bold text-neutral-800 line-clamp-2 leading-snug group-hover:text-[#146ab5] transition-colors">
                    {resource.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 group-hover:text-[#146ab5]/80 transition-colors">
                    <Download className="h-3 w-3" />
                    <span>Download PDF</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 rounded-xl border border-dashed border-neutral-250 bg-neutral-50/50 text-neutral-600 font-semibold text-sm">
          No resources uploaded for this tab yet.
        </div>
      )}
    </div>
  );
}
export default SubjectTabs;
