import { images } from "@/data/images"
import { categories } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

export const FindAndGet = () => {
  return (
    <div className="bg-secundaryColor min-h-[calc(100dvh-4rem)] py-26 flex flex-col items-center justify-center gap-10 px-6">
      {/* <TitlePage title="Encuentra y consigue lo que amas" isBgprimaryColor={false}/> */}
      <h2 className="text-primaryColor font-titleText text-center text-3xl font-bold md:text-6xl">Encuentra y <br />consigue lo que amas</h2>
      <div className="max-w-7xl md:w-auto w-full py-10 grid grid-cols-1 xs:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
        {categories.slice(1).map((item, idx) => (
          <Link href={images.categories[idx].path} className="flex xs:flex-col items-center gap-6 px-6 group" key={idx}>
            <div className="w-36 lg:w-72 lg:h-72 rounded-full aspect-square overflow-hidden shrink-0 bg-primaryColor grid place-items-center">
              <Image
                loading="lazy"
                width={1920} height={1080}
                src={images.categories[idx].src}
                className="w-50 h-auto object-cover transition-transform duration-400 group-hover:scale-110"
                alt={item}
              />
            </div>
            <h3 className="text-primaryColor  text-start text-2xl sm:text-4xl lg:text-3xl font-bold font-titleText group-hover:text-primaryColor/80">
              {item}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}