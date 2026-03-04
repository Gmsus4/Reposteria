import { Titles } from "@/data/titles"
import { Locations } from "../locations/Locations"
import { TitlePage } from "../ui/TitlePage"

export const LocationsHome = () => {
  return (
    <>
      <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false} className="min-h-40 pt-20" />
      <Locations />
    </>
  )
}
