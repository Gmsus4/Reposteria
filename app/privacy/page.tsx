import { Privacy } from "@/components/legal/Privacy";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
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