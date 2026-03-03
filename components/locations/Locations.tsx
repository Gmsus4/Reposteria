"use client"
import { useState } from "react"
import { IconPhone, IconClock, IconMapPin, IconX, IconBrandWhatsapp, IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

interface Location {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  image: string
  gallery: string[]
  mapUrl: string
  embedUrl: string
}

const locations: Location[] = [
  {
    id: 1,
    name: "Estadio 3 de Marzo",
    address: "Av. Patria 1201, Uag, 45110 Zapopan, Jal.",
    phone: "+52 (332) 236-4324",
    hours: "Lun–Sáb: 9:00am – 8:00pm",
    image: "https://cdn.milenio.com/uploads/media/2024/04/30/estadio-marzo-une-sedes-mundial.jpeg",
    gallery: ["/locations/location1.webp", "/locations/location2.webp", "/locations/location3.webp", "/locations/location4.webp"],
    mapUrl: "https://maps.app.goo.gl/vzVeXZuMAfdURUFk8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.4048199609742!2d-103.42101651390193!3d20.693779649897476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aef02189d57b%3A0x4dd9996d73ca3908!2sEstadio%203%20de%20Marzo!5e0!3m2!1ses!2smx!4v1772244958409!5m2!1ses!2smx",
  },
]

export const Locations = () => {
  const [openId, setOpenId] = useState<number | null>(null)
  const [galleryIdx, setGalleryIdx] = useState<Record<number, number>>({})

  const getGalleryIdx = (id: number) => galleryIdx[id] ?? 0

  const prevImage = (loc: Location) => {
    setGalleryIdx((prev) => ({
      ...prev,
      [loc.id]: (getGalleryIdx(loc.id) - 1 + loc.gallery.length) % loc.gallery.length,
    }))
  }

  const nextImage = (loc: Location) => {
    setGalleryIdx((prev) => ({
      ...prev,
      [loc.id]: (getGalleryIdx(loc.id) + 1) % loc.gallery.length,
    }))
  }

  return (
    <div className="bg-primaryColor px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {locations.map((loc) => {
          const isOpen = openId === loc.id
          const currentImg = getGalleryIdx(loc.id)

          return (
            <div key={loc.id} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Lado izquierdo — mapa */}
              <div className="relative w-full h-96 overflow-hidden rounded-primarySize shadow-lg">
                <iframe src={loc.embedUrl} className="absolute inset-0 w-full h-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>

                <button
                  onClick={() => setOpenId(isOpen ? null : loc.id)}
                  className="absolute top-4 right-4 cursor-pointer z-20 bg-primaryColor text-white text-xs font-bold px-3 py-1.5 rounded-primarySize shadow flex items-center gap-1 hover:opacity-90 transition-opacity"
                >
                  Ver más
                  {isOpen ? <IconX size={12} /> : <IconMapPin size={12} />}
                </button>

                <div className={`absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
                  {isOpen && <div className="fixed inset-0 z-0" onClick={() => setOpenId(null)} />}
                  <div className="relative z-10 m-4 rounded-primarySize bg-white/95 backdrop-blur-sm p-5 flex gap-4 shadow-xl">
                    <div className="shrink-0 w-20 h-20 rounded-primarySize overflow-hidden sm:flex hidden">
                      <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-1.5 justify-center flex-1">
                      <h3 className="text-xl font-caveat font-bold text-primaryColor">{loc.name}</h3>
                      <div className="flex items-start gap-2 text-sm text-primaryColor/80">
                        <IconMapPin size={14} className="mt-0.5 shrink-0 text-primaryColor" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primaryColor/80">
                        <IconPhone size={14} className="shrink-0 text-primaryColor" />
                        <span>{loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primaryColor/80">
                        <IconClock size={14} className="shrink-0 text-primaryColor" />
                        <span>{loc.hours}</span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <a
                          href={`tel:${loc.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-1.5 text-xs font-semibold bg-primaryColor text-white px-3 py-1.5 rounded-primarySize hover:opacity-80 transition-opacity"
                        >
                          <IconPhone size={12} />
                          <span className="mt-0.5">
                            Llamar
                          </span>
                        </a>
                        <a
                          href={`https://wa.me/${loc.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold border border-primaryColor text-primaryColor px-3 py-1.5 rounded-primarySize hover:bg-primaryColor/10 transition-colors"
                        >
                          <IconBrandWhatsapp size={12} />
                          <span className="mt-0.5">
                            WhatsApp
                          </span>
                        </a>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold border border-primaryColor text-primaryColor px-3 py-1.5 rounded-primarySize hover:bg-primaryColor/10 transition-colors"
                        >
                          <IconMapPin size={12} />
                          <span className="mt-0.5">
                            G. Maps
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado derecho — galería */}
              <div className="flex flex-col gap-3 h-96">
                {/* Imagen principal */}
                <div className="relative flex-1 rounded-primarySize overflow-hidden">
                  <img src={loc.gallery[currentImg]} alt={`${loc.name} foto ${currentImg + 1}`} className="w-full h-full object-cover transition-all duration-300" />

                  {/* Flechas */}
                  <button
                    onClick={() => prevImage(loc)}
                    className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-primarySize bg-white/80 backdrop-blur-sm grid place-items-center hover:bg-white transition-colors shadow"
                  >
                    <IconChevronLeft size={16} className="text-primaryColor" />
                  </button>
                  <button
                    onClick={() => nextImage(loc)}
                    className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-primarySize bg-white/80 backdrop-blur-sm grid place-items-center hover:bg-white transition-colors shadow"
                  >
                    <IconChevronRight size={16} className="text-primaryColor" />
                  </button>

                  {/* Contador */}
                  <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-primarySize">
                    {currentImg + 1} / {loc.gallery.length}
                  </div>
                </div>

                {/* Miniaturas */}
                <div className="flex gap-2">
                  {loc.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIdx((prev) => ({ ...prev, [loc.id]: idx }))}
                      className={`flex-1 cursor-pointer h-16 rounded-primarySize overflow-hidden transition-all duration-200 ${
                        idx === currentImg ? "ring-2 ring-secundaryColor ring-offset-2 ring-offset-primaryColor" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
