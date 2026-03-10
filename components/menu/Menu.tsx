"use client"
import { useState, useEffect, act } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { menu } from "@/data/menu"
import { Button } from "../ui/Button"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import { getCategoryExtras } from "@/data/menuCategoryExtra"

const categories = ["Todos", ...new Set(menu.map(p => p.category))]
// const categories = ["Todos", "Pasteles", "Café", "Postres", "Temporada"]

const tagColors: Record<string, string> = {
  "Firma":     "bg-secundaryColor text-primaryColor",
  "Popular":   "bg-secundaryColor/20 text-secundaryColor border border-secundaryColor/40",
  "Nuevo":     "bg-primaryColor border border-secundaryColor text-secundaryColor",
  "Temporada": "bg-secundaryColor/10 text-secundaryColor border border-secundaryColor/30",
}

export const MenuComponent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const categoryParam = searchParams.get("category")
  const [active, setActive] = useState(
    categories.includes(categoryParam ?? "") ? categoryParam! : "Todos"
  )

  // const [active, setActive] = useState("Todos")

  const handleFilter = (cat: string) => {
    setActive(cat)
    const params = new URLSearchParams(searchParams.toString())
    if (cat === "Todos") {
      params.delete("category")
    } else {
      params.set("category", cat)
    }
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  // const [hovered, setHovered] = useState<number | null>(null)

  const filtered = active === "Todos"
    ? menu
    : menu.filter(p => p.category === active)

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatImg {
          0%, 100% { transform: translateY(0px) scale(1.08); }
          50%       { transform: translateY(-8px) scale(1.08); }
        }

        .prod-header  { animation: fadeDown 0.6s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .prod-filters { animation: fadeDown 0.6s cubic-bezier(.22,1,.36,1) 0.25s both; }

        .shimmer-price {
          background: linear-gradient(90deg, #B8860B 0%, #8B6914 50%, #B8860B 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .filter-btn {
          transition: all 0.2s cubic-bezier(.22,1,.36,1);
        }
        .filter-btn.active {
          background: var(--color-primaryMuteds, #DDBB02);
          color: var(--color-darkWarm);
        }

        .card-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-desc {
          transform: translateY(8px);
          transition: transform 0.3s cubic-bezier(.22,1,.36,1);
        }
      `}</style>

      <section className="relative bg-cream w-full overflow-hidden pb-10 px-6 sm:px-10 lg:px-20 pt-10">

        {/* Fondo decorativo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-primarySize bg-secundaryColor/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-primarySize bg-secundaryColor/6 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#FFE55C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">          
          {/* Filtros */}
          <div className="prod-filters flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`filter-btn py-2 px-6 cursor-pointer text-xs font-semibold uppercase tracking-widest rounded-primarySize border border-darkWarm/20 text-darkWarm/80 hover:border-darkWarm/50 hover:text-darkWarm ${active === cat ? "active" : ""}`}
              >
                <p className="mt-0.5">
                  {cat}
                </p>
              </button>
            ))}
          </div>

        {/* Banner de extras por categoría */}
        {active !== "Todos" && getCategoryExtras(active)?.map((block, i) => (
          <div key={i} className="mb-6 px-4 w-auto py-3 border-b border-darkWarm/40 bg-creamMid/5 inline-flex flex-wrap gap-x-6 gap-y-1 items-baseline">
            <span className="text-xs font-bold uppercase tracking-widest text-darkWarm shrink-0">
              {block.title}
            </span>
            {block.note && (
              <span className="text-xs text-darkWarm/60 italic">{block.note}</span>
            )}
            {block.extras.map((e, j) => (
              <span key={j} className="text-xs text-darkWarm/80">
                {e.label} <span className="text-secundaryColor font-semibold">+${e.price}</span>
              </span>
            ))}
          </div>
        ))}
        
          {/* Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {filtered.map((menu, idx) => (
            <Link
              key={menu.slug}
              href={`/menu/${menu.slug}`}
              className="group relative flex flex-col"
              style={{ animation: `fadeUp 0.5s cubic-bezier(.22,1,.36,1) ${idx * 0.06}s both` }}
            >
              {/* Imagen */}
              <div className="relative overflow-hidden rounded-primarySize w-full bg-primary h-56 flex items-center justify-center">
                <img
                  src={menu.img}
                  alt={menu.name}
                  className="group-hover:scale-105 h-full transition-transform duration-500 w-full object-cover"
                />

                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-primarySize" />

                {/* Tag */}
                {menu.tag && (
                  <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full ${tagColors[menu.tag]}`}>
                    {menu.tag}
                  </span>
                )}

                {/* Descripción flotante al hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-cream/90 text-xs leading-relaxed line-clamp-2">
                    {menu.descLong}
                  </p>
                </div>

                {/* Botón flecha */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-darkWarm/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <IconArrowNarrowRight className="text-primary w-4 h-4" />
                </div>
              </div>

              {/* Info — fuera de la card, estilo editorial */}
              <div className="pt-3 px-1">
                <span className="text-[9px] uppercase tracking-[0.18em] text-darkWarm/50 font-semibold">
                  {menu.category}
                </span>
                <div className="flex items-baseline justify-between gap-2 mt-0.5">
                  <h3 className="font-titleText text-xl text-darkWarm leading-snug group-hover:text-secundaryColor transition-colors duration-200">
                    {menu.name}
                  </h3>
                  <span className="shimmer-price font-titleText text-lg font-bold shrink-0">
                    ${menu.price}
                  </span>
                </div>
                {/* Línea animada bajo el nombre */}
                <div className="mt-2 h-px bg-darkWarm/10 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-secundaryColor/50 transition-all duration-500 ease-out" />
                </div>
              </div>
            </Link>
          ))}
        </div>

          {/* Footer de sección */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-darkWarm/20"
            style={{ animation: "fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.6s both" }}
          >
            <p className="text-darkWarm text-sm text-center sm:text-left">
              ¿No encuentras lo que buscas? Hacemos pedidos especiales.
            </p>
            <Button title="Pedir personalizado" url="/contact"/>
          </div>
        </div>
      </section>
    </>
  )
}