import { categories } from "@/data/products"
import { TitlePage } from "../ui/TitlePage"
import Link from "next/link"

const categoryImages: Record<string, string> = {
  "Pasteles": "/redvelvet1.png",
  "Café":     "/redvelvet2.png",
  "Postres":  "/redvelvet3.png",
}

const findAndGetData = [
    {
        name: "Pasteles",
        urlImage: "/pasteles/pastel-chocolate-intenso.png",
        urlPath: "/products?category=Pasteles"
    },
    {
        name: "Bebidas",
        urlImage: "/bebidas/latte-artesanal.png",
        urlPath: "/products?category=Bebidas"
    },
    {
        name: "Postres",
        urlImage: "/redvelvet3.png",
        urlPath: "/products?category=Postres"
    },
]

export const FindAndGet = () => {
  return (
    <div className="bg-secundaryColor min-h-[calc(100dvh-4rem)] px-6 flex flex-col items-center justify-center gap-10">
      {/* <TitlePage title="Encuentra y consigue lo que amas" isBgprimaryColor={false}/> */}
      <h2 className="text-primaryColor font-titleText text-center text-3xl font-bold uppercase md:text-5xl">Encuentra y consigue <br /> lo que amas</h2>
      <div className="max-w-7xl md:w-auto w-full py-10 grid grid-cols-1 xs:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
        {categories.slice(1, -1).map((item, idx) => (
          <Link href={findAndGetData[idx].urlPath} className="grid grid-cols-2 xs:grid-cols-1 place-items-center gap-0 xs:gap-8 group" key={idx}>
            <div className="w-36 lg:w-72 lg:h-72 rounded-full aspect-square overflow-hidden shrink-0 bg-primaryColor grid place-items-center">
              <img
                // src={categoryImages[item] ?? "/categories/default.webp"}
                src={findAndGetData[idx].urlImage}
                className="w-50 h-auto object-cover transition-transform duration-400 group-hover:scale-110"
                alt={item}
              />
            </div>
            <span className="text-primaryColor text-2xl sm:text-4xl lg:text-3xl font-bold font-titleText group-hover:text-primaryColor/80">
              {item}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}