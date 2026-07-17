export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
  external?: boolean
}

export interface SidebarSection {
  title: string
  links: {
    label: string
    href: string
    children?: { label: string; href: string }[]
  }[]
}
