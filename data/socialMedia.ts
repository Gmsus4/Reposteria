import { Icon, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

export interface SocialM {
  title: string;
  href: string;
  icon: Icon;
}

export const socialMedia: Record<string, SocialM> = {
  facebook: {
    title: "Facebook",
    href: "https://www.facebook.com/reposteriacorona",
    icon: IconBrandFacebook,
  },
  instagram: {
    title: "Instagram",
    href: "https://www.instagram.com/tagblade/",
    icon: IconBrandInstagram,
  },
};