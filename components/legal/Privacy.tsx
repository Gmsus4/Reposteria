"use client"
import { useRef } from "react"
import { privacy } from "@/data/privacy"
import { IconLock, IconShieldCheck, IconMail, IconArrowRight } from "@tabler/icons-react"
import { BannerFooter } from "../ui/BannerFooter"
import Link from "next/link"

export const Privacy = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollTo = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="w-full bg-secundaryColor pt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Contenido principal */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Header */}
            <div className="relative mb-4 p-10 rounded-primarySize bg-primaryColor overflow-hidden">
              <div className="absolute -top-10 -right-10 w-52 h-52 rounded-primarySize bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-primarySize bg-white/5" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-secundaryColor rounded-primarySize w-10 h-10 grid place-items-center shrink-0">
                    <IconLock size={18} className="text-primaryColor" />
                  </div>
                  <span className="text-xs tracking-widest uppercase text-secundaryColor/60 font-semibold">Última actualización: Febrero 2026</span>
                </div>
                <h1 className="font-titleText text-6xl sm:text-7xl text-secundaryColor leading-none">Aviso de Privacidad</h1>
                <p className="text-secundaryColor/70 text-sm leading-relaxed max-w-xl">
                  Valoramos y respetamos tu privacidad. Este aviso describe cómo recopilamos, usamos y protegemos tus datos personales conforme a la LFPDPPP.
                </p>
              </div>
            </div>

            {/* Secciones */}
            <div className="flex flex-col gap-4">
              {privacy.map((section, idx) => (
                <div
                  key={section.title}
                  ref={(el) => {
                    sectionRefs.current[idx] = el
                  }}
                  className="rounded-primarySize border-1 border-primaryColor/10 bg-primaryColor/5 overflow-hidden scroll-mt-22"
                >
                  <div className="flex items-center gap-4 px-7 py-5 bg-primaryColor">
                    <div className="bg-secundaryColor rounded-primarySize w-8 h-8 grid place-items-center shrink-0">
                      <span className="font-titleText text-primaryColor text-sm font-bold leading-none">{idx + 1}</span>
                    </div>
                    <h2 className="font-titleText text-2xl sm:text-3xl text-secundaryColor">{section.title}</h2>
                  </div>
                  <ul className="flex flex-col divide-y divide-primaryColor/20 px-7">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 py-4 text-sm text-primaryColor leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-primarySize bg-primaryColor shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Aside — solo desktop */}
          <aside className="hidden lg:flex flex-col gap-4 w-72 shrink-0 sticky top-24 self-start">
            {/* Índice de secciones */}
            <div className="rounded-primarySize border-1 border-primaryColor/10 overflow-hidden">
              <div className="px-5 py-4 bg-primaryColor">
                <p className="text-xs tracking-widest uppercase text-secundaryColor font-semibold">Contenido</p>
              </div>
              <nav className="flex flex-col divide-y divide-primaryColor/20 bg-secundaryColor">
                {privacy.map((section, idx) => (
                  <button
                    key={section.title}
                    onClick={() => scrollTo(idx)}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-primaryColor/10 transition-colors duration-200 group text-left cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-primaryColor w-4 shrink-0">{idx + 1}</span>
                    <span className="text-xs text-primaryColor group-hover:text-primaryColor transition-colors leading-snug flex-1">{section.title}</span>
                    <IconArrowRight size={12} className="text-primaryColor/40 group-hover:text-primaryColor transition-colors shrink-0" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Derechos ARCO */}
            <div className="rounded-primarySize bg-primaryColor overflow-hidden p-5 flex flex-col gap-4 border-1 border-primaryColor/10">
              <div className="flex items-center gap-2">
                <IconShieldCheck size={18} className="text-secundaryColor" />
                <p className="text-xs tracking-widest uppercase text-secundaryColor/80 font-semibold">Tus derechos</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Acceso", "Rectificación", "Cancelación", "Oposición"].map((right) => (
                  <div key={right} className="rounded-primarySize bg-secundaryColor px-3 py-2.5 text-center">
                    <p className="font-titleText text-primaryColor text-lg leading-none">{right}</p>
                  </div>
                ))}
              </div>
              <p className="text-secundaryColor/70 text-[11px] leading-relaxed">Puedes ejercer tus derechos TAGB en cualquier momento contactándonos directamente.</p>
            </div>

            {/* CTA contacto */}
            <div className="rounded-primarySize border-1 border-primaryColor/10 bg-secundaryColor p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <IconMail size={16} className="text-primaryColor" />
                <p className="text-xs tracking-widest uppercase text-primaryColor font-semibold">¿Tienes dudas?</p>
              </div>
              <p className="text-xs text-primaryColor leading-relaxed">Si deseas ejercer tus derechos o tienes preguntas sobre este aviso, escríbenos.</p>
              <Link href="/contact" className="w-full text-center rounded-primarySize bg-primaryColor text-secundaryColor font-titleText text-lg py-2.5 hover:opacity-90 transition-opacity">
                Contáctanos
              </Link>
              <Link href="/terms" className="w-full text-center rounded-primarySize border-2 border-primaryColor text-primaryColor font-titleText text-lg py-2.5 hover:bg-primaryColor/10 transition-colors">
                Términos y condiciones
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-10">
          <BannerFooter />
        </div>
      </div>
    </div>
  )
}
