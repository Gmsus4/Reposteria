import { IconBus, IconCrownFilled, IconMilkshake } from "@tabler/icons-react"
import Link from "next/link"

interface LogoProps {
  isColorPrimary?: boolean // optional + ? = undefined is allowed
}

export const LogoBtn = ({ isColorPrimary = true }: LogoProps) => {
  return (
      <Link href="/" className="mask mask-square rounded-md w-11 h-11 justify-center bg-darkMid inline-flex items-center font-semibold text-primary transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Home">
        <IconBus
          size={28} // ← usually good to control size explicitly
          className={isColorPrimary ? "text-primaryMutted" : "text-primary"}
        />
      </Link>
  )
}
