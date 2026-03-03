import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FindAndGet } from "@/components/home/FindAndGet";
import { Navbar } from "@/components/Navbar";
import { Events } from "@/components/products/Events";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Metadata } from "next";
import { Locations } from "@/components/locations/Locations";
import { Titles } from "@/data/titles";
import { TitlePage } from "@/components/ui/TitlePage";
import { OnlyCategory } from "@/components/home/OnlyCategory";
import { Testimonials } from "@/components/home/Testimonials";
import { OrderOnline } from "@/components/home/OrderOnline";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://cupcakedemo.netlify.app/"),
  title: {
    default: "Red Velvet",
    template: "%s — Red Velvet",  // ← todas las páginas usan este formato
  },
  description: "Postres artesanales hechos con amor.",
}

export default function Home() {
  return (
    <div className="">
        <Navbar />

        <Hero />

        <MarqueeStrip />

        <FindAndGet />

        <OnlyCategory />

        <div className="bg-secundaryColor lg:py-20 py-10 px-6">
          <Events />
        </div>

        <Testimonials />
        
        <TitlePage title={Titles.locations.title} subtitle={Titles.locations.subtitle} isMarquee={false}/>

        <Locations />

        <OrderOnline />

        <MarqueeStrip />
        <Footer />
    </div>
  );
}
