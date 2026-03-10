import { Locations } from "../locations/Locations"

export const LocationsHome = () => {
  return (
      <div className="bg-primary xs:min-h-[calc(100dvh-4rem)] md:py-26 py-16 flex flex-col items-center justify-center md:gap-2 gap-0 px-6">
        {/* <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false} className="min-h-40 pb-6 !px-0" /> */}
        <div className="max-w-7xl">
          <div className="grid gap-2"> 
            <h2 className="text-darkWarm font-titleText text-center text-3xl md:text-6xl leading-tight">Ven a visitarnos</h2>
            <p className="text-base text-darkWarm text-center">Estamos en el centro de Etzatlán, Jalisco.</p>
          </div>
        </div>
        <Locations className="py-6"/>
      </div>
  )
}
