export interface Location {
  id: number
  slug: string
  city: string
  name: string
  address: string
  phone: string
  hours: string
  image: string
  gallery: string[]
  mapUrl: string
  embedUrl: string
}

export const locations: Location[] = [
  {
    id: 1,
    slug: "san-juanito-de-escobedo",
    city: "San Juanito de Escobedo",
    name: "Couronne Reposteria y Cafeteria",
    address: "Cuauhtémoc 3, Centro, 46560 San Juanito de Escobedo, Jal.",
    phone: "+52 (384) 118-3337",
    hours: "Lun–Dom: 8:40am – 2:30pm",
    image: "https://cdn.milenio.com/uploads/media/2024/04/30/estadio-marzo-une-sedes-mundial.jpeg",
    gallery: ["/locations/location1.webp", "/locations/location2.webp", "/locations/location3.webp", "/locations/location4.webp"],
    mapUrl: "https://maps.app.goo.gl/kyZ9Zn5Vj56cGk1t8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.812836328172!2d-104.0020315!3d20.7988585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84266d4271b54c4f%3A0x70ca41204b678542!2sCouronne%20Reposteria%20y%20Cafeteria!5e0!3m2!1ses!2smx!4v1772551541698!5m2!1ses!2smx",
  },
    {
    id: 2,
    slug: "ahualulco-de-mercado",
    city: "Ahualulco de Mercado",
    name: "Couronne Reposteria y café",
    address: "Jose ma. Mercado 108, Centro, 46730 Ahualulco de Mercado, Jal.",
    phone: "+52 (386) 104-9820",
    hours: "Lun–Dom: 9:30am – 10:30pm",
    image: "https://cdn.milenio.com/uploads/media/2024/04/30/estadio-marzo-une-sedes-mundial.jpeg",
    gallery: ["/locations/location1.webp", "/locations/location2.webp", "/locations/location3.webp", "/locations/location4.webp"],
    mapUrl: "https://maps.app.goo.gl/pUthzRhZwhqY2XFg7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1573322554827!2d-103.9753661!3d20.703834800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842673b9536fb38d%3A0x7a488f49bfe75a77!2sCouronne%20Reposteria%20y%20caf%C3%A9!5e0!3m2!1ses!2smx!4v1772553209004!5m2!1ses!2smx"
  },
    {
    id: 3,
    slug: "etzatlan",
    city: "Etzatlán",
    name: "Reposteria y Cafe Couronne",
    address: "Ingeniero, José Siordia 46, Revolución, 46500 Etzatlán, Jal.",
    phone: "",
    hours: "Lun–Dom: 10:00am – 3:30pm",
    image: "https://cdn.milenio.com/uploads/media/2024/04/30/estadio-marzo-une-sedes-mundial.jpeg",
    gallery: ["/locations/location1.webp", "/locations/location2.webp", "/locations/location3.webp", "/locations/location4.webp"],
    mapUrl: "https://maps.app.goo.gl/XgksN7RfLia5Tm5X6",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.5555594505854!2d-104.07949339999999!3d20.768800499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84266f2376b580f3%3A0x2156914200c2dd61!2sReposteria%20y%20Cafe%20Couronne!5e0!3m2!1ses!2smx!4v1772553386352!5m2!1ses!2smx",
  },
  {
    id: 4,
    slug: "tala",
    city: "Tala",
    name: "Repostería Couronne",
    address: "Simon Bolívar 114, El Rosal, 45300 Tala, Jal.",
    phone: "+52 (384) 688-0804",
    hours: "Lun–Dom: 8:40am – 2:30pm",
    image: "https://cdn.milenio.com/uploads/media/2024/04/30/estadio-marzo-une-sedes-mundial.jpeg",
    gallery: ["/locations/location1.webp", "/locations/location2.webp", "/locations/location3.webp", "/locations/location4.webp"],
    mapUrl: "https://maps.app.goo.gl/zaxiUq3rVPUS3Nob6",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.4095945454046!2d-103.708933!3d20.652908699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8426050022220279%3A0x67d8a7802e75232e!2sReposter%C3%ADa%20Couronne!5e0!3m2!1ses!2smx!4v1772553538469!5m2!1ses!2smx",
  },
]