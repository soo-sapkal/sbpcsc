import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Root PHP pages -> new routes
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about-pcet.php", destination: "/about/pcet", permanent: true },
      { source: "/about-sbpcsc.php", destination: "/about/sbpcsc", permanent: true },
      { source: "/principal-desk.php", destination: "/about/principal-desk", permanent: true },
      { source: "/committee.php", destination: "/about/committee", permanent: true },
      { source: "/administration.php", destination: "/about/administration", permanent: true },
      { source: "/infrastructure-and-facilities.php", destination: "/about/infrastructure", permanent: true },
      { source: "/rules-and-regulations.php", destination: "/about/rules", permanent: true },
      { source: "/admission.php", destination: "/admission", permanent: true },
      { source: "/academic-plan.php", destination: "/academics/plan", permanent: true },
      { source: "/activities.php", destination: "/gallery/activities/2025-26", permanent: true },
      { source: "/guest-lectures.php", destination: "/gallery/guest-lectures/2025-26", permanent: true },
      { source: "/achievements.php", destination: "/achievements", permanent: true },
      { source: "/achievements1.php", destination: "/achievements", permanent: true },
      { source: "/blog.php", destination: "/blog", permanent: true },
      { source: "/library.php", destination: "/library", permanent: true },
      { source: "/newsletter.php", destination: "/media/newsletter", permanent: true },
      { source: "/sbpcsc-video.php", destination: "/media/video", permanent: true },
      { source: "/sbpcsc-contact.php", destination: "/contact", permanent: true },
      { source: "/sbpcsc-reviews.php", destination: "/reviews", permanent: true },
      // Science subject pages
      { source: "/science/:slug", destination: "/academics/science/:slug", permanent: true },
      // Commerce subject pages
      { source: "/commerce/:slug", destination: "/academics/commerce/:slug", permanent: true },
      // Duplicate pages
      { source: "/commerce/index.php", destination: "/academics/commerce", permanent: true },
      { source: "/commerce/admission.php", destination: "/admission", permanent: true },
    ]
  },
}

export default nextConfig
