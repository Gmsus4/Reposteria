import { menu } from "@/data/menu"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BackButton } from "@/components/ui/BackButton"

import type { Metadata } from "next"
import { ShareButton } from "@/components/ui/ShareButton"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import { Locations } from "@/components/locations/Locations"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { getCategoryExtras } from "@/data/menuCategoryExtra"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const menuProduct = menu.find((m) => m.slug === slug)
  if (!menuProduct) return {}

  return {
    title: `${menuProduct.name} — Tu café del día`,
    metadataBase: new URL("https://reposteriademo.netlify.app/"),
    description: menuProduct.desc,
    openGraph: {
      title: menuProduct.name,
      description: menuProduct.desc,
      images: [
        {
          url: menuProduct.img,
          width: 1200,
          height: 630,
          alt: menuProduct.name,
        },
      ],
      type: "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: menuProduct.name,
      description: menuProduct.desc,
      images: [menuProduct.img],
    },
  }
}

export function generateStaticParams() {
  return menu.map((p) => ({ id: String(p.slug) }))
}

const tagColors: Record<string, string> = {
  Firma: "bg-secundaryColor text-primaryColor",
  Popular: "bg-secundaryColor/20 text-secundaryColor border border-secundaryColor/40",
  Nuevo: "bg-primaryColor border border-secundaryColor text-secundaryColor",
  Temporada: "bg-secundaryColor/10 text-secundaryColor border border-secundaryColor/30",
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const menuProduct = menu.find((m) => m.slug === slug)
  if (!menuProduct) notFound()

  const related = menu.filter((m) => m.category === menuProduct.category && m.slug !== menuProduct.slug).slice(0, 3)

  console.log(menuProduct.name)

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
          background: linear-gradient(90deg, #B8860B 0%, #8B6914 50%, #B8860B 100%);
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
      <main className="relative bg-cream min-h-screen w-full overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-16 py-2 lg:py-12">
          <div className="flex flex-col lg:flex-row relative gap-12 lg:gap-20 items-stretch">
            <BackButton label="Volver a productos" />
            <div className="w-full flex-1 relative lg:w-2/5">
              <ShareButton title={menuProduct.name} description={menuProduct.desc} />
              <img src={menuProduct.img} alt={menuProduct.name} className="relative z-10 w-full object-cover h-72 lg:h-full rounded-3xl drop-shadow-2xl" style={{ minHeight: "400px" }} />
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="anim-tag flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-[0.25em] text-darkWarm/90 font-semibold">{menuProduct.category}</span>
                {menuProduct.tag && (
                  <>
                    <span className="text-darkWarm">·</span>
                    <span className={`text-[9px] font-bold text-darkWarm pt-1.5 uppercase tracking-widest px-2.5 py-1 rounded-full ${tagColors[menuProduct.tag]}`}>{menuProduct.tag}</span>
                  </>
                )}
              </div>

              <h2 className="anim-title font-titleText text-5xl sm:text-6xl lg:text-7xl text-darkWarm leading-tight">{menuProduct.name}</h2>

              <div className="anim-price flex items-baseline gap-1">
                <span className="shimmer-price font-titleText text-4xl font-bold">${menuProduct.price}</span>
                <span className="text-darkWarm/80 text-sm">MXN</span>
              </div>

              <div className="h-px w-full bg-darkWarm/15" />

              <p className="anim-desc text-darkWarm/90 text-sm sm:text-base leading-relaxed">{menuProduct.descLong}</p>

              <div className="anim-meta grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Presentación", value: menuProduct.weight },
                  { label: "Tiempo de pedido", value: menuProduct.prepTime },
                  { label: "Alérgenos", value: menuProduct.allergens.join(", ") },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 p-3 rounded-primarySize border border-darkWarm/20 bg-transparent">
                    <span className="text-[9px] uppercase tracking-widest text-darkWarm/70 font-semibold">{item.label}</span>
                    <span className="text-darkWarm text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="anim-meta flex flex-wrap gap-2">
                {menuProduct.ingredients.map((ing) => (
                  <span key={ing} className="text-[10px] text-darkWarm border border-darkWarm/25 rounded-primarySize px-3 py-1">
                    {ing}
                  </span>
                ))}
              </div>

              {/* Banner de extras por categoría */}
              {getCategoryExtras(menuProduct.category)?.map((block, i) => (
                <div key={i} className="anim-meta w-auto py-3 border-b border-darkWarm/40 bg-creamMid/5 inline-flex flex-wrap gap-x-6 gap-y-1 items-baseline">
                  <span className="text-xs font-bold uppercase tracking-widest text-darkWarm shrink-0">{block.title}</span>
                  {block.note && <span className="text-xs text-darkWarm/60 italic">{block.note}</span>}
                  {block.extras.map((e, j) => (
                    <span key={j} className="text-xs text-darkWarm/80">
                      {e.label} <span className="text-secundaryColor font-semibold">+${e.price}</span>
                    </span>
                  ))}
                </div>
              ))}

              {/* <div className="anim-btns gap-3 pt-2">
                <div className="flex gap-4 flex-col lg:flex-row">
                  <Button url={socialMedia.instagram.href} target="_blank" className="grid gap-2" size="min">
                    Enviar DM por Instagram
                    <IconBrandInstagram />
                  </Button>
                  <WhatsAppOrderButton phone={contactData[0].items[0].value ?? ""}/>
                </div>
              </div> */}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 pt-10 border-t border-darkWarm/20">
              <div className="flex items-center gap-3 mb-8" style={{ animation: "fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.2s both" }}>
                <span className="h-px w-8 bg-darkWarm/50" />
                <h2 className="font-titleText text-3xl text-darkWarm">También te puede gustar</h2>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
                {related.map((rel, idx) => (
                  <Link key={rel.slug} href={`/menu/${rel.slug}`} className="rel-card group relative flex flex-col">
                    {/* Imagen */}
                    <div className="relative overflow-hidden rounded-primarySize w-full bg-primary h-56 flex items-center justify-center">
                      <img src={rel.img} alt={rel.name} className="group-hover:scale-105 h-full transition-transform duration-500 w-full object-cover" />

                      {/* Overlay gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-primarySize" />

                      {/* Tag */}
                      {rel.tag && <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full ${tagColors[rel.tag]}`}>{rel.tag}</span>}

                      {/* Descripción flotante */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-cream/90 text-xs leading-relaxed line-clamp-2">{rel.descLong}</p>
                      </div>

                      {/* Botón flecha */}
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-darkWarm/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                        <IconArrowNarrowRight className="text-primary w-4 h-4" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="pt-3 px-1">
                      <span className="text-[9px] uppercase tracking-[0.18em] text-darkWarm/50 font-semibold">{rel.category}</span>
                      <div className="flex items-baseline justify-between gap-2 mt-0.5">
                        <h3 className="font-titleText text-xl text-darkWarm leading-snug group-hover:text-secundaryColor transition-colors duration-200">{rel.name}</h3>
                        <span className="shimmer-price font-titleText text-lg font-bold shrink-0">${rel.price}</span>
                      </div>
                      {/* Línea animada */}
                      <div className="mt-2 h-px bg-darkWarm/10 relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-secundaryColor/50 transition-all duration-500 ease-out" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="pt-10 border-t border-darkWarm/20">
            <div className="flex items-center gap-3 mb-8" style={{ animation: "fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.2s both" }}>
              <span className="h-px w-8 bg-darkWarm/50" />
              <h2 className="font-titleText text-3xl text-darkWarm">Nuestras sucursales</h2>
            </div>
            <Locations className="bg-cream pb-20" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
