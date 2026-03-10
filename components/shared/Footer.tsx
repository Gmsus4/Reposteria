import { navItems, otherLinks } from "@/data/navItems"
import { IconCup } from "@tabler/icons-react"
import Link from "next/link"
import { categories } from "@/data/menu"
import { LogoBtn } from "../ui/LogoBtn"
import { SocialLinks } from "../ui/SocialLinks"

export const Footer = () => {
  return (
    <footer className="bg-primary w-full pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 pt-12 pb-6">
        {/* Bloque superior: logo + tagline a ancho completo */}
        <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-between gap-4 mb-10 pb-8 border-b border-darkWarm/20">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center bg-accentColor rounded-primarySize">
              <LogoBtn />
            </div>
            <span className="text-darkWarm mt-1 font-bold text-xl tracking-tight">TAGB</span>
          </div>
          <p className="text-darkWarm text-sm max-w-xs sm:text-right leading-relaxed">
            Endulzando momentos desde 2010. <br className="hidden sm:block"/>Hecho con amor, entregado con dedicación.
          </p>
        </div>

        {/* Grid de columnas: se adapta por breakpoint */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* Col 1 — Inicio */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-darkWarm/90 font-semibold">Inicio</span>
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Link key={idx} href={item.href} className="group flex items-center gap-2 text-sm text-darkWarm font-medium hover:text-darkWarm transition-colors duration-150">
                    <span className="w-0 group-hover:w-2 h-px bg-darkWarm transition-all duration-200 rounded-primarySize" />
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Col 2 — Categorías */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-darkWarm/90 font-semibold">Especialidades</span>
            <div className="flex flex-col gap-2">
              {
                categories.slice(1).map((label, idx) => (
                  <Link key={idx} href={`/products?category=${label}`} className="group flex items-center gap-2 text-sm text-darkWarm font-medium hover:text-darkWarm transition-colors duration-150">
                    <span className="w-0 group-hover:w-2 h-px bg-darkWarm transition-all duration-200 rounded-primarySize" />
                    {label}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Col 3 — Empresa (visible solo sm+) */}
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-darkWarm/90 font-semibold">Empresa</span>
            <div className="flex flex-col gap-2">
              {
                otherLinks.map((items, idx) => (
                <Link key={idx} href={items.href} className="group flex items-center gap-2 text-sm text-darkWarm font-medium hover:text-darkWarm transition-colors duration-150">
                  <span className="w-0 group-hover:w-2 h-px bg-darkWarm transition-all duration-200 rounded-primarySize" />
                  {items.title}
                </Link>
                ))
              }
            </div>
          </div>

          {/* Col 4 — Síguenos */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-darkWarm/90 font-semibold">Síguenos</span>
            <SocialLinks />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 pt-5 flex flex-col gap-2 text-[11px] text-darkWarmp">
          <h3 className="font-titleText text-darkWarm font-bold text-center text-5xl xx:text-6xl md:text-8xl lg:text-[160px] xl:text-[180px] w-full leading-none whitespace-nowrap">
            Central molletes
          </h3>
          <span className="text-center text-darkWarm">© {new Date().getFullYear()} TAGB Industries Ltd. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
