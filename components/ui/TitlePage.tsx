"use client"
import { useEffect, useState } from "react"
import { MarqueeStrip } from "./MarqueeStrip"

interface TitleProps {
  title?: string
  subtitle?: string
  isBgprimaryColor?: boolean
  isMarquee?: boolean
  className?: string
}

export const TitlePage = ({ title, isBgprimaryColor = true, className = "py-20 pb-6 min-h-80", isMarquee = true, subtitle }: TitleProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className={`${isBgprimaryColor ? "bg-primaryColor" : "bg-secundaryColor"} w-full overflow-hidden ${className} grid place-items-center px-10`}>
        <div className="flex flex-col gap-4">
          <h2
            className={`font-titleText xs:text-6xl text-5xl ${isBgprimaryColor ? "text-secundaryColor" : "text-primaryColor"} text-center transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-center text-md ${isBgprimaryColor ? "text-secundaryColor" : "text-primaryColor"} text-xl transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </section>
      { isMarquee ? <MarqueeStrip /> : ""}
    </>
  )
}