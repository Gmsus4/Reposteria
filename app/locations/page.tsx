import { Footer } from "@/components/Footer";
import { Locations } from "@/components/locations/Locations";
import { Navbar } from "@/components/Navbar";
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
            <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle}/>
            <div className="px-4 bg-primaryColor">
                <Locations />
            </div>
            <Footer />
        </>
    )
}