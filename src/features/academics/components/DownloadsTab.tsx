"use client"

import { motion } from "framer-motion"
import { FileText, Download, BookOpen, FileSpreadsheet, FileImage, FolderOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Subject } from "@/types/subject"
import type { PDFEntry } from "@/types/pdf"

interface DownloadsTabProps {
  subject: Subject
}

interface DownloadCategory {
  title: string
  icon: typeof FileText
  description: string
  files: { title: string; path: string; format: string }[]
}

function buildDownloads(subject: Subject): DownloadCategory[] {
  const stream = subject.stream
  const basePath = `/pdf/${stream}/${subject.id}`

  const categories: DownloadCategory[] = [
    {
      title: "Notes",
      icon: BookOpen,
      description: "Chapter-wise study notes and revision materials",
      files: [
        { title: "Complete Study Notes", path: `${basePath}/notes/complete-notes.pdf`, format: "PDF" },
        { title: "Chapter-wise Summary", path: `${basePath}/notes/chapter-summary.pdf`, format: "PDF" },
        { title: "Formula Sheet", path: `${basePath}/notes/formula-sheet.pdf`, format: "PDF" },
        { title: "Important Definitions", path: `${basePath}/notes/definitions.pdf`, format: "PDF" },
      ],
    },
    {
      title: "Assignments",
      icon: FileSpreadsheet,
      description: "Practice assignments and worksheets",
      files: [
        { title: "Assignment Set 1", path: `${basePath}/assignments/assignment-1.pdf`, format: "PDF" },
        { title: "Assignment Set 2", path: `${basePath}/assignments/assignment-2.pdf`, format: "PDF" },
        { title: "Practice Problems", path: `${basePath}/assignments/practice-problems.pdf`, format: "PDF" },
        { title: "Revision Worksheet", path: `${basePath}/assignments/revision-worksheet.pdf`, format: "PDF" },
      ],
    },
    {
      title: "Reference Material",
      icon: FolderOpen,
      description: "Additional reference books and resources",
      files: [
        { title: "Reference Book List", path: `${basePath}/references/book-list.pdf`, format: "PDF" },
        { title: "Online Resources Guide", path: `${basePath}/references/online-resources.pdf`, format: "PDF" },
        { title: "Previous Year Trends", path: `${basePath}/references/exam-trends.pdf`, format: "PDF" },
        { title: "Practical Handbook", path: `${basePath}/references/practical-handbook.pdf`, format: "PDF" },
      ],
    },
  ]

  if (subject.labImages && subject.labImages.length > 0) {
    categories.push({
      title: "Lab Manuals",
      icon: FileImage,
      description: "Practical lab manuals and experiment guides",
      files: [
        { title: "Lab Manual - Part 1", path: `${basePath}/lab/lab-manual-1.pdf`, format: "PDF" },
        { title: "Lab Manual - Part 2", path: `${basePath}/lab/lab-manual-2.pdf`, format: "PDF" },
        { title: "Experiment Videos Guide", path: `${basePath}/lab/experiment-guide.pdf`, format: "PDF" },
      ],
    })
  }

  return categories
}

export function DownloadsTab({ subject }: DownloadsTabProps) {
  const downloadCategories = buildDownloads(subject)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold">Downloads - {subject.name}</h2>
      </div>

      {downloadCategories.map((category, ci) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.08 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.files.map((file, fi) => (
                  <a
                    key={fi}
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border bg-card p-3 transition-all duration-200 hover:shadow-soft"
                  >
                    <FileText className="h-8 w-8 shrink-0 text-primary group-hover:text-primary-dark" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{file.title}</p>
                      <span className="text-xs text-muted-foreground">{file.format}</span>
                    </div>
                    <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
