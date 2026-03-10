import { locations } from "@/data/locations"
import { IconBrandGoogleMaps, IconClock, IconMapPin, IconPhone } from "@tabler/icons-react"
import Image from "next/image"
import { Button } from "../ui/Button"
import { images } from "@/data/images"

interface LocationProps {
  className?: string
}

export const Locations = ({ className = "bg-primary py-10" }: LocationProps) => {
  const loc = locations[0]

  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 items-stretch">

        {/* Mapa */}
        <div className="overflow-hidden rounded-primarySize order-2 lg:order-1 min-h-72">
          <Image
            width={1920} height={1080}
            loading="lazy"
            src={images.map[0].src}
            alt="Ubicación Central Molletes"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="order-1 lg:order-2 bg-darkWarm rounded-primarySize p-8 flex flex-col gap-5 text-primary">

          {/* Header */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary/40">Única sucursal</p>
            <h3 className="font-titleText text-3xl leading-tight">{loc.name}</h3>
            <p className="text-xs text-primary/50">{loc.city}, Jalisco</p>
          </div>

          <div className="h-px bg-primary/10" />

          {/* Datos */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <IconMapPin size={15} className="text-primary/40 mt-0.5 shrink-0" />
              <p className="text-sm text-primary/75 leading-relaxed">{loc.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <IconClock size={15} className="text-primary/40 shrink-0" />
              <p className="text-sm text-primary/75">{loc.hours}</p>
            </div>
            <div className="flex items-center gap-3">
              <IconPhone size={15} className="text-primary/40 shrink-0" />
              <p className="text-sm text-primary/75">{loc.phone}</p>
            </div>
          </div>

          <div className="h-px bg-primary/10" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "+4", label: "Años sirviendo" },
              { value: "12", label: "Categorías" },
              { value: "100%", label: "Al momento" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1 py-2 first:border-r first:border-primary/10 last:border-l last:border-primary/10">
                <span className="font-titleText text-2xl text-primary">{stat.value}</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/35 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="h-px bg-primary/10" />

          {/* Botones */}
          <div className="flex gap-3 mt-auto">
            <Button
              url={`/locations/${loc.slug}`}
              title="Ver más detalles"
              isFilled={false}
              className="flex-6 text-darkWarm"
              size="min"
            />
            <Button
              url={`tel:${loc.phone}`}
              isFilled={false}
              className="flex-1 text-darkWarm ring-primary/20"
              size="min"
            >
              <IconPhone size={18} />
            </Button>
            <Button
              url={loc.mapUrl}
              target="_blank"
              isFilled={true}
              className="bg-primary flex-1 text-darkWarm shrink-0 outline-1 outline-primary"
              size="min"
            >
              <IconBrandGoogleMaps size={18} className="text-primary"/>
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}