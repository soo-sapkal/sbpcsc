import Image from "next/image"
import type { PdfLink } from "@/data/subjects"

interface QuestionPapersTabProps {
  questionPapers: PdfLink[]
}

export function QuestionPapersTab({ questionPapers }: QuestionPapersTabProps) {
  if (!questionPapers || questionPapers.length === 0) {
    return <p className="text-muted-foreground italic">No question papers available.</p>
  }

  return (
    <div className="flex flex-wrap">
      {questionPapers.map((pdf, i) => (
        <div key={i} className="mb-4 w-full px-2 md:w-1/3">
          <p className="text-center">
            <a
              href={pdf.href}
              target="_blank"
              className="block rounded-lg border border-border bg-surface p-2 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <Image
                src="/images/pdficon.png"
                alt=""
                width={100}
                height={100}
                className="mx-auto"
                unoptimized
              />
              <span className="mt-2 block font-semibold text-brand">{pdf.label}</span>
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}
