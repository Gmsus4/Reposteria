
import { Locations } from "@/components/locations/Locations";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestras Ubicaciones",
  description: "Encuéntranos en nuestras sucursales y ven a disfrutar de nuestros postres artesanales.",
}

export default function LocationsPage() {
    return (
        <>
            <Navbar />
            <div className="bg-primaryColor pb-20 pt-6 min-h-[calc(100dvh-4rem)] py-26 flex flex-col items-center justify-center px-6">
                <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false}/>
                <Locations py={false}/>
            </div>
            <MarqueeStrip />
            <Footer />
        </>
    )
}