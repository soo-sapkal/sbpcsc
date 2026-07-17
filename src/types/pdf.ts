export interface PDFEntry {
  title: string
  path: string
  year?: number
  month?: string
  category: "question-paper" | "syllabus" | "textbook" | "teaching-plan" | "notes" | "assignment" | "other"
  stream: "science" | "commerce" | "both"
  subject: string
}
