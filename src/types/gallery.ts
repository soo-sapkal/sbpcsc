export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface GalleryEvent {
  name: string
  anchorId: string
  images: GalleryImage[]
  description?: string
  type: "activities" | "guest-lecture"
}

export interface GalleryYear {
  year: string
  label: string
  events: GalleryEvent[]
}
