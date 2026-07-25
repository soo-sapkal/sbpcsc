interface PageHeadingProps {
  title: string
  className?: string
}

export function PageHeading({ title, className }: PageHeadingProps) {
  return (
    <div className="mb-6">
      <h1 className={`m-0 bg-[#146ab5] px-3 py-2 text-[1.625rem] font-light text-[#fff8f8] ${className ?? ""}`}>
        {title}
      </h1>
      <div className="flex">
        <span className="h-1 w-1/3 bg-[#cf2b1f]" />
        <span className="h-1 w-2/3 bg-[#146ab5]" />
      </div>
    </div>
  )
}
