import Image from "next/image"
import type { SubjectConfig } from "@/data/subjects"

interface SubjectAboutProps {
  subject: SubjectConfig
}

export function SubjectAbout({ subject }: SubjectAboutProps) {
  return (
    <div>
      {subject.description && (
        <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: subject.description }} />
      )}

      {subject.aboutPdfs && subject.aboutPdfs.length > 0 && (
        <div className="flex flex-wrap">
          {subject.aboutPdfs.map((pdf, i) => (
            <div key={i} className="mb-4 w-full px-2 md:w-1/3">
              <p className="text-center">
                <a
                  href={pdf.href}
                  target="_blank"
                  className="block rounded border border-[#ddd] p-1 transition-shadow hover:shadow-lg"
                >
                  <Image
                    src="/images/pdficon.png"
                    alt=""
                    width={100}
                    height={100}
                    className="mx-auto"
                    unoptimized
                  />
                  <span className="mt-2 block">{pdf.label}</span>
                </a>
              </p>
            </div>
          ))}
        </div>
      )}

      {subject.aboutImages && subject.aboutImages.length > 0 && (
        <div className="flex flex-wrap">
          {subject.aboutImages.map((img, i) => (
            <div key={i} className="mb-4 w-full px-2 md:w-1/2">
              <Image
                src={`/images/${subject.stream}/${img}`}
                alt=""
                width={350}
                height={250}
                className="h-auto w-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
