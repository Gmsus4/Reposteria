import { FindAndGet } from "@/components/home/FindAndGet";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/home/Hero";
import dynamic from "next/dynamic";

const OnlyCategory  = dynamic(() => import("@/components/home/OnlyCategory").then(m => ({ default: m.OnlyCategory })))
const AboutDetails  = dynamic(() => import("@/components/shared/AboutDetails").then(m => ({ default: m.AboutDetails })))
const Testimonials  = dynamic(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })))
const LocationsHome = dynamic(() => import("@/components/home/LocationsHome").then(m => ({ default: m.LocationsHome })))
const OrderOnline   = dynamic(() => import("@/components/shared/OrderOnline").then(m => ({ default: m.OrderOnline })))
const Footer        = dynamic(() => import("@/components/shared/Footer").then(m => ({ default: m.Footer })))

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://centralmolletes.com"),

  title: {
    default: "Central Molletes",
    template: "%s — Central Molletes",
  },

  description: "Cafetería en Etzatlán, Jalisco. Molletes, café y más desde 2020. ¡Visítanos!",

  keywords: [
    "molletes", "cafetería", "Etzatlán", "Jalisco", "desayunos",
    "café", "comida", "restaurante Etzatlán", "Central Molletes"
  ],

  authors: [{ name: "Central Molletes" }],
  creator: "Central Molletes",

  openGraph: {
    title: "Central Molletes",
    description: "Cafetería en Etzatlán, Jalisco. Molletes, café y más desde 2020. ¡Visítanos!",
    url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://centralmolletes.com",
    siteName: "Central Molletes",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",      // ← crea una imagen de 1200x630px con tu logo/foto del local
        width: 1200,
        height: 630,
        alt: "Central Molletes — Cafetería en Etzatlán, Jalisco",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Central Molletes",
    description: "Cafetería en Etzatlán, Jalisco. Molletes, café y más desde 2020.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function Home() {
  return (
    <div>
        <Navbar />
        <main>
          <Hero />
          <MarqueeStrip />
          <FindAndGet />
          <OnlyCategory />
          <AboutDetails />
          <Testimonials />
          <LocationsHome />
          <OrderOnline />
          <MarqueeStrip />
        </main>
        <Footer />
    </div>
  );
}
