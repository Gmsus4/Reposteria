import { images } from "@/data/images"
import { IconHeart, IconLeaf, IconSparkles } from "@tabler/icons-react"
import Image from "next/image"

type Benefit = {
  icon: React.ComponentType<{ height?: number; width?: number; className?: string }>
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: IconHeart,
    title: "Pasión Artesanal",
    description: "Hecho a mano, sin procesos industriales.",
  },
  {
    icon: IconLeaf,
    title: "Ingredientes de Calidad",
    description: "Proveedores locales, frescura garantizada.",
  },
  {
    icon: IconSparkles,
    title: "Personalización Total",
    description: "Adaptado a tus gustos y ocasión especial.",
  },
]

export const BenefitsPanel = () => {
  return (
    <div className="bg-secundaryColor py-20 px-6 sm:px-10 lg:px-20">
      <h2 id="recomendaciones" className="text-center xs:text-6xl text-4xl w-2/3 m-auto font-titleText text-primaryColor mb-12 scroll-mt-20">
       Lo Que Nos Hace Únicos
      </h2>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="grid place-items-center rounded-primarySize p-10 border-primaryColor/30 bg-primaryColor/5 border-1">
            <Icon className="text-primaryColor mb-2" height={30} width={30} />
            <h3 className="text-primaryColor font-bold font-titleText mb-2 text-2xl xs:text-xl text-center">{title}</h3>
            <p className="text-primaryColor text-center">{description}</p>
          </div>
        ))}
        <div className="rounded-primarySize overflow-hidden md:col-span-3 col-span-1">
          <Image width={1920} height={1080} src={images.benefitsPanel[0].src} alt="" />
        </div>
      </div>
    </div>
  )
}