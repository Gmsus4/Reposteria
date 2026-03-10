"use client"
import { IconStar, IconBread, IconFlame, IconCoffee, IconMug, IconLeaf } from "@tabler/icons-react"

const items = [
  { icon: <IconBread size={20} />, text: "Molletes de la Casa" },
  { icon: <IconFlame size={20} />, text: "Chilaquiles al Momento" },
  { icon: <IconCoffee size={20} />, text: "Café de Especialidad" },
  { icon: <IconMug size={20} />, text: "Cacao Prehispánico" },
  { icon: <IconLeaf size={20} />, text: "Brebajes Únicos" },
  { icon: <IconStar size={20} />, text: "Sabor Etzatlense" },
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
          animation: marquee 60s linear infinite;
        }
        // .marquee-track:hover {
        //   animation-play-state: paused;
        // }
      `}</style>

      <div className="marquee-track bg-darkMid py-4">
        {/* Renderiza dos veces para el loop infinito */}
        {[...Array(2)].map((_, copyIdx) => (
          <div key={copyIdx} className="flex items-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-8 text-primary whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-titleText text-xl">{item.text}</span>
                </div>
                <span className="ml-8 text-primary/30">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}