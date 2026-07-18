import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { siteConfig } from "@/data/site-config"
import { TopStrip } from "@/features/layout"
import { Header } from "@/features/layout"
import { MainNav } from "@/features/navigation"
import { MobileNav } from "@/features/navigation"
import { Spotlight } from "@/features/layout"
import { Footer } from "@/features/layout"
import { ScrollToTop } from "@/features/layout"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: { icon: siteConfig.favicon },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S75YZJK9GR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S75YZJK9GR');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased" style={{ fontFamily: "Century Gothic, CenturyGothic, AppleGothic, sans-serif" }}>
        <TopStrip />
        <Header />
        <MainNav />
        <MobileNav />
        <Spotlight />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
