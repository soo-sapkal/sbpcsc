"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { BookOpen, Users, FileText, ClipboardList, Download, Calendar } from "lucide-react"
import { SubjectAbout } from "./SubjectAbout"
import { FacultyList } from "./FacultyList"
import { SyllabusTab } from "./SyllabusTab"
import { QuestionPapersTab } from "./QuestionPapersTab"
import { DownloadsTab } from "./DownloadsTab"
import { TeachingPlanTab } from "./TeachingPlanTab"
import type { Subject } from "@/types/subject"

interface SubjectTabsProps {
  subject: Subject
}

export function SubjectTabs({ subject }: SubjectTabsProps) {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="mb-8 w-full flex-wrap">
        <TabsTrigger value="about">
          <BookOpen className="mr-1.5 h-4 w-4" />
          About
        </TabsTrigger>
        <TabsTrigger value="faculty">
          <Users className="mr-1.5 h-4 w-4" />
          Faculty
        </TabsTrigger>
        <TabsTrigger value="syllabus">
          <FileText className="mr-1.5 h-4 w-4" />
          Syllabus
        </TabsTrigger>
        <TabsTrigger value="papers">
          <ClipboardList className="mr-1.5 h-4 w-4" />
          Question Papers
        </TabsTrigger>
        <TabsTrigger value="downloads">
          <Download className="mr-1.5 h-4 w-4" />
          Downloads
        </TabsTrigger>
        <TabsTrigger value="plan">
          <Calendar className="mr-1.5 h-4 w-4" />
          Teaching Plan
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about">
        <SubjectAbout subject={subject} />
      </TabsContent>
      <TabsContent value="faculty">
        <FacultyList faculty={subject.faculty} stream={subject.stream} subjectName={subject.name} />
      </TabsContent>
      <TabsContent value="syllabus">
        <SyllabusTab subject={subject} />
      </TabsContent>
      <TabsContent value="papers">
        <QuestionPapersTab subject={subject} />
      </TabsContent>
      <TabsContent value="downloads">
        <DownloadsTab subject={subject} />
      </TabsContent>
      <TabsContent value="plan">
        <TeachingPlanTab subject={subject} />
      </TabsContent>
    </Tabs>
  )
}
