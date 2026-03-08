import { products } from "@/data/products"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BackButton } from "@/components/ui/BackButton"

import type { Metadata } from "next"
import { ShareButton } from "@/components/ui/ShareButton"
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp, IconSend, IconSend2 } from "@tabler/icons-react"
import { socialMedia } from "@/data/socialMedia"
import { WhatsAppOrderButton } from "@/components/ui/WhatsAppOrderButton"
import { contactData } from "@/data/contactData"
import { Locations } from "@/components/locations/Locations"
import { Button } from "@/components/ui/Button"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))
  if (!product) return {}

  return {
    title: `${product.name} — Tu Postería`,
    metadataBase: new URL("https://cupcakedemo.netlify.app/"),
    description: product.desc,
    openGraph: {
      title: product.name,
      description: product.desc,
      images: [
        {
          url: product.img,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.desc,
      images: [product.img],
    },
  }
}

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }))
}

const tagColors: Record<string, string> = {
  Firma: "bg-secundaryColor text-primaryColor",
  Popular: "bg-secundaryColor/20 text-secundaryColor border border-secundaryColor/40",
  Nuevo: "bg-primaryColor border border-secundaryColor text-secundaryColor",
  Temporada: "bg-secundaryColor/10 text-secundaryColor border border-secundaryColor/30",
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))
  if (!product) notFound()

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }

        // .anim-img {
        //   animation: fadeLeft 0.8s cubic-bezier(.22,1,.36,1) 0.1s both,
        //              floatImg 5s ease-in-out 1s infinite;
        // }
        .anim-tag   { animation: fadeUp    0.5s cubic-bezier(.22,1,.36,1) 0.15s both; }
        .anim-title { animation: fadeRight 0.7s cubic-bezier(.22,1,.36,1) 0.2s both; }
        .anim-price { animation: fadeRight 0.6s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .anim-desc  { animation: fadeUp   0.6s cubic-bezier(.22,1,.36,1) 0.4s both; }
        .anim-meta  { animation: fadeUp   0.6s cubic-bezier(.22,1,.36,1) 0.5s both; }
        .anim-btns  { animation: fadeUp   0.6s cubic-bezier(.22,1,.36,1) 0.6s both; }
        .anim-back  { animation: fadeUp   0.5s cubic-bezier(.22,1,.36,1) both; }

        .shimmer-price {
          background: linear-gradient(90deg, #FFE55C 0%, #FFAA30 50%, #FFE55C 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .rel-card { animation: scaleIn 0.5s cubic-bezier(.22,1,.36,1) both; }
        .rel-card:nth-child(1) { animation-delay: 0.3s; }
        .rel-card:nth-child(2) { animation-delay: 0.42s; }
        .rel-card:nth-child(3) { animation-delay: 0.54s; }
      `}</style>

      <Navbar />
      <main className="relative bg-primaryColor min-h-screen w-full overflow-hidden pt-10">
        {/* <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-primarySize bg-secundaryColor/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-primarySize bg-secundaryColor/6 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#FFE55C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12">
          <BackButton label="Volver a productos" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-2/5 flex items-center justify-center">
              <div className="relative">
               <ShareButton title={product.name} description={product.desc} />
                <div className="absolute inset-0 rounded-primarySize bg-secundaryColor/10 blur-3xl scale-75" />
                <img src={product.img} alt={product.name} className="relative z-10 w-64 sm:w-80 lg:w-full object-contain max-h-[600px] drop-shadow-2xl" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="anim-tag flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-[0.25em] text-secundaryColor/80 font-semibold">{product.category}</span>
                {product.tag && (
                  <>
                    <span className="text-secundaryColor/20">·</span>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColors[product.tag]}`}>{product.tag}</span>
                  </>
                )}
              </div>

              <h1 className="anim-title font-titleText text-5xl sm:text-6xl lg:text-7xl text-secundaryColor leading-tight">{product.name}</h1>

              <div className="anim-price flex items-baseline gap-1">
                <span className="shimmer-price font-titleText text-4xl font-bold">${product.price}</span>
                <span className="text-secundaryColor/80 text-sm">MXN</span>
              </div>

              <div className="h-px w-full bg-secundaryColor/15" />

              <p className="anim-desc text-secundaryColor/90 text-sm sm:text-base leading-relaxed">{product.descLong}</p>

              <div className="anim-meta grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Presentación", value: product.weight },
                  { label: "Tiempo de pedido", value: product.prepTime },
                  { label: "Alérgenos", value: product.allergens.join(", ") },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 p-3 rounded-primarySize border border-secundaryColor/10 bg-secundaryColor/5">
                    <span className="text-[9px] uppercase tracking-widest text-secundaryColor/90 font-semibold">{item.label}</span>
                    <span className="text-secundaryColor/80 text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="anim-meta flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="text-[10px] text-secundaryColor/80 border border-secundaryColor/15 rounded-primarySize px-3 py-1">
                    {ing}
                  </span>
                ))}
              </div>

              <div className="anim-btns gap-3 pt-2">
                <div className="flex gap-4 flex-col lg:flex-row">
                  <Button url={socialMedia.instagram.href} target="_blank" className="grid gap-2" size="min">
                    Enviar DM por Instagram
                    <IconBrandInstagram />
                  </Button>
                  {/* <Link href={socialMedia.facebook.href} target="_blank" className="btn rounded-primarySize bg-secundaryColor text-primaryColor shadow-none border-none hover:scale-105 transition-transform duration-200 px-8">
                    Enviar DM por {socialMedia.facebook.title}
                    {(() => { const Icon = socialMedia.facebook.icon; return <Icon width={18} height={18} /> })()}
                  </Link> */}
                  <WhatsAppOrderButton phone={contactData[0].items[0].value ?? ""}/>
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 pt-10 border-t border-secundaryColor/20">
              <div className="flex items-center gap-3 mb-8" style={{ animation: "fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.2s both" }}>
                <span className="h-px w-8 bg-secundaryColor/50" />
                <h2 className="font-titleText text-3xl text-secundaryColor">También te puede gustar</h2>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.id}`}
                    className="rel-card group flex flex-col rounded-primarySize border border-secundaryColor/10 hover:border-secundaryColor/30 bg-secundaryColor/5 hover:bg-secundaryColor/8 overflow-hidden transition-colors duration-300"
                  >
                    <div className="h-40 flex items-center justify-center bg-secundaryColor/5 overflow-hidden">
                      <img src={rel.img} alt={rel.name} className="h-32 w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <h3 className="font-titleText text-xl text-secundaryColor">{rel.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-secundaryColor/40">{rel.category}</span>
                        <span className="shimmer-price font-titleText text-lg font-bold">${rel.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
           <div className="pt-10 border-t border-secundaryColor/20">
              <div className="flex items-center gap-3 mb-8" style={{ animation: "fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.2s both" }}>
                <span className="h-px w-8 bg-secundaryColor/50" />
                <h2 className="font-titleText text-3xl text-secundaryColor">Nuestras sucursales</h2>
              </div>
              <Locations py={false}/> 
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
