import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative bg-primaryColor w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

            {/* Fondo decorativo: círculos difusos */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secundaryColor/10 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-secundaryColor/10 blur-3xl" />
            </div>

            {/* 404 gigante de fondo */}
            <span
                className="absolute select-none font-caveat font-bold text-secundaryColor/10 pointer-events-none"
                style={{ fontSize: "clamp(8rem, 35vw, 28rem)", lineHeight: 1 }}
                aria-hidden="true"
            >
                404
            </span>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-lg">

                {/* Imagen central flotante */}
                <div
                    className="relative"
                    style={{ animation: "float 3.5s ease-in-out infinite" }}
                >
                    <img
                        src="/hero1.png"
                        alt="Pastel perdido"
                        className="w-44 xs:w-56 sm:w-64 drop-shadow-2xl"
                    />
                    {/* Imágenes laterales inclinadas */}
                    <img
                        src="/hero2.png"
                        alt=""
                        aria-hidden="true"
                        className="hidden sm:block absolute -left-20 top-6 w-28 opacity-60 -rotate-12 scale-90"
                        style={{ animation: "float 4s ease-in-out infinite 0.5s" }}
                    />
                    <img
                        src="/hero3.png"
                        alt=""
                        aria-hidden="true"
                        className="hidden sm:block absolute -right-20 top-6 w-28 opacity-60 rotate-12 scale-90"
                        style={{ animation: "float 4s ease-in-out infinite 1s" }}
                    />
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-3">
                    <h1 className="font-caveat text-5xl sm:text-6xl text-secundaryColor leading-tight">
                        ¡Ay, se nos cayó <br className="hidden xs:block" /> el pastel!
                    </h1>
                    <p className="text-secundaryColor/70 text-sm sm:text-base font-medium leading-relaxed">
                        La página que buscas no existe o fue movida.<br />
                        Pero nuestros pasteles siguen aquí, esperándote.
                    </p>
                </div>

                {/* Pill decorativo con el error */}
                <div className="flex items-center gap-2 bg-secundaryColor/10 border border-secundaryColor/20 rounded-full px-4 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secundaryColor/60 animate-pulse" />
                    <span className="text-secundaryColor/60 text-xs tracking-widest uppercase font-semibold">
                        Error 404 — Página no encontrada
                    </span>
                </div>

                {/* Botones */}
                <div className="flex flex-col xs:flex-row gap-3 w-full justify-center">
                    <Link
                        href="/"
                        className="btn rounded-full bg-secundaryColor text-primaryColor shadow-none border-none hover:scale-105 transition-transform duration-200 px-6"
                    >
                        Volver al inicio
                    </Link>
                    <Link
                        href="/menu"
                        className="btn rounded-full bg-transparent border-secundaryColor shadow-none text-secundaryColor hover:bg-secundaryColor/10 transition-colors duration-200 px-6"
                    >
                        Explorar menú
                    </Link>
                </div>
            </div>

            {/* Animación float */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
            `}</style>
        </div>
    );
}