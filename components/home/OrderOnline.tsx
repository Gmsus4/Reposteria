import { contactData } from "@/data/contactData"
import { socialMedia } from "@/data/socialMedia"
import { IconBrandInstagram, IconBrandWhatsapp, IconBuildingStore, IconPhone } from "@tabler/icons-react"
import Link from "next/link"

export const OrderOnline = () => {
    return (
        <div className="lg:py-30 py-10 bg-secundaryColor flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
                <IconBuildingStore size={40} className="text-primaryColor"/>
                <div className="grid gap-2">
                    <h2 className="text-primaryColor font-caveat text-center text-4xl md:text-5xl">Ordena en línea</h2>
                    <p className="text-center text-primaryColor">Get your favorites delivered fast.</p>
                </div>
            </div>
            <div className="flex justify-center gap-3">
                <Link href={`tel:${contactData[0].items[0].value}`} className="bg-primaryColor aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primaryColor/93">
                    <IconPhone size={40} className="text-secundaryColor"/>
                </Link>
                <Link href={socialMedia[0].href} className="bg-primaryColor aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primaryColor/93">
                    <IconBrandInstagram size={40} className="text-secundaryColor"/>
                </Link>
                <Link href={`https://wa.me/${contactData[0].items[0].value}`} className="bg-primaryColor aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primaryColor/93">
                    <IconBrandWhatsapp size={40} className="text-secundaryColor"/>
                </Link>
            </div>
        </div>
    )
}