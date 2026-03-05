import { FindAndGet } from "@/components/home/FindAndGet";
import { AboutDetails } from "@/components/shared/AboutDetails";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Metadata } from "next";
import { OnlyCategory } from "@/components/home/OnlyCategory";
import { Testimonials } from "@/components/home/Testimonials";
import { OrderOnline } from "@/components/shared/OrderOnline";
import { LocationsHome } from "@/components/home/LocationsHome";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";

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
        <AboutDetails />
        <Testimonials />
        <LocationsHome />
        <OrderOnline />
        <MarqueeStrip />
        <Footer />
    </div>
  );
}
