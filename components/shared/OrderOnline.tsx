import { contactData } from "@/data/contactData"
import { socialMedia } from "@/data/socialMedia"
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandWhatsapp, IconBuildingStore, IconPhone } from "@tabler/icons-react"
import Link from "next/link"

export const OrderOnline = () => {
    return (
        <div className="lg:py-30 py-10 bg-creamMid flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
                <IconBuildingStore size={40} className="text-darkWarm"/>
                <div className="grid gap-2">
                    <h2 className="text-darkWarm font-titleText text-center text-4xl md:text-5xl">Ordena en línea</h2>
                    <p className="text-center text-darkWarm">Get your favorites delivered fast.</p>
                </div>
            </div>
            <div className="flex justify-center gap-3">
                <Link href={`tel:${contactData[0].items[0].value}`} className="bg-primary aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primary/93">
                    <IconPhone size={40} className="text-darkWarm"/>
                </Link>
                <Link href={socialMedia.facebook.href} className="bg-primary aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primary/93">
                    <IconBrandFacebookFilled size={40} className="text-darkWarm"/>
                </Link>
                <Link href={`https://wa.me/${contactData[0].items[0].value}`} className="bg-primary aspect-square w-18 h-18 grid place-items-center rounded-primarySize cursor-pointer hover:bg-primary/93">
                    <IconBrandWhatsapp size={40} className="text-darkWarm"/>
                </Link>
            </div>
        </div>
    )
}