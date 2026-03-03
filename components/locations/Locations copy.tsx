import Link from "next/link"
import { locations } from "@/data/locations"
import { IconBrandGoogleMaps } from "@tabler/icons-react"

export const Locations = () => {
  return (
    <div className="bg-primaryColor px-4 pb-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className=" overflow-hidden h-full order-2 lg:order-1">
          <img src="map.png" alt="" className="rounded-primarySize h-full object-cover"/>
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
                  <Link href={loc.mapUrl} className="btn bg-primaryColor border-none col-span-4">Ver más</Link>
                  <Link href={loc.mapUrl} className="btn bg-primaryColor border-none col-span-2">
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
