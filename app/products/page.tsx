
import { ProductsComponent } from "@/components/products/Products";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Suspense } from "react";
import { Metadata } from "next";
import { OrderOnline } from "@/components/shared/OrderOnline";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Nuestros Productos",  // resulta en "Nuestros Productos — Tu Postería"
  description: "Explora nuestra variedad de postres artesanales hechos con los mejores ingredientes. Pasteles, café, postres y más.",
}

export default function Products(){
    
    return (
        <>
            <Navbar />
            <TitlePage title={Titles.products.title} subtitle={Titles.products.subtitle}/>
             <Suspense fallback={null}>
                <ProductsComponent />
             </Suspense>
            <OrderOnline />
            <MarqueeStrip />
            <Footer />
        </>
    )
}