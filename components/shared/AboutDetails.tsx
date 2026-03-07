import { images } from "@/data/images"
import { IconCake, IconHeartHandshake, IconSparkles, IconStar } from "@tabler/icons-react"
import Image from "next/image"

type Feature = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  border?: string
}

const features: Feature[] = [
  {
    icon: IconCake,
    label: "Ingredientes frescos",
    border: "xs:border-r-1 xs:border-b-1",
  },
  {
    icon: IconStar,
    label: "Repostería con vocación",
    border: "xs:border-b-1",
  },
  {
    icon: IconSparkles,
    label: "Presentación impecable",
    border: "xs:border-r-1",
  },
  {
    icon: IconHeartHandshake,
    label: "Atención personalizada",
  },
]

export const AboutDetails = () => {
  return (
    <div className="bg-secundaryColor xs:min-h-[calc(100dvh-4rem)] md:py-26 py-16 flex flex-col items-center justify-center md:gap-16 gap-12 px-6">
      <div className="relative max-w-7xl">
        <div className="min-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid gap-4">
            <div className="grid lg:gap-0 gap-4">
              <h2 className="text-3xl md:text-6xl text-primaryColor font-titleText">Nuestra Forma de Trabajar</h2>
              <p className="text-base text-primaryColor">Un proceso pensado con cariño, dedicación y amor. Cuidamos cada detalle de principio a fin para que tu momento sea único.</p>
            </div>
            <div className="icons grid grid-cols-1 xs:grid-cols-2 place-items-center pt-4">
              {features.map(({ icon: Icon, label, border }) => (
                <div
                  key={label}
                  className={`w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pb-2 pt-4 xs:pb-8 xs:border-black/10 ${border ?? ""}`}
                >
                  <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                    <Icon className="text-secundaryColor" />
                  </div>
                  <p className="text-base text-primaryColor text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid xs:grid-cols-2 grid-cols-1 gap-6">
            <div className="rounded-primarySize overflow-hidden h-full">
              <Image loading="lazy" width={1920} height={1080} src={images.aboutDetails[0].src} alt="" className="h-full object-cover" />
            </div>
            <div className="grid grid-rows-2 gap-6 h-full">
              <div className="rounded-primarySize overflow-hidden">
                <Image loading="lazy" width={1920} height={1080} src={images.aboutDetails[1].src} alt="" className="h-full object-cover" />
              </div>
              <div className="rounded-primarySize overflow-hidden">
                <Image loading="lazy" width={1920} height={1080} src={images.aboutDetails[2].src} alt="" className="h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}