import { Titles } from "@/data/titles"
import { Locations } from "../locations/Locations"
import { TitlePage } from "../ui/TitlePage"

export const LocationsHome = () => {
  return (
      <div className="px-6 bg-primaryColor min-h-[calc(100dvh-4rem)] py-26 flex flex-col items-center justify-center gap-10">
        <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false} className="min-h-40 pt-20 pb-6 !px-0" />
        <Locations py={false}/>
      </div>
  )
}
