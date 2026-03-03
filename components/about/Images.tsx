export const Images = () => {
  return (
    <>
      {/* Imagen principal */}
      <div className="about-img-main relative z-10">
        <img src="/hero1.png" alt="Pastel Red Velvet" className="w-52 sm:w-64 lg:w-72 drop-shadow-2xl" />
        {/* Badge circular giratorio */}
        <div className="badge-spin absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <defs>
              <path id="circle-text" d="M 40,40 m -27,0 a 27,27 0 1,1 54,0 a 27,27 0 1,1 -54,0" />
            </defs>
            <text className="fill-primaryColor" fontSize="9.5" letterSpacing="2.2" fontWeight="600">
              <textPath href="#circle-text">HECHO A MANO · HECHO CON AMOR ·</textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Imagen secundaria superpuesta */}
      <div className="about-img-secondary absolute -bottom-4 -left-2 sm:left-4 z-20">
        <div className="relative">
          <img src="/hero2.png" alt="Detalle de pastelería" className="w-32 sm:w-44 drop-shadow-xl" />
          {/* Pill encima de imagen secundaria */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primaryColor text-secundaryColor text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-primarySize shadow-lg">
            Receta original
          </div>
        </div>
      </div>

      {/* Imagen terciaria */}
      <div className="absolute -right-2 sm:right-0 bottom-8 z-0 opacity-60" style={{ animation: "floatSlow 6s ease-in-out 2s infinite" }}>
        <img src="/hero3.png" alt="" aria-hidden="true" className="w-24 sm:w-32 rotate-6 drop-shadow-lg" />
      </div>

      {/* Tarjeta flotante de calificación */}
      <div
        className="absolute top-0 right-0 sm:-right-4 bg-primaryColor/10 backdrop-blur-sm border border-primaryColor/20 rounded-primarySize px-4 py-3 flex flex-col gap-1 z-30"
        style={{ animation: "floatSlowAlt 4s ease-in-out 1s infinite" }}
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-primaryColor text-sm">
              ★
            </span>
          ))}
        </div>
        <span className="text-primaryColor text-xs font-semibold">+2,400 reseñas</span>
        <span className="text-primaryColor/50 text-[10px]">Google · Facebook</span>
      </div>
    </>
  )
}
