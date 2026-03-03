"use client"

import { contactData } from "@/data/contactData"
import { navItems } from "@/data/navItems"
import { IconMenu2, IconPhoneCall } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogoBtn } from "./ui/LogoBtn"

export const Navbar = () => {
  const pathname = usePathname()

  // Función auxiliar para determinar si el link está activo
  const isActive = (href: string) => {
    // Exact match para la mayoría de casos
    // Si tienes rutas anidadas (ej: /blog/1), puedes usar pathname.startsWith(href)
    return pathname === href
  }

  return (
    <div className="navbar bg-primaryColor fixed z-1000">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost px-0 lg:hidden text-secundaryColor hover:bg-secundaryColor/10 transition-colors">
              <IconMenu2 size={40} />
            </div>

            <ul tabIndex={-1} className="menu dropdown-content z-[999] mt-3 w-64 p-3 shadow-2xl rounded-2xl bg-secundaryColor border border-primaryColor/10">
              {navItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-primaryColor font-bold hover:bg-primaryColor hover:text-secundaryColor transition-all duration-200 group"
                    >
                      <span className="font-titleText text-xl">{item.title}</span>
                      <Icon width={28} height={28} className="text-primaryColor/95 group-hover:text-secundaryColor transition-colors" />
                    </Link>
                  </li>
                )
              })}

              {/* Separador + CTA */}
              <div className="h-px bg-primaryColor/10 my-1" />
              <li>
                <Link
                  href={`tel:${contactData[0].items[0].value}`}
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-primaryColor text-secundaryColor font-titleText text-xl hover:opacity-90 transition-opacity"
                >
                  Pedir ahora
                  <IconPhoneCall size={20} />
                </Link>
              </li>
            </ul>
          </div>

          {/* <Link href="/" className="btn btn-ghost text-secundaryColor font-titleText text-xl">
            TAGB
          </Link> */}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-30 justify-between m-auto w-full px-4 h-14 rounded-full relative">
            <div className="flex gap-2 ">
              {navItems.slice(0, 2).map((item, idx) => {
                const Icon = item.icon
                const active = isActive(item.href)

                return (
                  <li
                    key={idx}
                    className={`
                      font-semibold text-secundaryColor transition-all duration-300 ease-out
                      px-4 rounded-primarySize cursor-pointer
                      ${active ? "bg-secundaryColor text-primaryColor!" : "hover:bg-secundaryColor hover:text-primaryColor"}
                    `}
                  >
                    <Link href={item.href} className="flex items-center gap-1.5 font-titleText font-bold">
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </div>

            <div className="w-11 h-11 grid place-items-center bg-accentColor rounded-primarySize absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <LogoBtn />
            </div>

            <div className="flex gap-2">
              {navItems.slice(2, 4).map((item, idx) => {
                const Icon = item.icon
                const active = isActive(item.href)

                return (
                  <li
                    key={idx + 2}
                    className={`
                      font-semibold text-secundaryColor transition-all duration-300 ease-out
                      px-4 rounded-primarySize cursor-pointer
                      ${active ? "bg-secundaryColor text-primaryColor!" : "hover:bg-secundaryColor hover:text-primaryColor"}
                    `}
                  >
                    <Link href={item.href} className="flex items-center gap-1.5 font-titleText">
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </div>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          {/* <Link target="_blank" href={"https://www.instagram.com/tagblade/"} className="btn bg-secundaryColor border-none text-primaryColor shadow-none font-bold">
            <IconBrandInstagram />
          </Link> */}
          <div className="w-11 h-11 bg-accentColor rounded-primarySize grid place-items-center">
            <LogoBtn />
          </div>
        </div>
      </div>
    </div>
  )
}
