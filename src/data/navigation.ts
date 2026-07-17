export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "PCET", href: "/about/pcet" },
      { label: "SBPCSC", href: "/about/sbpcsc" },
      { label: "Principal's Desk", href: "/about/principal-desk" },
      {
        label: "Governance",
        children: [
          { label: "Committee", href: "/about/committee" },
          { label: "Administration", href: "/about/administration" },
        ],
      },
      {
        label: "Campus",
        children: [{ label: "Infrastructure And Facilities", href: "/about/infrastructure" }],
      },
      { label: "Rules and Regulations", href: "/about/rules" },
    ],
  },
  { label: "Admission", href: "/admission" },
  {
    label: "Academics",
    children: [
      { label: "Academic Plan", href: "/academics/plan" },
      {
        label: "Science",
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
  },
  {
    label: "Student Corner",
    children: [
      {
        label: "Gallery",
        children: [
          { label: "Activities", href: "/gallery/activities/2025-26" },
          { label: "Guest Lectures", href: "/gallery/guest-lectures/2025-26" },
        ],
      },
      { label: "Achievements", href: "/achievements" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Library", href: "/library" },
  {
    label: "Media",
    children: [
      { label: "Newsletter", href: "/media/newsletter" },
      { label: "Video", href: "/media/video" },
    ],
  },
  {
    label: "ERP",
    children: [
      { label: "Teacher Login", href: "https://www.pceterp.in/" },
      { label: "Student Login", href: "https://learner.pceterp.in/" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
