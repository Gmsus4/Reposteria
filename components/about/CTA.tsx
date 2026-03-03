import { socialMedia } from "@/data/socialMedia"
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react"
import Link from "next/link"

export const CTA = () => {
  return (
    <div className="about-cta flex flex-col xs:flex-row gap-3 pt-2">
      <Link href={socialMedia.facebook.href} className="btn rounded-primarySize bg-primaryColor text-yellow shadow-none border-none hover:scale-105 transition-transform duration-200 px-7">
        Visitanos en Facebook
        <IconBrandFacebook size={16}/>
      </Link>
      <Link href="/contact" className="btn rounded-primarySize bg-transparent border-primaryColor shadow-none text-primaryColor hover:bg-primaryColor/10 transition-colors duration-200 px-7">
        Contáctanos
      </Link>
    </div>
  )
}
