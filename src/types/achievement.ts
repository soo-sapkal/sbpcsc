export interface Achievement {
  id: string
  type: "academic" | "sports" | "cultural"
  title: string
  description: string
  studentName?: string
  year: string
  image?: string
  rank?: string
  category?: string
}
