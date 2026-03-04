import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

export const OnlyCategory = () => {
    const getByCategory = (category: string) => products.filter(p => p.category === category)
    const getByTag = (tag: string) => products.filter(p => p.tag === tag)

    // const cafeProducts = getByCategory("Café")
    // const temporadaProducts = getByCategory("Bebidas").slice(0, 4)
    const tagProductos = getByTag("Popular");

  return (
    <div className="bg-secundaryColor/95 min-h-[calc(100dvh-4rem)] py-26 flex flex-col items-center justify-center gap-10 px-6">
      <h2 className="text-primaryColor font-titleText text-center text-3xl font-bold uppercase md:text-5xl">Solo por tiempo limitado</h2>
      <div className="lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 xs:grid-cols-2 gap-4 md:gap-6 gap-y-10 lg:gap-10 px-0 md:px-10 w-full">
        {tagProductos.map((item, idx) => (
          <Link href={`/products/${item.id}`} className="grid grid-cols-2 xs:grid-cols-1 gap-2 xs:gap-1 group" key={idx}>
            <div className="w-full rounded-primarySize aspect-square overflow-hidden shrink-0 bg-primaryColor grid place-items-center col-span-2">
              <Image
                width={1920} height={1080}
                loading="lazy"
                src={item.img}
                className="lg:w-50 w-full h-auto object-cover transition-transform duration-400 group-hover:scale-130"
                alt={item.desc}
              />
            </div>
            <div className="flex w-full justify-between items-center col-span-2">
                <h3 className="text-primaryColor text-2xl lg:text-2xl font-titleText">
                    {item.name}
                </h3>
                <span className="text-primaryColor/80 font-bold text-xl mt-2 mr-4">
                    ${item.price}
                </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}