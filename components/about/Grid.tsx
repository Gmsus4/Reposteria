export const Grid = () => {
  return (
    <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 blocks">
      {/* Fila 1 */}
      <div className="bg-primaryColor/90 rounded-primarySize p-6 py-14 lg:col-span-2 order-1 lg:order-1 grid place-items-center">
        <div className="text-yellow grid">
          <span className="text-center text-5xl md:text-7xl font-medium">10k+</span>
          <h3 className="text-center text-lg">Clientes satisfechos</h3>
        </div>
      </div>
      <div className="bg-primaryColor/90 rounded-primarySize lg:col-span-1 overflow-hidden lg:h-80 order-2 lg:order-2">
        <img src="image1.webp" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Fila 2 - en móvil: texto primero, luego imagen */}
      <div className="bg-primaryColor/90 rounded-primarySize p-6 py-14 lg:col-span-1 lg:h-80 order-3 md:order-4 lg:order-3 grid place-items-center">
        <div className="text-yellow grid">
          <span className="text-center text-5xl md:text-7xl font-medium">4</span>
          <h3 className="text-center text-lg">Cafés</h3>
        </div>
      </div>
      <div className="bg-primaryColor/90 rounded-primarySize lg:col-span-1 overflow-hidden lg:h-80 order-3 lg:order-4">
        <img src="image3.webp" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Fila 3 - en móvil: texto primero, luego imagen */}
      <div className="bg-primaryColor/90 rounded-primarySize p-6 py-14 lg:col-span-1 lg:h-80 order-5 lg:order-5 grid place-items-center">
        <div className="text-yellow grid">
          <span className="text-center text-5xl md:text-7xl font-medium">20</span>
          <h3 className="text-center text-lg">Productos</h3>
        </div>
      </div>
      <div className="bg-primaryColor/90 rounded-primarySize lg:col-span-2 overflow-hidden lg:h-80 order-6 lg:order-6">
        <img src="image2.webp" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
