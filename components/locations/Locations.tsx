import Link from "next/link"
import { locations } from "@/data/locations"
import { IconBrandGoogleMaps } from "@tabler/icons-react"
import Image from "next/image"

interface LocationProps {
  py?: boolean
}

export const Locations = ({ py = true}: LocationProps) => {
  return (
    <div className={`bg-primaryColor ${py ? "py-10" : "py-0"}`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className=" overflow-hidden h-full order-2 lg:order-1">
          <Image width={1920} height={1080} loading="lazy" src="/map.webp" alt="" className="rounded-primarySize h-full object-cover"/>
        </div>
        <div className="grid xs:grid-cols-2 grid-cols-1 gap-4 order-1 lg:order-2">
          {
            locations.map((loc, idx) => (
              <div key={idx} className="bg-secundaryColor rounded-primarySize flex flex-col gap-4 justify-between p-5 text-primaryColor">
                <div className="grid gap-4">
                  <p className="text-xs">{loc.name}</p>
                  <div className="grid gap-2">
                    <p className="font-bold text-base">{loc.address}</p>
                    <p className="text-xs">{loc.hours}</p>
                  </div>
                </div>
                <div className="grid w-full items-center gap-2 grid-cols-6">
                  <Link href={`/locations/${loc.slug}`} className="bg-primaryColor text-center text-secundaryColor px-4 py-2 rounded-primarySize border-none col-span-4">Ver más</Link>
                  <Link href={loc.mapUrl} className="bg-primaryColor text-secundaryColor flex items-center justify-center px-4 py-2 rounded-primarySize border-none col-span-2">
                    <IconBrandGoogleMaps />
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
