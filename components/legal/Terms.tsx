"use client"
import { useRef } from "react"
import { terms } from "@/data/terms"
import { IconLock, IconShieldCheck, IconMail, IconArrowRight } from "@tabler/icons-react"
import { BannerFooter } from "../ui/BannerFooter"
import Link from "next/link"

export const TermsAndConditions = () => {
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
            <div className="relative mb-4 p-10 rounded-3xl bg-primaryColor overflow-hidden">
              <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-secundaryColor rounded-full w-10 h-10 grid place-items-center shrink-0">
                    <IconLock size={18} className="text-primaryColor" />
                  </div>
                  <span className="text-xs tracking-widest uppercase text-secundaryColor/60 font-semibold">Última actualización: Febrero 2026</span>
                </div>
                <h1 className="font-titleText text-6xl sm:text-7xl text-secundaryColor leading-none">Términos y condiciones</h1>
                <p className="text-secundaryColor/70 text-sm leading-relaxed max-w-xl">
                  Al realizar un pedido con nosotros, aceptas los siguientes términos. Te pedimos leerlos con atención para garantizar la mejor experiencia.
                </p>
              </div>
            </div>

            {/* Secciones */}
            <div className="flex flex-col gap-4">
              {terms.map((section, idx) => (
                <div
                  key={section.title}
                  ref={(el) => {
                    sectionRefs.current[idx] = el
                  }}
                  className="rounded-2xl border-1 border-primaryColor/10 bg-primaryColor/5 overflow-hidden scroll-mt-22"
                >
                  <div className="flex items-center gap-4 px-7 py-5 bg-primaryColor">
                    <div className="bg-secundaryColor rounded-full w-8 h-8 grid place-items-center shrink-0">
                      <span className="font-titleText text-primaryColor text-sm font-bold leading-none">{idx + 1}</span>
                    </div>
                    <h2 className="font-titleText text-2xl sm:text-3xl text-secundaryColor">{section.title}</h2>
                  </div>
                  <ul className="flex flex-col divide-y divide-primaryColor/20 px-7">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 py-4 text-sm text-primaryColor leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primaryColor shrink-0" />
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
            <div className="rounded-2xl border-1 border-primaryColor/10 overflow-hidden">
              <div className="px-5 py-4 bg-primaryColor">
                <p className="text-xs tracking-widest uppercase text-secundaryColor font-semibold">Contenido</p>
              </div>
              <nav className="flex flex-col divide-y divide-primaryColor/20 bg-secundaryColor">
                {terms.map((section, idx) => (
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

            {/* Lo más importante */}
            <div className="rounded-2xl bg-primaryColor border-2 border-primaryColor overflow-hidden p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <IconShieldCheck size={18} className="text-secundaryColor" />
                <p className="text-xs tracking-widest uppercase text-secundaryColor/80 font-semibold">Lo más importante</p>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Anticipo requerido", value: "50%" },
                  { label: "Anticipación mínima", value: "48 hrs" },
                  { label: "Pedidos personalizados", value: "5 días" },
                  { label: "Reembolso -24hrs", value: "Sin reembolso" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl bg-secundaryColor px-3 py-2.5">
                    <p className="text-[11px] text-primaryColor/70 leading-none">{item.label}</p>
                    <p className="font-titleText text-primaryColor text-base leading-none font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA contacto */}
            <div className="rounded-2xl border-1 border-primaryColor/10 bg-secundaryColor p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <IconMail size={16} className="text-primaryColor" />
                <p className="text-xs tracking-widest uppercase text-primaryColor font-semibold">¿Tienes dudas?</p>
              </div>
              <p className="text-xs text-primaryColor leading-relaxed">Si deseas ejercer tus derechos o tienes preguntas sobre este aviso, escríbenos.</p>
              <Link href="/contact" className="w-full text-center rounded-xl bg-primaryColor text-secundaryColor font-titleText text-lg py-2.5 hover:opacity-90 transition-opacity">
                Contáctanos
              </Link>
              <Link href="/privacy" className="w-full text-center rounded-xl border-2 border-primaryColor text-primaryColor font-titleText text-lg py-2.5 hover:bg-primaryColor/10 transition-colors">
                Aviso de Privacidad
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
