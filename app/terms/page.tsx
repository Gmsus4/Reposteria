
import { TermsAndConditions } from "@/components/legal/Terms";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
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