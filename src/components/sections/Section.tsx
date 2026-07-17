interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className ?? ""}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
