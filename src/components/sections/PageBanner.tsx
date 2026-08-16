interface PageBannerProps {
  title?: string
}

export function PageBanner({ title }: PageBannerProps) {
  return (
    <section
      className="relative flex w-full items-center justify-center"
      style={{
        height: "9.375rem",
        backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/images/sbpcsc-college.webp)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    >
      {title ? (
        <h2 className="m-0 px-4 text-center text-2xl font-bold text-white md:text-3xl">{title}</h2>
      ) : null}
    </section>
  )
}