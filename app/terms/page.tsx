import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TermsAndConditions } from "@/components/legal/Terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Conoce los términos y condiciones de nuestro servicio de pasteles y postres artesanales.",
}

export default function Terms() {
    return (
        <>
            <Navbar />
            <TermsAndConditions />
            <Footer />
        </>
    )
}