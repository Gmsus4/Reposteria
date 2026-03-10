"use client"
import { images } from "@/data/images"
import { categories } from "@/data/menu"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { Button } from "../ui/Button"

export const FindAndGet = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" })
  }

  // Saltamos "Todos" que es el primero
  const visibleCategories = categories.slice(1)

  return (
    <div className="bg-cream w-full py-16 md:py-24 flex flex-col items-center gap-10 md:gap-14 overflow-hidden">

      {/* Título */}
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-darkWarm/25" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-darkWarm/40">Menú completo</span>
          <span className="w-8 h-px bg-darkWarm/25" />
        </div>
        <h2 className="text-darkWarm font-titleText text-3xl md:text-6xl leading-tight">
          ¿Qué se te <br className="hidden xs:block" /> antoja hoy?
        </h2>
      </div>

      {/* Carrusel */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Botón izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-darkWarm text-primary flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <IconChevronLeft size={18} />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-16 pb-4 no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {visibleCategories.map((item, idx) => (
            <Link
              href={`/menu?category=${item}`}
              key={idx}
              className="flex flex-col items-center gap-4 group shrink-0"
            >
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden bg-primary grid place-items-center shrink-0">
                <Image
                  loading="lazy"
                  width={400}
                  height={400}
                  src={images.categories[idx]?.src ?? "/placeholder.webp"}
                  className="w-32 md:w-40 h-auto object-cover transition-transform duration-400 group-hover:scale-110"
                  alt={item}
                />
              </div>
              <h3 className="text-darkWarm text-lg md:text-xl font-bold font-titleText group-hover:text-darkWarm/70 transition-colors text-center">
                {item}
              </h3>
            </Link>
          ))}
        </div>

        {/* Botón derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-darkWarm text-primary flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <IconChevronRight size={18} />
        </button>

        {/* Fades laterales */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-cream to-transparent z-[1]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-cream to-transparent z-[1]" />
      </div>

      {/* CTA */}
      {/* <Button title={"Ver menú completo"} url={"/menu"} isFilled={false}/> */}
      <Link
        href="/menu"
        className="text-[11px] uppercase tracking-[0.25em] text-darkWarm hover:text-darkWarm transition-colors flex items-center gap-2"
      >
        <span className="w-6 h-px bg-darkWarm/60" />
        Ver menú completo
        <span className="w-6 h-px bg-darkWarm/60" />
      </Link>
    </div>
  )
}