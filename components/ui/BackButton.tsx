"use client"
import { useRouter } from "next/navigation"

export const BackButton = ({ label = "Volver" }: { label?: string }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="anim-back inline-flex items-center gap-2 text-yellow/90 hover:text-yellow text-sm mb-10 transition-colors duration-200 group cursor-pointer"
    >
      <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
      {label}
    </button>
  )
}