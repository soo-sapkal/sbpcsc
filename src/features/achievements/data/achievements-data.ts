import achievementsJson from "./achievements-data.json";

export interface TableCell {
  text: string;
  image?: string;
}

export interface TableData {
  headers: string[];
  rows: TableCell[][];
}

export interface AchievementItem {
  category: "academic" | "co-curricular";
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  table?: TableData;
}

export const achievementsData = achievementsJson as AchievementItem[];
