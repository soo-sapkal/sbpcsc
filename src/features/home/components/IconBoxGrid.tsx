import Image from "next/image"
import Link from "next/link"
import { iconBoxes } from "@/features/home/data/icon-boxes"

export function IconBoxGrid() {
  return (
    <section className="section2 bg-[#f5f5f5] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {iconBoxes.map((box, i) => {
            const isExternal = box.href.startsWith("mailto:") || box.href.startsWith("tel:")
            const content = (
              <div className="icon-box mt-[10px] mb-[5px] rounded-[10px] bg-white p-[15px] text-center">
                <Image
                  src={box.icon}
                  alt={box.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                  unoptimized
                />
                <h3 className="mt-[10px] text-[17px] font-semibold text-[#337ab7]">{box.title}</h3>
              </div>
            )

            const wrapperClass = "w-1/2 px-[15px] sm:w-1/3 md:w-1/6"

            if (isExternal) {
              return (
                <div key={i} className={wrapperClass}>
                  <a href={box.href} className="block no-underline">
                    {content}
                  </a>
                </div>
              )
            }

            return (
              <div key={i} className={wrapperClass}>
                <Link href={box.href} className="block no-underline">
                  {content}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
