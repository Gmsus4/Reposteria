"use client"
import { IconCake, IconCup, IconSparkles, IconBrandCakephp, IconStar, IconHeart } from "@tabler/icons-react"

const items = [
  { icon: <IconCake size={20} />, text: "Pasteles a la Medida" },
  { icon: <IconCup size={20} />, text: "Mesa de Postres" },
  { icon: <IconSparkles size={20} />, text: "Sabores que Enamoran" },
  { icon: <IconBrandCakephp size={20} />, text: "Detalles que Marcan" },
  { icon: <IconStar size={20} />, text: "Calidad Artesanal" },
  { icon: <IconHeart size={20} />, text: "Hecho con Amor" },
]

export const MarqueeStrip = () => {
  return (
    <div className="w-full overflow-hidden bg-secundaryColor flex">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        // .marquee-track:hover {
        //   animation-play-state: paused;
        // }
      `}</style>

      <div className="marquee-track bg-primaryColor/90 py-4">
        {/* Renderiza dos veces para el loop infinito */}
        {[...Array(2)].map((_, copyIdx) => (
          <div key={copyIdx} className="flex items-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-8 text-secundaryColor whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <span className="text-secundaryColor">{item.icon}</span>
                  <span className="font-titleText text-xl mt-1">{item.text}</span>
                </div>
                <span className="ml-8 text-secundaryColor/30">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}