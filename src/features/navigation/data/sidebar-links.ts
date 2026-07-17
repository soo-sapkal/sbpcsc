import type { SidebarSection } from "@/types/navigation"

export const aboutSidebar: SidebarSection = {
  title: "About Us",
  links: [
    { label: "PCET", href: "/about/pcet" },
    { label: "SBPCSC", href: "/about/sbpcsc" },
    { label: "Principal's Desk", href: "/about/principal-desk" },
    {
      label: "Governance",
      href: "#",
      children: [
        { label: "Committee", href: "/about/committee" },
        { label: "Administration", href: "/about/administration" },
      ],
    },
    {
      label: "Campus",
      href: "#",
      children: [{ label: "Infrastructure and Facilities", href: "/about/infrastructure" }],
    },
    { label: "Rules and Regulations", href: "/about/rules" },
  ],
}

export const academicsSidebar: SidebarSection = {
  title: "Academics",
  links: [
    { label: "Academic Plan", href: "/academics/plan" },
    {
      label: "Science",
      href: "#",
      children: [
        { label: "Marathi", href: "/academics/science/marathi" },
        { label: "English", href: "/academics/science/english" },
        { label: "Math", href: "/academics/science/math" },
        { label: "Hindi", href: "/academics/science/hindi" },
        { label: "Physics", href: "/academics/science/physics" },
        { label: "Chemistry", href: "/academics/science/chemistry" },
        { label: "Biology", href: "/academics/science/biology" },
        { label: "Geography", href: "/academics/science/geography" },
        { label: "IT", href: "/academics/science/it" },
        { label: "CS", href: "/academics/science/cs" },
      ],
    },
    {
      label: "Commerce",
      href: "#",
      children: [
        { label: "Marathi", href: "/academics/commerce/marathi" },
        { label: "English", href: "/academics/commerce/english" },
        { label: "Math", href: "/academics/commerce/math" },
        { label: "Hindi", href: "/academics/commerce/hindi" },
        { label: "Account & Book Keeping", href: "/academics/commerce/account" },
        { label: "Secretarial Practice", href: "/academics/commerce/secretarial" },
        { label: "OCM", href: "/academics/commerce/ocm" },
        { label: "Economics", href: "/academics/commerce/economics" },
        { label: "IT", href: "/academics/commerce/it" },
      ],
    },
  ],
}

export const studentCornerSidebar: SidebarSection = {
  title: "Student Corner",
  links: [
    {
      label: "Gallery",
      href: "#",
      children: [
        { label: "Activities", href: "/gallery/activities/2025-26" },
        { label: "Guest Lectures", href: "/gallery/guest-lectures/2025-26" },
      ],
    },
    { label: "Achievements", href: "/achievements" },
  ],
}

export const mediaSidebar: SidebarSection = {
  title: "Media",
  links: [
    { label: "Newsletter", href: "/media/newsletter" },
    { label: "Video", href: "/media/video" },
  ],
}
