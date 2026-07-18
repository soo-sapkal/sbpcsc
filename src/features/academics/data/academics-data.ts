import subjectsJson from "./subjects-data.json";

export interface FacultyItem {
  name: string;
  image: string;
  experience: string;
  email: string;
  cvLink?: string;
}

export interface ResourceLink {
  title: string;
  href: string;
}

export interface SubjectAboutData {
  title: string;
  paragraphs: string[];
  points: string[];
  image: string;
}

export interface SubjectItem {
  id: string;
  title: string;
  about: SubjectAboutData;
  faculty: FacultyItem[];
  syllabus: ResourceLink[];
  questionPapers: ResourceLink[];
  downloads: ResourceLink[];
}

export const subjectsData = subjectsJson as SubjectItem[];
