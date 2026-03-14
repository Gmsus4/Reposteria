import { contactData } from "@/data/contactData"
import { socialMedia } from "@/data/socialMedia"
import { IconBrandInstagram, IconBrandWhatsapp, IconBuildingStore, IconPhone } from "@tabler/icons-react"
import Link from "next/link"

export const OrderOnline = () => {
    return (
        <section aria-labelledby="order-title" className="lg:py-30 py-10 bg-creamMid flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
                <IconBuildingStore size={40} className="text-darkWarm" aria-hidden="true"/>
                <div className="grid gap-2">
                    <h2 className="text-darkWarm font-titleText text-center text-4xl md:text-5xl">Ordena en línea</h2>
                    <p className="text-center text-darkWarm">Pídelo por teléfono, Instagram o WhatsApp.</p>
                </div>
            </div>
            <div className="flex justify-center gap-3">
                <Link href={`tel:${contactData[0].items[0].value}`} aria-label="Llamar por teléfono" className="bg-primary aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primary/93">
                    <IconPhone size={40} className="text-darkWarm"/>
                </Link>
                <Link href={socialMedia.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Ordenar por Instagram" className="bg-primary aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primary/93">
                    <IconBrandInstagram size={40} className="text-darkWarm"/>
                </Link>
                <Link href={`https://wa.me/${contactData[0].items[0].value}`} target="_blank" rel="noopener noreferrer" aria-label="Ordenar por WhatsApp" className="bg-primary aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primary/93">
                    <IconBrandWhatsapp size={40} className="text-darkWarm"/>
                </Link>
            </div>
        </section>
    )
}