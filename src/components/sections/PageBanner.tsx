interface PageBannerProps {
  title?: string
}

export function PageBanner({ title }: PageBannerProps) {
  return (
    <section
      className="w-full"
      style={{
        height: "9.375rem",
        backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/images/sbpcsc-college.webp)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    />
  )
}
