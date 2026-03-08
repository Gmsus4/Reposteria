import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Privacy } from "@/components/legal/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Conoce cómo recopilamos, usamos y protegemos tus datos personales conforme a la LFPDPPP.",
}

export default function Terms() {
    return (
        <>
            <Navbar />
            <Privacy />
            <Footer />
        </>
    )
}