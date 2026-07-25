"use client"

import type { SubjectConfig } from "@/data/subjects"
import { NavPills } from "@/components/sections/NavPills"
import { SubjectAbout } from "./SubjectAbout"
import { FacultyList } from "./FacultyList"
import { SyllabusTab } from "./SyllabusTab"
import { QuestionPapersTab } from "./QuestionPapersTab"
import { DownloadsTab } from "./DownloadsTab"
import { TeachingPlanTab } from "./TeachingPlanTab"

interface SubjectTabsProps {
  subject: SubjectConfig
}

export function SubjectTabs({ subject }: SubjectTabsProps) {
  const tabs: { id: string; label: string; content: React.ReactNode }[] = []

  tabs.push({
    id: "about",
    label: `About ${subject.name}`,
    content: <SubjectAbout subject={subject} />,
  })

  if (subject.faculty.length > 0) {
    tabs.push({
      id: "faculty",
      label: "Faculty",
      content: <FacultyList faculty={subject.faculty} labAssistants={subject.labAssistants} stream={subject.stream} subjectName={subject.name} />,
    })
  }

  if (subject.hasLaboratories) {
    tabs.push({
      id: "laboratories",
      label: "Laboratories",
      content: <p>Laboratory content coming soon.</p>,
    })
  }

  if (subject.syllabusPdfs && subject.syllabusPdfs.length > 0) {
    tabs.push({
      id: "syllabus",
      label: "Syllabus",
      content: (
        <>
          <TeachingPlanTab syllabusPdfs={subject.syllabusPdfs} />
        </>
      ),
    })
  }

  if (subject.questionPapers && subject.questionPapers.length > 0) {
    tabs.push({
      id: "papers",
      label: "Question Papers",
      content: <QuestionPapersTab questionPapers={subject.questionPapers} />,
    })
  }

  if (subject.hasCompetition) {
    tabs.push({
      id: "competition",
      label: "Competition",
      content: <p>Competition content coming soon.</p>,
    })
  }

  if (subject.downloads && subject.downloads.length > 0) {
    tabs.push({
      id: "downloads",
      label: "Downloads",
      content: <DownloadsTab downloads={subject.downloads} />,
    })
  }

  return (
    <div className="nav-tab-section">
      <NavPills tabs={tabs} />
    </div>
  )
}
