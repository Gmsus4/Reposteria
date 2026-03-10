import { StatsGrid } from "@/components/about/StatsGrid"
import { Images } from "@/components/about/Images"
import { OrderOnline } from "@/components/shared/OrderOnline"
import { AboutDetails } from "@/components/shared/AboutDetails"
import { BenefitsPanel } from "@/components/about/BenefitsPanel"
import { MarqueeStrip } from "@/components/ui/MarqueeStrip"
import { TitlePage } from "@/components/ui/TitlePage"
import { Titles } from "@/data/titles"
import { Metadata } from "next"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { Button } from "@/components/ui/Button"
import { socialMedia } from "@/data/socialMedia"

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce la historia detrás de Tu Postería, quiénes somos y nuestra pasión por los postres artesanales.",
}

export default function AboutUs() {
  return (
    <>
      <style>{`
        /* ── Entrada al hacer scroll (Intersection Observer vía CSS trick) ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
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
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes floatSlowAlt {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50%       { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .about-tag {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.1s both;
        }
        .about-title {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.2s both;
        }
        .about-body {
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.35s both;
        }
        .about-cta {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.5s both;
        }
        .about-img-main {
          animation: fadeRight 0.9s cubic-bezier(.22,1,.36,1) 0.3s both,
                     floatSlow 5s ease-in-out 1.2s infinite;
        }
        .about-img-secondary {
          animation: fadeLeft 0.8s cubic-bezier(.22,1,.36,1) 0.5s both,
                     floatSlowAlt 4.5s ease-in-out 1.5s infinite;
        }
        .about-stat {
          animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both;
        }
        .about-stat:nth-child(1) { animation-delay: 0.4s; }
        .about-stat:nth-child(2) { animation-delay: 0.55s; }
        .about-stat:nth-child(3) { animation-delay: 0.7s; }

        .badge-spin {
          animation: spinSlow 12s linear infinite;
        }

        .shimmer-line {
          background: linear-gradient(90deg, transparent 0%, rgba(255,220,80,0.5) 50%, transparent 100%);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }

        .card-value {
          background: linear-gradient(135deg, #FFE55C 30%, #FFAA30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <Navbar />
      <TitlePage title={Titles.aboutUs.title} subtitle={Titles.aboutUs.subtitle} />

      <section className="relative bg-cream w-full overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <div className="flex-1 flex flex-col gap-7 lg:max-w-lg">
              <h2 className="about-title font-titleText text-4xl sm:text-5xl lg:text-6xl text-darkWarm leading-tight">El Sabor Que Siempre Recuerdas</h2>
              <div className="about-body flex flex-col gap-4 text-darkWarm text-sm sm:text-base leading-relaxed">
                <p>
                  En Central molletes creemos que los mejores momentos merecen los mejores postres. Elaboramos repostería artesanal y café de autor en tres pueblos de Jalisco, con el cuidado de quien hornea
                  para su propia familia. Cada visita, una experiencia que sabe a hogar.
                </p>
              </div>
              <div className="about-cta flex flex-col xs:flex-row gap-3 pt-2">
                <Button title="Contáctanos" url="/contact" />
                <Button title="Visítanos en Facebook" url={socialMedia.facebook.href} isFilled={false} target="_blank" className="text-darkWarm"/>
              </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center w-full min-h-[320px] sm:min-h-[420px]">
              <Images />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream w-full overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
        <StatsGrid />
      </section>
      <BenefitsPanel />
      <AboutDetails />
      <OrderOnline />
      <MarqueeStrip />
      <Footer />
    </>
  )
}
