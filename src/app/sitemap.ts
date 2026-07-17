import type { MetadataRoute } from "next"
import { siteConfig } from "@/data/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about/pcet`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/about/sbpcsc`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/about/principal-desk`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/about/committee`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/about/administration`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/about/infrastructure`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/about/rules`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/admission`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/academics/plan`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/achievements`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/library`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/media/newsletter`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/media/video`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ]

  const scienceSubjects = [
    "marathi", "english", "math", "hindi", "physics", "chemistry",
    "biology", "geography", "it", "cs",
  ]
  const commerceSubjects = [
    "marathi", "english", "math", "hindi", "account", "secretarial",
    "ocm", "economics", "it",
  ]

  const subjectRoutes = [
    ...scienceSubjects.map((s) => ({
      url: `${baseUrl}/academics/science/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...commerceSubjects.map((s) => ({
      url: `${baseUrl}/academics/commerce/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]

  const galleryYears = ["2021-22", "2022-23", "2023-24", "2024-25", "2025-26", "2026-27"]
  const guestLectureYears = ["2021-22", "2022-23", "2023-24", "2025-26"]

  const galleryRoutes = [
    ...galleryYears.map((y) => ({
      url: `${baseUrl}/gallery/activities/${y}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...guestLectureYears.map((y) => ({
      url: `${baseUrl}/gallery/guest-lectures/${y}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...subjectRoutes, ...galleryRoutes]
}
