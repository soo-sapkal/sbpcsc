interface PageBannerProps {
  title: string
}

export function PageBanner({ title }: PageBannerProps) {
  return (
    <section className="relative flex h-48 items-center justify-center bg-gradient-to-r from-primary/90 to-primary/70">
      <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
    </section>
  )
}
