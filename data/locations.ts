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
]