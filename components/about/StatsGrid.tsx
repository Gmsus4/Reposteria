import { images } from "@/data/images"
import { IconCake, IconConfetti, IconHeart, IconHourglass, IconHourglassEmpty, IconShoppingBag, IconUsers } from "@tabler/icons-react"
import Image from "next/image"

type StatItem = {
  type: "stat" | "image"
  colSpan?: string
  order: string
  height?: string
  stat?: {
    value: string
    label: string
    iconTop: React.ComponentType<{ className?: string; size?: number }>
    iconBottom: React.ComponentType<{ className?: string; size?: number }>
  }
  image?: { src: string; alt: string }
}

const items: StatItem[] = [
  {
    type: "stat",
    colSpan: "lg:col-span-2",
    order: "order-1 lg:order-1",
    stat: {
      value: "2500+",
      label: "Clientes satisfechos",
      iconTop: IconUsers,
      iconBottom: IconConfetti,
    },
  },
  {
    type: "image",
    colSpan: "lg:col-span-1",
    order: "order-2 lg:order-2",
    height: "lg:h-84",
    image: { src: images.statsGrid[0].src, alt: "" },
  },
  {
    type: "stat",
    colSpan: "lg:col-span-1",
    order: "order-3 md:order-4 lg:order-3",
    height: "lg:h-84",
    stat: {
      value: "10",
      label: "años",
      iconTop: IconHourglassEmpty,
      iconBottom: IconHeart,
    },
  },
  {
    type: "image",
    colSpan: "lg:col-span-1",
    order: "order-3 lg:order-4",
    height: "lg:h-84",
    image: { src: images.statsGrid[1].src, alt: "" },
  },
  {
    type: "stat",
    colSpan: "lg:col-span-1",
    order: "order-5 lg:order-5",
    height: "lg:h-84",
    stat: {
      value: "20+",
      label: "Productos",
      iconTop: IconCake,
      iconBottom: IconShoppingBag,
    },
  },
  {
    type: "image",
    colSpan: "lg:col-span-2",
    order: "order-6 lg:order-6",
    height: "lg:h-84",
    image: { src: images.statsGrid[2].src, alt: "" },
  },
]

export const StatsGrid = () => {
  return (
    <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 blocks">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-primaryColor rounded-primarySize overflow-hidden aspect-auto lg:aspect-auto md:aspect-square ${item.colSpan ?? ""} ${item.order} ${item.height ?? ""} ${item.type === "stat" ? "relative p-6 py-14 grid place-items-center" : ""}`}
        >
          {item.type === "stat" && item.stat ? (
            <>
              <item.stat.iconTop className="absolute top-4 right-4 text-secundaryColor/90" size={32} />
              <item.stat.iconBottom className="absolute bottom-4 left-4 text-secundaryColor/90" size={32} />
              <div className="text-yellow grid gap-1">
                <span className="text-center text-5xl md:text-7xl font-medium text-secundaryColor font-titleText">
                  {item.stat.value}
                </span>
                <h3 className="text-center lg:text-2xl text-xl text-secundaryColor font-titleText font-bold">{item.stat.label}</h3>
              </div>
            </>
          ) : item.image ? (
            <Image width={1920} height={1080} src={item.image.src} alt={item.image.alt} className="w-full h-80 md:h-auto object-cover overflow-hidden" />
          ) : null}
        </div>
      ))}
    </div>
  )
}