import { ContactPage } from "@/components/contact/Contact";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Estamos aquí para ayudarte. Contáctanos para pedidos personalizados, eventos o cualquier duda.",
}

export default function Contact(){
    return(
        <>
            <Navbar />
            <TitlePage title={Titles.contact.title} subtitle={Titles.contact.subtitle}/>
            <ContactPage />
            <Footer />
        </>
    )
}