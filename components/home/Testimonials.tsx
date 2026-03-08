import { images } from "@/data/images"
import { IconQuote } from "@tabler/icons-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Cada pastel que he pedido ha superado mis expectativas. El Red Velvet es simplemente inigualable, húmedo y con ese frosting perfecto.",
    author: "María G.",
    role: "Amante de los pasteles",
  },
  {
    quote: "Pedí la mesa de postres para la boda de mi hija y todos los invitados quedaron encantados. Cada detalle fue perfecto.",
    author: "Roberto S.",
    role: "Padre de la novia",
  },
  {
    quote: "El Tiramisú Clásico me transporta directo a Italia. Nunca había probado algo tan auténtico aquí en México.",
    author: "Jordan T.",
    role: "Fan del tiramisú",
  },
]

export const Testimonials = () => {
  return (
    <div className="w-full bg-secundaryColor xs:min-h-[calc(100dvh-4rem)] md:py-26 py-16 flex flex-col items-center justify-center md:gap-16 gap-12 px-6">
      <h2 className="text-primaryColor font-titleText text-center text-3xl font-bold md:text-6xl">Lo que dicen <br /> nuestros clientes</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Columna 1 */}
        <div className="flex lg:flex-col md:flex-row flex-col gap-4">
          {/* Testimonial 1 */}
          <div className="border-1 border-primaryColor/20 rounded-primarySize flex flex-col gap-4 bg-primaryColor/5 md:flex-1 lg:flex-0">
            <div className="p-7 flex flex-col h-full justify-between gap-4">
                <IconQuote size={30} className="text-primaryColor"/>
                <p className="text-primaryColor font-light text-base">{testimonials[0].quote}</p>
                <p className="text-primaryColor font-semibold font-titleText text-md">{testimonials[0].author} — {testimonials[0].role}</p>
            </div>
          </div>
          {/* Imagen abajo */}
          <div className="rounded-primarySize overflow-hidden lg:min-h-96 min-h-60 flex-1">
            <Image loading="lazy" width={1920} height={1080} src={images.testimonials[0].src} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Columna 2 — imagen grande arriba, testimonial abajo */}
        <div className="flex lg:flex-col md:flex-row flex-col-reverse gap-4">
          <div className="rounded-primarySize overflow-hidden flex-1 lg:min-h-96 min-h-60">
            <Image loading="lazy" width={1920} height={1080} src={images.testimonials[1].src} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="border-1 border-primaryColor/20 rounded-primarySize flex flex-col gap-4 bg-primaryColor/5 md:flex-1 lg:flex-0">
          <div className="p-7 flex flex-col h-full justify-between gap-4">
            <IconQuote size={30} className="text-primaryColor"/>
            <p className="text-primaryColor text-base font-light">{testimonials[1].quote}</p>
            <p className="text-primaryColor font-semibold font-titleText text-md">{testimonials[1].author} — {testimonials[1].role}</p>
          </div>
          </div>
        </div>

        {/* Columna 3 — testimonial arriba, imagen abajo */}
        <div className="flex lg:flex-col md:flex-row flex-col gap-4">
          <div className="border-1 border-primaryColor/20 rounded-primarySize flex flex-col gap-4 bg-primaryColor/5 md:flex-1 lg:flex-0">
            <div className="p-7 flex flex-col h-full justify-between gap-4">
                <IconQuote size={30} className="text-primaryColor"/>
                <p className="text-primaryColor font-light text-base">{testimonials[2].quote}</p>
                <p className="text-primaryColor font-semibold font-titleText text-md">{testimonials[2].author} — {testimonials[2].role}</p>
            </div>
          </div>
          <div className="rounded-primarySize overflow-hidden lg:min-h-96 min-h-60 flex-1">
            <Image loading="lazy" width={1920} height={1080} src={images.testimonials[2].src} alt={""} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}