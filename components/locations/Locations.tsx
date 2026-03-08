import Link from "next/link"
import { locations } from "@/data/locations"
import { IconBrandGoogleMaps } from "@tabler/icons-react"
import Image from "next/image"
import { Button } from "../ui/Button"
import { images } from "@/data/images"

interface LocationProps {
  py?: boolean
}

export const Locations = ({ py = true}: LocationProps) => {
  return (
    <div className={`bg-primaryColor ${py ? "py-10" : "py-0"}`}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className=" overflow-hidden h-full order-2 lg:order-1">
          <Image width={1920} height={1080} loading="lazy" src={images.map[0].src} alt="" className="rounded-primarySize h-full object-cover"/>
        </div>
        <div className="grid xs:grid-cols-2 grid-cols-1 gap-4 order-1 lg:order-2">
          {
            locations.map((loc, idx) => (
              <div key={idx} className="bg-secundaryColor/90 rounded-primarySize flex flex-col gap-4 justify-between p-5 text-primaryColor">
                <div className="grid gap-4">
                  <p className="text-xs">{loc.name}</p>
                  <div className="grid gap-2">
                    <p className="font-bold text-base">{loc.address}</p>
                    <p className="text-xs">{loc.hours}</p>
                  </div>
                </div>
                <div className="grid w-full items-center gap-2 grid-cols-6">
                  <Button url={`/locations/${loc.slug}`} title="Ver más" className="col-span-4 bg-transparent" size="min"/>
                  <Button url={loc.mapUrl} isFilled={false} className="col-span-2" size="min">
                    <IconBrandGoogleMaps className="text-secundaryColor"/>
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
