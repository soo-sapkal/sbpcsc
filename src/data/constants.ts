export const ROUTES = {
  HOME: "/",
  ABOUT: {
    PCET: "/about/pcet",
    SBPCSC: "/about/sbpcsc",
    PRINCIPAL: "/about/principal-desk",
    COMMITTEE: "/about/committee",
    ADMINISTRATION: "/about/administration",
    INFRASTRUCTURE: "/about/infrastructure",
    RULES: "/about/rules",
  },
  ADMISSION: "/admission",
  ACADEMICS: {
    PLAN: "/academics/plan",
    SCIENCE: "/academics/science",
    COMMERCE: "/academics/commerce",
  },
  GALLERY: {
    ACTIVITIES: "/gallery/activities",
    GUEST_LECTURES: "/gallery/guest-lectures",
  },
  ACHIEVEMENTS: "/achievements",
  BLOG: "/blog",
  LIBRARY: "/library",
  MEDIA: {
    NEWSLETTER: "/media/newsletter",
    VIDEO: "/media/video",
  },
  REVIEWS: "/reviews",
  CONTACT: "/contact",
  LAUNCH: "/launch",
} as const;

export const STREAMS = {
  SCIENCE: "science",
  COMMERCE: "commerce",
} as const;

export const ACADEMIC_YEARS = [
  "2021-22",
  "2022-23",
  "2023-24",
  "2024-25",
  "2025-26",
  "2026-27",
] as const;

export const EXTERNAL_LINKS = {
  ADMISSION_ENQUIRY:
    "https://docs.google.com/forms/d/e/1FAIpQLScdjTFssLgRPbib5MpCd8tHBZGZfE6guezDTx7228gPAw9Zpw/viewform",
  ERP_TEACHER: "https://www.pceterp.in/",
  ERP_STUDENT: "https://learner.pceterp.in/",
  PCET: "https://pcet.org.in/",
  NCERT: "https://ncert.nic.in",
  JEE_MAINS: "https://jeemain.nta.nic.in",
  MH_CET: "https://cetcell.mahacet.org",
  NEET: "https://neet.nta.nic.in",
  NATA: "https://www.nata.in",
  NIFD: "https://www.nifdindia.in",
  ICAI: "https://www.icai.org",
  ICSI: "https://www.icsi.edu",
} as const;
