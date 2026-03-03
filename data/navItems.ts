import { Icon, IconCake, IconMail, IconMap, IconUsersGroup } from "@tabler/icons-react";

export interface NavItem {
  title: string;
  href: string;
  icon: Icon;
}

export interface otherLinks {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    title: "Productos",
    href: "/products",
    icon: IconCake,
  },
  {
    title: "Ubicación",
    href: "/locations",
    icon: IconMap,
  },  
  {
    title: "Nosotros",
    href: "/about",
    icon: IconUsersGroup,
  },
  {
    title: "Contacto",
    href: "/contact",
    icon: IconMail,
  },
];

export const otherLinks: otherLinks[] = [
  { title: "Recomendaciones generales", href: "/products#recomendaciones" },
  { title: "Términos y condiciones", href: "/terms" },
  { title: "Privacidad", href: "/privacy" },
  // { title: "Contacto", href: "/contact" },
]