import { Body } from "@/components/about/Body"
import { CTA } from "@/components/about/CTA"
import { Grid } from "@/components/about/Grid"
import { Images } from "@/components/about/Images"
import { Title } from "@/components/about/Title"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { TitlePage } from "@/components/ui/TitlePage"
import { Titles } from "@/data/titles"
import { Metadata } from "next"

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
      <TitlePage title={Titles.aboutUs.title} subtitle={Titles.aboutUs.subtitle}/>

      <section className="relative bg-secundaryColor w-full overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secundaryColor/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secundaryColor/8 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10 10 L10 -10 M0 40 L40 0 M30 50 L50 30" stroke="#FFE55C" strokeWidth="0.8" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <div className="flex-1 flex flex-col gap-7 lg:max-w-lg">
              <Title />
              <Body />
              <CTA />
            </div>

            <div className="flex-1 relative flex items-center justify-center w-full min-h-[320px] sm:min-h-[420px]">
              <Images />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secundaryColor w-full overflow-hidden py-20 px-6 sm:px-10 lg:px-20">
        <Grid />
      </section>
      <Footer />
    </>
  )
}
