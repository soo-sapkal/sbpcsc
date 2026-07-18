"use client";

import Image from "next/image";
import { type FacultyItem } from "../data/academics-data";
import { FileText, Mail } from "lucide-react";

interface FacultyListProps {
  faculty: FacultyItem[];
}

export function FacultyList({ faculty }: FacultyListProps) {
  if (!faculty || faculty.length === 0) {
    return (
      <div className="text-center py-6 text-neutral-500 font-medium">
        No faculty profile details available for this department.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 border-l-4 border-[#146ab5] pl-4">
        <h2 className="text-2xl font-bold text-neutral-800">Faculty Profiles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faculty.map((member, idx) => {
          // Normalize photo path to public/images/commerce/faculty/
          let photoSrc = member.image || "";
          if (photoSrc) {
            if (!photoSrc.startsWith("/images/commerce/") && photoSrc.startsWith("/images/")) {
              photoSrc = "/images/commerce" + photoSrc.substring(7);
            }
          }
          if (!photoSrc) {
            photoSrc = "/images/commerce/faculty/default.jpg"; // Placeholder
          }

          // Normalize CV path to public/pdf/commerce/
          let cvHref = member.cvLink || "";
          if (cvHref) {
            if (!cvHref.startsWith("/pdf/commerce/") && cvHref.startsWith("/pdf/")) {
              cvHref = "/pdf/commerce" + cvHref.substring(4);
            }
          }

          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center gap-6 rounded-xl border border-neutral-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Profile Image Container */}
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-neutral-50 border border-neutral-200 shadow-inner">
                <Image
                  src={photoSrc}
                  alt={member.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              {/* Faculty Info */}
              <div className="flex-1 space-y-2 text-center sm:text-left min-w-0">
                <h3 className="text-lg font-bold text-neutral-900 truncate">{member.name}</h3>

                {member.experience && (
                  <p className="text-sm font-semibold text-neutral-600">
                    Experience: <span className="text-neutral-800">{member.experience}</span>
                  </p>
                )}

                {member.email && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-neutral-600 font-semibold truncate">
                    <Mail className="h-4 w-4 text-[#146ab5]" />
                    <span className="truncate">{member.email}</span>
                  </div>
                )}

                {cvHref && (
                  <div className="pt-2">
                    <a
                      href={cvHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-bold text-neutral-700 hover:bg-[#146ab5] hover:text-white transition-colors border border-neutral-200"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View Profile CV
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FacultyList;
