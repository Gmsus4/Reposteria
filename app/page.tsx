import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FindAndGet } from "@/components/home/FindAndGet";
import { Navbar } from "@/components/Navbar";
import { Events } from "@/components/products/Events";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Metadata } from "next";
import { OnlyCategory } from "@/components/home/OnlyCategory";
import { Testimonials } from "@/components/home/Testimonials";
import { OrderOnline } from "@/components/home/OrderOnline";
import { LocationsHome } from "@/components/home/LocationsHome";

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
        <Events />
        <Testimonials />
        <LocationsHome />
        <OrderOnline />
        <MarqueeStrip />
        <Footer />
    </div>
  );
}
