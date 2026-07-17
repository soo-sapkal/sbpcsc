import type { Metadata } from "next"
import { siteConfig } from "@/data/site-config"

interface SEOProps {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.shortName}`
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  }
}
