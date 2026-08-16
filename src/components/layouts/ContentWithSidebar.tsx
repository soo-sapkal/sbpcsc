interface ContentWithSidebarProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

export function ContentWithSidebar({ sidebar, children }: ContentWithSidebarProps) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-4">
      <aside className="md:col-span-1 md:self-start md:sticky md:top-4">{sidebar}</aside>
      <main className="min-w-0 md:col-span-3">{children}</main>
    </div>
  )
}
