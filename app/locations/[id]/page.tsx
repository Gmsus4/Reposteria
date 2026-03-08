import LocationDetailClient from "@/components/locations/LocationDetailClient";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { TitlePage } from "@/components/ui/TitlePage";
import { locations } from "@/data/locations";
import { Titles } from "@/data/titles";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const location = locations.find((l) => l.slug === id)
  if (!location) return {}

  return {
    title: `${location.name} — ${location.city}`,
    metadataBase: new URL("https://cupcakedemo.netlify.app/"),
    description: location.name,
    openGraph: {
      title: location.name,
      description: location.name,
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: location.name,
        },
      ],
      type: "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: location.name,
      description: location.name,
      images: [location.image],
    },
  }
}
export default async function LocationsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const location = locations.find((l) => l.slug === id);
    if (!location) notFound();
    return (
        <>
            <Navbar />
            <LocationDetailClient location={location}/>
            <Footer />
        </>
    )
}