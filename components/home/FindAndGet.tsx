import { categories } from "@/data/products"
import { TitlePage } from "../ui/TitlePage"
import Link from "next/link"

const categoryImages: Record<string, string> = {
  "Pasteles": "/hero1.png",
  "Café":     "/hero2.png",
  "Postres":  "/hero3.png",
}

const findAndGetData = [
    {
        name: "Pasteles",
        urlImage: "/hero1.png",
        urlPath: "/products?category=Pasteles"
    },
    {
        name: "Café",
        urlImage: "/hero2.png",
        urlPath: "/products?category=Café"
    },
    {
        name: "Postres",
        urlImage: "/hero3.png",
        urlPath: "/products?category=Postres"
    },
]

export const FindAndGet = () => {
  return (
    <div className="bg-secundaryColor px-6 h-auto py-10 lg:py-20 flex flex-col items-center justify-center gap-10">
      {/* <TitlePage title="Encuentra y consigue lo que amas" isBgprimaryColor={false}/> */}
      <h2 className="text-primaryColor font-caveat text-center text-5xl md:text-6xl">Encuentra y consigue <br /> lo que amas</h2>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-10 grid grid-cols-1 xs:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
        {categories.slice(1, -1).map((item, idx) => (
          <Link href={findAndGetData[idx].urlPath} className="grid grid-cols-2 xs:grid-cols-1 place-items-center gap-0 xs:gap-4 px-4 group" key={idx}>
            <div className="w-36 lg:w-72 lg:h-72 rounded-full aspect-square overflow-hidden shrink-0 bg-primaryColor grid place-items-center">
              <img
                // src={categoryImages[item] ?? "/categories/default.webp"}
                src={findAndGetData[idx].urlImage}
                className="w-30 h-auto object-cover transition-transform duration-400 group-hover:scale-130"
                alt={item}
              />
            </div>
            <span className="text-primaryColor text-3xl sm:text-4xl lg:text-5xl font-caveat group-hover:text-primaryColor/80">
              {item}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}