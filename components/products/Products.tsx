"use client"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { products } from "@/data/products"

const categories = ["Todos", ...new Set(products.map(p => p.category))]
// const categories = ["Todos", "Pasteles", "Café", "Postres", "Temporada"]

const tagColors: Record<string, string> = {
  "Firma":     "bg-secundaryColor text-primaryColor",
  "Popular":   "bg-secundaryColor/20 text-secundaryColor border border-secundaryColor/40",
  "Nuevo":     "bg-primaryColor border border-secundaryColor text-secundaryColor",
  "Temporada": "bg-secundaryColor/10 text-secundaryColor border border-secundaryColor/30",
}

export const ProductsComponent = () => {
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
    ? products
    : products.filter(p => p.category === active)

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

        .prod-card {
          animation: scaleIn 0.5s cubic-bezier(.22,1,.36,1) both;
        }

        .shimmer-price {
          background: linear-gradient(90deg, #FFE55C 0%, #FFAA30 50%, #FFE55C 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .img-hover {
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .img-hover:hover {
          animation: floatImg 2.5s ease-in-out infinite;
        }

        .filter-btn {
          transition: all 0.2s cubic-bezier(.22,1,.36,1);
        }
        .filter-btn.active {
          background: var(--color-accentColor);
          color: var(--color-secundaryColor, #E75480);
        }

        .card-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .prod-card:hover .card-overlay {
          opacity: 1;
        }
        .card-desc {
          transform: translateY(8px);
          transition: transform 0.3s cubic-bezier(.22,1,.36,1);
        }
        .prod-card:hover .card-desc {
          transform: translateY(0);
        }
      `}</style>

      <section className="relative bg-primaryColor w-full overflow-hidden pb-10 px-6 sm:px-10 lg:px-20 pt-10">

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

          {/* Header */}
          {/* <div className="prod-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-secundaryColor/50" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-secundaryColor/60 font-semibold">
                  Lo que hacemos
                </span>
              </div>
              <h2 className="font-titleText text-5xl sm:text-6xl lg:text-7xl text-secundaryColor leading-tight">
                Nuestros <br className="hidden sm:block" />productos
              </h2>
            </div>
            <Link
              href="/menu"
              className="self-start sm:self-auto btn rounded-full bg-transparent border-secundaryColor shadow-none text-secundaryColor hover:bg-secundaryColor/10 transition-colors duration-200 px-6 mb-1"
            >
              Ver menú completo →
            </Link>
          </div> */}

          {/* Filtros */}
          <div className="prod-filters flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`filter-btn py-2 px-6 cursor-pointer text-xs font-semibold uppercase tracking-widest rounded-primarySize border border-secundaryColor/20 text-secundaryColor/70 hover:border-secundaryColor/50 hover:text-secundaryColor ${active === cat ? "active" : ""}`}
              >
                <p className="mt-0.5">
                  {cat}
                </p>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product, idx) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`} 
                className="prod-card group relative flex flex-col rounded-primarySize border border-secundaryColor/10 hover:border-secundaryColor/30 bg-secundaryColor/5 hover:bg-secundaryColor/8 overflow-hidden transition-colors duration-300"
                style={{ animationDelay: `${idx * 0.07}s` }}
                // onMouseEnter={() => setHovered(product.id)}
                // onMouseLeave={() => setHovered(null)}
              >
                {/* Imagen */}
                <div className="relative overflow-hidden h-48 flex items-center justify-center bg-secundaryColor/5">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="img-hover h-40 w-auto object-contain drop-shadow-xl"
                  />
                  {product.tag && (
                    <span className={`absolute top-3 pt-1.5 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColors[product.tag]}`}>
                      {product.tag}
                    </span>
                  )}
                  <div className="card-overlay absolute inset-0 bg-primaryColor/80 backdrop-blur-sm flex items-center justify-center px-4">
                    <p className="card-desc text-secundaryColor/90 text-xs text-center leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-titleText text-xl text-secundaryColor leading-tight">{product.name}</h3>
                    <span className="shimmer-price font-titleText text-xl font-bold shrink-0">
                      ${product.price}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-secundaryColor/80">
                    {product.category}
                  </span>
                  <div className="mt-auto w-full rounded-primarySize border border-secundaryColor/20 text-secundaryColor/70 text-xs font-semibold uppercase tracking-widest py-2 text-center group-hover:bg-secundaryColor group-hover:text-primaryColor group-hover:border-secundaryColor transition-all duration-200">
                    Ver producto →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer de sección */}
          <div
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-secundaryColor/20"
            style={{ animation: "fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.6s both" }}
          >
            <p className="text-secundaryColor/90 text-sm text-center sm:text-left">
              ¿No encuentras lo que buscas? Hacemos pedidos especiales.
            </p>
            <Link
              href="/contact"
              className="btn rounded-primarySize bg-secundaryColor text-primaryColor shadow-none border-none hover:scale-105 transition-transform duration-200 px-7 text-sm"
            >
              Pedir personalizado
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}