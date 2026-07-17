import type { FacultyMember } from "./faculty"
import type { PDFEntry } from "./pdf"

export interface Subject {
  id: string
  name: string
  nameMarathi?: string
  stream: "science" | "commerce"
  description: string
  icon?: string
  faculty: FacultyMember[]
  teachingPlans: PDFEntry[]
  questionPapers: PDFEntry[]
  syllabus: PDFEntry[]
  downloads: PDFEntry[]
  labImages?: string[]
}
