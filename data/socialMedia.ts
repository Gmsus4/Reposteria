import { Icon, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

export interface socialM {
  title: string;
  href: string;
  icon: Icon;
}

export const socialMedia: socialM[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/tagblade/",
    icon: IconBrandInstagram,
  },
  {
    title: "Facebook",
    href: "https://www.instagram.com/tagblade/",
    icon: IconBrandFacebook,
  },  
  {
    title: "Tiktok",
    href: "https://www.instagram.com/tagblade/",
    icon: IconBrandTiktok,
  },
];