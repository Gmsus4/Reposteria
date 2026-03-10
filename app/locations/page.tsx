
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
                <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false}/>
                <div className="bg-cream px-6">
                    <Locations className="py-21"/>
                </div>
            <MarqueeStrip />
            <Footer />
        </>
    )
}