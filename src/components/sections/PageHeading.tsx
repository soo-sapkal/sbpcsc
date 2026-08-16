interface PageHeadingProps {
  title: string
  className?: string
}

export function PageHeading({ title, className }: PageHeadingProps) {
  return (
    <div className="mb-6">
      <h1
        className={`m-0 rounded-t-md bg-brand px-4 py-2.5 text-[1.625rem] font-semibold text-white ${
          className ?? ""
        }`}
      >
        {title}
      </h1>
      <div className="flex h-1.5 overflow-hidden rounded-b-md">
        <span className="h-full w-1/3 bg-accent" />
        <span className="h-full w-2/3 bg-brand-dark" />
      </div>
    </div>
  )
}