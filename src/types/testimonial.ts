export interface Testimonial {
  id: string
  name: string
  stream: "science" | "commerce"
  batch: string
  content: string
  photo?: string
  rank?: string
}
