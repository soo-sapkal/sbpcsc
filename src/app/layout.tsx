import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { siteConfig } from "@/data/site-config"
import { TopStrip, Header, Spotlight, Footer, ScrollToTop } from "@/features/layout"
import { MainNav, MobileNav } from "@/features/navigation"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
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
    title: siteConfig.shortName,
    description: siteConfig.description,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}${siteConfig.logo}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opposite of S.B. Patil Public School, S. No. 110, Gate No.1",
                addressLocality: "Ravet",
                addressRegion: "Pune",
                postalCode: "412101",
                addressCountry: "IN",
              },
              telephone: siteConfig.phone,
              email: siteConfig.email,
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
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
