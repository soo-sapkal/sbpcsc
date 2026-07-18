import achievementsJson from "./achievements-data.json";

export interface AchievementItem {
  category: "academic" | "co-curricular";
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export const achievementsData = achievementsJson as AchievementItem[];
