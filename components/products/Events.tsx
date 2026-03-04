import { IconBrandCakephp, IconCake, IconCup, IconSparkles } from "@tabler/icons-react"

export const Events = () => {
  return (
    <div className="bg-secundaryColor min-h-[calc(100dvh-4rem)] py-26 flex flex-col items-center justify-center gap-10 px-6">
    <div className="relative max-w-7xl mx-auto">
        <div className="min-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="grid gap-4">
                <div className="grid lg:gap-0 gap-4">
                    <h2 className="text-3xl font-bold uppercase md:text-5xl text-primaryColor font-titleText">Endulzamos Tus Momentos</h2>
                    <p className="text-base text-primaryColor">Contamos con mesas de postres irresistibles y pasteles personalizados que convierten cualquier celebración en una experiencia memorable. Desde bodas soñadas hasta cumpleaños épicos, cada detalle está pensado para sorprender y deleitar.</p>
                </div>
                <div className="icons grid grid-cols-1 xs:grid-cols-2 place-items-center pt-4">
                    <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pb-2 xs:pb-8 xs:border-black/10 xs:border-r-1 xs:border-b-1">
                        <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center col-span-1">
                            <IconCake className="text-secundaryColor "/>    
                        </div>
                        <p className="text-2xl font-titleText text-primaryColor text-center col-span-1">Pasteles a la Medida</p>
                    </div>
                    <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pb-2 xs:pb-8 xs:border-black/10 xs:border-b-1">
                        <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                            <IconCup className="text-secundaryColor "/>    
                        </div>
                        <p className="text-2xl font-titleText text-primaryColor text-center">Mesa de Postres</p>
                    </div>
                    <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pt-2 xs:pt-8 xs:border-black/10 xs:border-r-1">
                        <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                            <IconSparkles className="text-secundaryColor "/>    
                        </div>
                        <p className="text-2xl font-titleText text-primaryColor text-center">Sabores que Enamoran</p>
                    </div>
                    <div className="w-full xs:justify-center flex items-center xs:flex-col gap-2 col-span-1 pt-2 xs:pt-8">
                        <div className="bg-primaryColor rounded-primarySize w-12 h-12 grid place-items-center">
                            <IconBrandCakephp className="text-secundaryColor "/>    
                        </div>
                        <p className="text-2xl font-titleText text-primaryColor text-center">Detalles que Marcan</p>
                    </div>
                </div>
            </div>
            <div className="grid xs:grid-cols-2 grid-cols-1 gap-6">
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
    </div>
    </div>
  )
}
