import { IconClockHour3Filled, IconSnowflake, IconTemperatureSun } from "@tabler/icons-react"

export const Recommendations = () => {
    return (
        <>
            <h2 id="recomendaciones" className="text-center xs:text-6xl text-5xl font-titleText text-primaryColor mb-6 scroll-mt-20">Consérvalo así</h2>
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="grid place-items-center gap-2 rounded-primarySize p-10 border-primaryColor/30 bg-primaryColor/5 border-1">
                    <IconTemperatureSun className="text-primaryColor mb-2" height={30} width={30}/>
                    <h3 className="text-primaryColor font-bold font-titleText mb-2 text-2xl xs:text-3xl text-center">Evita el sol directo</h3>
                    <p className="text-primaryColor text-center">Protege tus postres del sol directo para conservar su frescura y apariencia.</p>
                </div>
                <div className="grid place-items-center gap-2 rounded-primarySize p-10 border-primaryColor/30 bg-primaryColor/5 border-1">
                    <IconSnowflake className="text-primaryColor mb-2" height={30} width={30}/>
                    <h3 className="text-primaryColor font-bold font-titleText mb-2 text-2xl xs:text-3xl text-center">Refrigera</h3>
                    <p className="text-primaryColor text-center">Siempre mantener tu producto en refrigeración  nunca congelación.</p>
                </div>
                <div className="grid place-items-center gap-2 rounded-primarySize p-10 border-primaryColor/30 bg-primaryColor/5 border-1">
                    <IconClockHour3Filled className="text-primaryColor mb-2" height={30} width={30}/>
                    <h3 className="text-primaryColor font-bold font-titleText mb-2 text-2xl xs:text-3xl text-center">Prepáralo antes</h3>
                    <p className="text-primaryColor text-center">Para tu evento sacar del refrigerador el producto de 20 a 30 minutos antes </p>
                </div>
                <div className="rounded-primarySize overflow-hidden md:col-span-3 col-span-1">
                    <img src="image2.webp" alt="" />
                </div>
            </div>
        </>
    )
}