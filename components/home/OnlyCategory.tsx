import { menu } from "@/data/menu"
import { IconSparkles } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export const OnlyCategory = () => {
    const getByTag = (tag: string) => menu.filter(p => p.tag === tag)
    const tagProductos = getByTag("Firma").slice(0, 4)

  return (
    <div className="bg-creamMid xs:min-h-[calc(100dvh-4rem)] md:py-26 py-16 flex flex-col items-center justify-center md:gap-16 gap-12 px-6">

      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-darkWarm font-titleText text-center text-3xl md:text-6xl leading-tight">Solo en Central</h2>
      </div>

      {/* Grid */}
      <div className="lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 xs:grid-cols-2 gap-4 md:gap-6 gap-y-10 lg:gap-10 px-0 xs:px-4 lg:px-0 w-full">
        {tagProductos.map((item, idx) => (
          <Link href={`/menu/${item.slug}`} className="grid grid-cols-2 xs:grid-cols-1 gap-2 xs:gap-1 group" key={idx}>
            <div className="relative w-full rounded-primarySize aspect-square overflow-hidden shrink-0 bg-primary grid place-items-center col-span-2">
              {/* <Image
                width={1920} height={1080}
                loading="lazy"
                src={item.img}
                className="lg:w-50 w-full h-auto object-cover transition-transform duration-400 group-hover:scale-130"
                alt={item.desc}
              /> */}
              {/* Badge firma */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-darkWarm text-primary text-[9px] uppercase tracking-widest px-2 py-1 rounded-full">
                <IconSparkles size={10} />
                <span className="pt-px">Firma</span>
              </div>
            </div>
            <div className="flex w-full justify-between items-center col-span-2 pt-2 px-1">
              <h3 className="text-darkWarm text-xl font-titleText lg:text-xl line-clamp-1">{item.name}</h3>
              <span className="text-darkWarm/80 font-bold text-xl">${item.price}</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}