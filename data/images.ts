// ─── Assets base ───────────────────────────────────────────────
// Fuente única de verdad para todas las imágenes del proyecto.
// Las secciones referencian estos assets, no rutas directas.

const assets = {
  chilaquiles: {
    src: "https://images.pexels.com/photos/31843919/pexels-photo-31843919.jpeg",
    alt: "Chilaquiles",
  },
  hotcakes: {
    src: "https://images.pexels.com/photos/30892986/pexels-photo-30892986.jpeg",
    alt: "Hotcakes",
  },
  cafe: {
    src: "https://images.pexels.com/photos/2068296/pexels-photo-2068296.jpeg",
    alt: "Café",
  },


  // ── Marca / Generales ──────────────────────────────────────
  cupcakeRedVelvet: {
    src: "/images/cupcake-red-velvet.webp",
    alt: "Cupcake red velvet con betún de queso crema y corazón de chocolate",
  },
  brownieSalsaChocolate: {
    src: "/images/brownie-salsa-chocolate.webp",
    alt: "Brownie bañado en salsa de chocolate sobre plato blanco",
  },
  brownieHeladoCereza: {
    src: "/images/brownie-helado-cereza.webp",
    alt: "Brownie con bola de helado de vainilla y cereza sobre plato blanco",
  },
  brownieDecoradoCerezas: {
    src: "/images/brownie-decorado-cerezas.webp",
    alt: "Brownie de chocolate con rizos de chocolate, nueces y cerezas rojas",
  },

  cookiesChocolateNavidad: {
    src: "/images/cookies-chocolate-navidad.webp",
    alt: "Stack de cookies de chocolate rellenas con moño navideño rojo y blanco",
  },
  pastelFlamingoCumpleanos: {
    src: "/images/pastel-flamingo-cumpleanos.webp",
    alt: "Pastel rosa de cumpleaños decorado con flamingo y globo dorado",
  },
  terrazaRestaurante: {
    src: "/images/terraza-restaurante.webp",
    alt: "Terraza de restaurante con mesas de madera e iluminación cálida",
  },
  rebanadaPastelChocolateChispas: {
    src: "/images/rebanada-pastel-chocolate-chispas.webp",
    alt: "Rebanada de pastel de chocolate con chispas y salsa sobre plato blanco",
  },
  cupcakeVainillaFrambuesaFlor: {
    src: "/images/cupcake-vainilla-frambuesa-flor.webp",
    alt: "Manos sosteniendo cupcake de vainilla decorado con frambuesa y flor blanca",
  },
  latteTazaRoja: {
    src: "/images/latte-taza-roja-mesa.webp",
    alt: "Manos sosteniendo taza roja con latte art sobre mesa de madera",
  },


  
  pastelChocolateIntenso: {
    src: "/pasteles/pastel-chocolate-intenso.webp",
    alt: "Pastel naked de chocolate con ganache en cascada, cerezas rojas y rizos de chocolate.",
  },
  tartaFrutosRojos: {
    src: "/postres/tarta-frutos-rojos.webp",
    alt: "Tarta de frutos rojos con base de bizcocho de chocolate con gelatina de frutos rojos y corona de crema chantilly.",
  },
  latteArtesanal: {
    src: "/bebidas/latte-artesanal.webp",
    alt: "Latte espresso con leche vaporizada, latte art de hoja y azúcar moscabado.",
  },

  // ── Bebidas ────────────────────────────────────────────────
  espressoMaquina: {
    src: "/images/espresso-maquina.webp",
    alt: "Extracción de espresso en máquina profesional de café",
  },
  cappuccinoPan: {
    src: "/images/cappuccino-pan.webp",
    alt: "Cappuccino con arte latte junto a pan artesanal sobre mesa de madera",
  },
  latteArtVertido: {
    src: "/images/latte-art-vertido.webp",
    alt: "Barista vertiendo leche para crear arte latte en taza blanca",
  },

  // ── Locations ────────────────────────────────────────────────
  map: {
    src: "/locations/mapa-sucursales.webp",
    alt: "Mapa con ubicaciones de las sucursales Couronne en Jalisco",
  },

} as const

// ─── Secciones ─────────────────────────────────────────────────
// Cada sección referencia assets del objeto de arriba.
// Si una imagen cambia de sección, solo se actualiza aquí.

export const images = {

  hero: [
    assets.brownieDecoradoCerezas,
    assets.cupcakeRedVelvet,
    assets.cookiesChocolateNavidad,
  ],

  about: [
    assets.brownieDecoradoCerezas,
    assets.cupcakeRedVelvet,
    assets.cookiesChocolateNavidad,
  ],

  statsGrid: [
    assets.chilaquiles,
    assets.hotcakes,
    assets.cafe,
  ],

  categories2: [
    { ...assets.pastelChocolateIntenso, name: "pasteles", path: "/menu?category=Pasteles" },
    { ...assets.latteArtesanal,          name: "bebidas",  path: "/menu?category=Bebidas"  },
    { ...assets.tartaFrutosRojos,    name: "postres",  path: "/menu?category=Postres"  },
  ],

  categories: [
    assets.pastelChocolateIntenso,
    assets.latteArtesanal,   
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
    assets.tartaFrutosRojos,
  ],


  aboutDetails: [
    assets.terrazaRestaurante,
    assets.pastelFlamingoCumpleanos,
    assets.brownieHeladoCereza,
  ],

  testimonials: [
    assets.espressoMaquina,
    assets.cappuccinoPan,
    assets.latteArtVertido,
  ],

  benefitsPanel: [
    assets.brownieSalsaChocolate,
  ],

  error404: [
    assets.brownieDecoradoCerezas,
    assets.cupcakeRedVelvet,
    assets.cookiesChocolateNavidad,
  ],

  map: [
    assets.map
  ]

} as const