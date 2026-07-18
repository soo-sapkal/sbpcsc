import activitiesJson from "./activities-data.json";
import guestLecturesJson from "./guest-lectures-data.json";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface YearGallery {
  year: string;
  events: GalleryEvent[];
}

// Typecast the JSON inputs
export const activitiesData = activitiesJson as YearGallery[];
export const guestLecturesData = guestLecturesJson as YearGallery[];
