export interface NewsletterItem {
  year: string
  images: { src: string; caption?: string }[]
}

export interface VideoItem {
  id: string
  title: string
  embedUrl: string
  thumbnail?: string
  description?: string
}
