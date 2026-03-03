import { IconBrandCakephp, IconCake, IconCup, IconSparkles } from "@tabler/icons-react"

export const Events = () => {
  return (
    <>
    <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[600px]">
      <div className="grid gap-4">
        <div className="grid gap-4">
            <h2 className="text-5xl md:text-6xl text-primaryColor font-caveat">Endulzamos Tus Momentos</h2>
            <p className="text-lg text-primaryColor">Contamos con mesas de postres irresistibles y pasteles personalizados que convierten cualquier celebración en una experiencia memorable. Desde bodas soñadas hasta cumpleaños épicos, cada detalle está pensado para sorprender y deleitar.</p>
        </div>
        <div className="icons grid grid-cols-1 xs:grid-cols-2 place-items-center py-8 pb-0 xs:py-20">
            <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pb-2 xs:pb-8 xs:border-black/10 xs:border-r-1 xs:border-b-1">
                <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center col-span-1">
                    <IconCake className="text-secundaryColor "/>    
                </div>
                <p className="text-2xl font-caveat text-primaryColor text-center col-span-1">Pasteles a la Medida</p>
            </div>
            <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pb-2 xs:pb-8 xs:border-black/10 xs:border-b-1">
                <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                    <IconCup className="text-secundaryColor "/>    
                </div>
                <p className="text-2xl font-caveat text-primaryColor text-center">Mesa de Postres</p>
            </div>
            <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pt-2 xs:pt-8 xs:border-black/10 xs:border-r-1">
                <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                    <IconSparkles className="text-secundaryColor "/>    
                </div>
                <p className="text-2xl font-caveat text-primaryColor text-center">Sabores que Enamoran</p>
            </div>
            <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pt-2 xs:pt-8">
                <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                    <IconBrandCakephp className="text-secundaryColor "/>    
                </div>
                <p className="text-2xl font-caveat text-primaryColor text-center">Detalles que Marcan</p>
            </div>
        </div>
      </div>
      <div className="h-full grid xs:grid-cols-2 grid-cols-1 gap-6">
        <div className="rounded-primarySize overflow-hidden h-full">
            <img src="image1.webp" alt="" className="h-full object-cover"/>
        </div>
        <div className="grid grid-rows-2 gap-6 h-full">
            <div className="rounded-primarySize overflow-hidden">
                <img src="image2.webp" alt="" className="h-full object-cover"/>
            </div>
            <div className="rounded-primarySize overflow-hidden">
                <img src="image3.webp" alt="" className="h-full object-cover"/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
