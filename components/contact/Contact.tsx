"use client"
import { useState } from "react"
import { IconSparkles } from "@tabler/icons-react"
import { SocialLinks } from "../ui/SocialLinks"
import { contactData } from "@/data/contactData"

export const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: "", email: "", phone: "", message: "" })
  }

  const inputClass = (name: string) =>
    `w-full bg-transparent text-primaryColor placeholder:text-primaryColor/70 outline-none text-lg transition-all duration-300 py-3 ${focused === name ? "placeholder:opacity-0" : ""}`

  const wrapperClass = (name: string) => `relative border-b-2 transition-all duration-300 ${focused === name ? "border-primaryColor" : "border-primaryColor/65"}`

  return (
    <div className="w-full bg-secundaryColor px-0 lg:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden lg:rounded-primarySize">
        {/* Lado izquierdo — decorativo */}
        <div className="relative bg-primaryColor p-12 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-primarySize bg-white/5"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-primarySize bg-white/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-primarySize bg-white/[0.03]"></div>

          <div className="relative z-10">
            <IconSparkles size={32} className="text-secundaryColor mb-6" />
            <h2 className="font-caveat text-6xl text-secundaryColor leading-tight mb-4">Hagamos algo dulce juntos</h2>
            <p className="text-secundaryColor/90 text-sm leading-relaxed mb-2">Cada detalle importa. Cuéntanos tu idea y nosotros la convertimos en algo memorable.</p>
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            <div className="h-px bg-white/10"></div>
            {contactData.map((info) => (
              <div key={info.title} className="flex flex-col gap-2 text-sm">
                {/* <p className="text-xs tracking-widest uppercase text-secundaryColor/90">{info.title}</p> */}
                {info.items.map((item) => {
                  const href = item.href ?? (info.prefix ? `${info.prefix}${item.label}` : undefined)
                  return href ? (
                    <a key={item.label} href={href} target={item.href ? "_blank" : undefined} rel="noopener noreferrer" className="text-secundaryColor hover:text-white transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <p key={item.label} className="text-secundaryColor">{item.label}</p>
                  )
                })}
              </div>  
            ))}
            {/* <div className="flex flex-col gap-4 text-sm">
              <a href="tel:+525551234567" className="text-secundaryColor hover:text-white transition-colors">
                +52 (555) 123-4567
              </a>
              <a href="mailto:hola@tuposteria.com" className="text-secundaryColor hover:text-white transition-colors">
                hola@tuposteria.com
              </a>
              <p className="text-secundaryColor">Calle Principal #123, Centro</p>
            </div> */}
            <div className="flex gap-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Lado derecho — formulario */}
        <form onSubmit={handleSubmit} className="bg-secundaryColor p-12 flex flex-col justify-center gap-8">
          <div className="grid grid-cols-2 gap-6">
            <div className={`${wrapperClass("name")} col-span-1`}>
              <label className="text-[10px] tracking-widest uppercase text-primaryColor/90">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="Tu nombre"
                required
                className={inputClass("name")}
              />
            </div>

            <div className={`${wrapperClass("phone")} col-span-1`}>
              <label className="text-[10px] tracking-widest uppercase text-primaryColor/90">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
                placeholder="+52 555 0000"
                required
                className={inputClass("phone")}
              />
            </div>
          </div>

          <div className={wrapperClass("email")}>
            <label className="text-[10px] tracking-widest uppercase text-primaryColor/90">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              placeholder="tu@email.com"
              required
              className={inputClass("email")}
            />
          </div>

          <div className={wrapperClass("message")}>
            <label className="text-[10px] tracking-widest uppercase text-primaryColor/90">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder="Cuéntanos tu idea..."
              rows={3}
              required
              className={`${inputClass("message")} resize-none`}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full cursor-pointer py-4 rounded-primarySize font-caveat text-xl font-bold tracking-wide transition-all duration-300 ${
              sent ? "bg-primaryColor text-secundaryColor scale-95" : "bg-primaryColor text-secundaryColor hover:opacity-90 active:scale-95"
            }`}
          >
            {sent ? "¡Listo! Te contactamos pronto 🎉" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  )
}
