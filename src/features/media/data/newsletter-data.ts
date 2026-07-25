export type NewsletterItemType = "standalone" | "grid" | "two-col" | "description"

export interface NewsletterItem {
  type: NewsletterItemType
  src?: string
  alt?: string
  width?: number
  text?: string
  items?: NewsletterItem[]
}

export interface NewsletterYear {
  year: string
  heading: string
  items: NewsletterItem[]
}

export const newsletterYears: NewsletterYear[] = [
  {
    year: "2025-26",
    heading: "News Article 2025-26",
    items: [
      { type: "standalone", src: "/images/newsletter/2025-26/commerce-result-10th-2025-26.jpeg", alt: "News Article 2025-26, SBPCSC", width: 550 },
      { type: "standalone", src: "/images/newsletter/2025-26/mahanews-navras-events-2025.jpg", alt: "News Article 2025-26, SBPCSC", width: 550 },
      { type: "standalone", src: "/images/newsletter/2025-26/navras-events-2025.jpg", alt: "News Article 2025-26, SBPCSC", width: 550 },
    ],
  },
  {
    year: "2024-25",
    heading: "News Article 2024-25",
    items: [
      { type: "standalone", src: "/images/newsletter/2024-25/newsletter-2.jpg", alt: "News Article 2024-25, SBPCSC", width: 550 },
      { type: "standalone", src: "/images/newsletter/2024-25/newsletter-1.JPG", alt: "News Article 2024-25, SBPCSC", width: 550 },
    ],
  },
  {
    year: "2022-23",
    heading: "News Article 2022-23",
    items: [
      { type: "description", text: "HSC 2022 Result" },
      { type: "standalone", src: "/images/newsletter/2022-23/sakal-news-2023.webp", alt: "News Article 2022-23, SBPCSC", width: 550 },
      { type: "standalone", src: "/images/newsletter/2022-23/HSC-2022-Result.webp", alt: "News Article 2022-23, SBPCSC", width: 550 },
    ],
  },
  {
    year: "2021-22",
    heading: "News Article 2021-22",
    items: [
      { type: "description", text: "Carrier Guidance Seminar jointly by Sakal Vidya and S.B.Patil College of Science and Commerce Date 9/4/2022 Saturday." },
      { type: "standalone", src: "/images/newsletter/2021-22/artical-news-2021-22-1.webp", alt: "News Article 2021-22, SBPCSC", width: 550 },
    ],
  },
  {
    year: "2019-20",
    heading: "News Article 2019-20",
    items: [
      { type: "grid", items: [
        { type: "grid", src: "/images/newsletter/2019-20/artical-news-2019-20-1.webp", alt: "News Article 2019-20, SBPCSC" },
        { type: "grid", src: "/images/newsletter/2019-20/artical-news-2019-20-2.webp", alt: "News Article 2019-20, SBPCSC" },
      ]},
      { type: "standalone", src: "/images/newsletter/2019-20/artical-news-2019-20-3.webp", alt: "News Article 2019-20, SBPCSC", width: 0 },
      { type: "standalone", src: "/images/newsletter/2019-20/artical-news-2019-20-4.webp", alt: "News Article 2019-20, SBPCSC", width: 250 },
      { type: "standalone", src: "/images/newsletter/2019-20/artical-news-2019-20-5.webp", alt: "News Article 2019-20, SBPCSC", width: 0 },
      { type: "standalone", src: "/images/newsletter/2019-20/artical-news-2019-20-6.webp", alt: "News Article 2019-20, SBPCSC", width: 0 },
      { type: "standalone", src: "/images/newsletter/2019-20/artical-news-2019-20-7.webp", alt: "News Article 2019-20, SBPCSC", width: 0 },
    ],
  },
  {
    year: "2018-19",
    heading: "News Article 2018-19",
    items: [
      { type: "standalone", src: "/images/newsletter/2018-19/artical-news-2018-19-1.webp", alt: "News Article 2018-19, SBPCSC", width: 0 },
      { type: "two-col", items: [
        { type: "standalone", src: "/images/newsletter/2018-19/artical-news-2018-19-2.webp", alt: "News Article 2018-19, SBPCSC" },
        { type: "standalone", src: "/images/newsletter/2018-19/artical-news-2018-19-3.webp", alt: "News Article 2018-19, SBPCSC" },
      ]},
      { type: "standalone", src: "/images/newsletter/2018-19/artical-news-2018-19-4.webp", alt: "News Article 2018-19, SBPCSC", width: 0 },
      { type: "grid", items: [
        { type: "grid", src: "/images/newsletter/2018-19/artical-news-2018-19-5.webp", alt: "News Article 2018-19, SBPCSC" },
        { type: "grid", src: "/images/newsletter/2018-19/artical-news-2018-19-8.webp", alt: "News Article 2018-19, SBPCSC" },
        { type: "grid", src: "/images/newsletter/2018-19/artical-news-2018-19-7.webp", alt: "News Article 2018-19, SBPCSC" },
        { type: "grid", src: "/images/newsletter/2018-19/artical-news-2018-19-10.webp", alt: "News Article 2018-19, SBPCSC" },
        { type: "grid", src: "/images/newsletter/2018-19/artical-news-2018-19-6.webp", alt: "News Article 2018-19, SBPCSC" },
        { type: "grid", src: "/images/newsletter/2018-19/artical-news-2018-19-9.webp", alt: "News Article 2018-19, SBPCSC" },
      ]},
    ],
  },
  {
    year: "2017-18",
    heading: "News Article 2017-18",
    items: [
      { type: "standalone", src: "/images/newsletter/2017-18/artical-news-2016-17-1.webp", alt: "News Article 2017-18, SBPCSC", width: 550 },
      { type: "standalone", src: "/images/newsletter/2017-18/artical-news-2016-17-2.webp", alt: "News Article 2017-18, SBPCSC", width: 550 },
    ],
  },
]
