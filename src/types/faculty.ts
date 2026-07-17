export interface FacultyMember {
  id: string
  name: string
  qualification: string
  experience: string
  specialization?: string
  email?: string
  photo: string
  subject: string
  stream: "science" | "commerce"
  cv?: string
}
