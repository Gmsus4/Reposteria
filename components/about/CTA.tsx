import { socialMedia } from "@/data/socialMedia"
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react"
import Link from "next/link"
import { Button } from "../ui/Button"

export const CTA = () => {
  return (
    <div className="about-cta flex flex-col xs:flex-row gap-3 pt-2">
      <Button title="Visítanos en Facebook" url={socialMedia.facebook.href} isFilled={false} target="_blank"/>
      <Button title="Contáctanos" url="/contact"/>
    </div>
  )
}
