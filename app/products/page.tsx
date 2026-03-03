import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Recommendations } from "@/components/products/Recommendations";
import { ProductsComponent } from "@/components/products/Products";
import { TitlePage } from "@/components/ui/TitlePage";
import { Titles } from "@/data/titles";
import { Events } from "@/components/products/Events";
import { Suspense } from "react";
import { Metadata } from "next";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

// export const metadata: Metadata = {
//   title: "Nuestros Productos — Tu Postería",
//   description: "Explora nuestra variedad de postres artesanales hechos con los mejores ingredientes. Pasteles, café, postres y más.",
//   openGraph: {
//     title: "Nuestros Productos — Tu Postería",
//     description: "Explora nuestra variedad de postres artesanales hechos con los mejores ingredientes.",
//     images: [
//       {
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-products.jpg`,
//         width: 1200,
//         height: 630,
//         alt: "Productos Tu Postería",
//       }
//     ],
//     locale: "es_MX",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Nuestros Productos — Tu Postería",
//     description: "Explora nuestra variedad de postres artesanales.",
//     images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-products.jpg`],
//   },
// }

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
            <section className="bg-secundaryColor w-full overflow-hidden xs:py-20 py-8 px-6 sm:px-10 lg:px-20">
                <Recommendations />
            </section>
            <section className="bg-secundaryColor w-full overflow-hidden xs:py-20 py-8 px-6 sm:px-10 lg:px-20">
                <Events />
            </section>
            <Footer />
        </>
    )
}