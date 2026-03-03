import { Titles } from "@/data/titles"
import Link from "next/link"

export const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCenter {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px) rotate(-12deg) scale(0.75); }
          50%       { transform: translateY(-10px) rotate(-12deg) scale(0.75); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px) rotate(12deg) scale(0.75); }
          50%       { transform: translateY(-10px) rotate(12deg) scale(0.75); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-40px) rotate(-12deg) scale(0.75); }
          to   { opacity: 1; transform: translateX(0)    rotate(-12deg) scale(0.75); }
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(40px) rotate(12deg) scale(0.75); }
          to   { opacity: 1; transform: translateX(0)   rotate(12deg) scale(0.75); }
        }
        @keyframes revealCenter {
          from { opacity: 0; transform: translateY(50px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        .anim-title {
          animation: fadeSlideDown 0.7s cubic-bezier(.22,1,.36,1) both;
        }
        .anim-subtitle {
          animation: fadeSlideDown 0.7s cubic-bezier(.22,1,.36,1) 0.15s both;
        }
        .anim-buttons {
          animation: fadeSlideUp 0.6s cubic-bezier(.22,1,.36,1) 0.3s both;
        }

        .img-left {
          animation:
            revealLeft 0.8s cubic-bezier(.22,1,.36,1) 0.4s both,
            floatLeft  4.5s ease-in-out 1.2s infinite;
        }
        .img-center {
          animation:
            revealCenter 0.9s cubic-bezier(.22,1,.36,1) 0.25s both,
            floatCenter  4s ease-in-out 1.15s infinite;
        }
        .img-right {
          animation:
            revealRight 0.8s cubic-bezier(.22,1,.36,1) 0.4s both,
            floatRight  4.5s ease-in-out 1.4s infinite;
        }
      `}</style>

      <div className="hero-contentt bg-primaryColor w-full flex flex-col items-center justify-center gap-10 xs:gap-20">
        <div className="hero-offer text-black flex flex-col justify-center items-center gap-8 pt-40 px-8">
          <div className="hero-text text-center">
            <h1 className="anim-title font-caveat text-6xl mb-4 text-secundaryColor md:text-8xl lg:text-9xl uppercase">
              { Titles.home.title }
            </h1>
            <p className="anim-subtitle font-medium text-secundaryColor md:text-lg uppercase">{ Titles.home.subtitle }</p>
          </div>
          <div className="anim-buttons buttons w-full flex flex-col justify-center gap-2 xs:flex-row xs:gap-4">
            <Link href={"/contact"} className="btn rounded-primarySize bg-secundaryColor text-primaryColor shadow-none border-none hover:scale-105 transition-transform duration-200">
              Agenda tu pedido
            </Link>
            <Link href={"/products"} className="btn rounded-primarySize bg-primaryColor border-secundaryColor shadow-none text-secundaryColor hover:bg-secundaryColor/10 transition-colors duration-200">
              Explorar menú
            </Link>
          </div>
        </div>

        <div className="hero-images">
          <div className="grid grid-cols-1 xs:grid-cols-3 overflow-hidden pt-10 place-items-center">
            <img src="h1.png" alt="" className="img-left hidden w-auto xs:flex" />
            <img src="h2.png" alt="" className="img-center w-100 xs:w-auto" /> 
            <img src="h3.png" alt="" className="img-right hidden w-auto xs:flex" />
            {/* <img src="hero1.png" alt="" className="flex" />  */}
          </div>
        </div>
      </div>
    </>
  )
}
