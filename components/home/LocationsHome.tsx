import { Titles } from "@/data/titles"
import { Locations } from "../locations/Locations"
import { TitlePage } from "../ui/TitlePage"

export const LocationsHome = () => {
  return (
      <div className="bg-primaryColor xs:min-h-[calc(100dvh-4rem)] md:py-26 py-16 flex flex-col items-center justify-center md:gap-16 gap-12 px-6">
        {/* <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false} className="min-h-40 pb-6 !px-0" /> */}
        <div className="max-w-7xl">
          <div className="grid gap-6"> 
            <h2 className="text-secundaryColor font-titleText text-center text-3xl font-bold md:text-6xl">Estamos más cerca <br /> de lo que crees</h2>
            <p className="text-base text-secundaryColor text-center">Ven a descubrir el aroma del café recién hecho y los postres del día.</p>
          </div>
        </div>
        <Locations py={false}/>
      </div>
  )
}
