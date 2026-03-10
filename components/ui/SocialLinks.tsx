import { socialMedia } from "@/data/socialMedia"
import Link from "next/link"

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.values(socialMedia).map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.title}
            href={item.href}
            className="w-9 h-9 grid place-items-center bg-darkMid rounded-primarySize text-primary transition-all duration-200 hover:scale-110"
          >
            <Icon width={18} height={18} />
          </Link>
        )
      })}
    </div>
  )
}