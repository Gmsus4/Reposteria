export interface ContactItem {
  label: string
  href?: string
  value?: string
}

export interface ContactInfo {
  title: string
  prefix?: string  // para tel: y mailto:
  items: ContactItem[]
}

export const contactData: ContactInfo[] = [
  {
    title: "Teléfono",
    prefix: "tel:",
    items: [
      { label: "+52 (555) 123-4567", value: "523322364324" },
      // { label: "+52 (555) 987-6543" },
    ],
  },
  {
    title: "Email",
    prefix: "mailto:",
    items: [
      { label: "hola@tuposteria.com" },
    ],
  },
  {
    title: "Ubicaciones",
    items: [
      { label: "Calle Principal #123, Centro", href: "https://maps.app.goo.gl/..." },
      // { label: "Av. Siempre Viva #456, Col. Norte", href: "https://maps.app.goo.gl/..." },
    ],
  },
]