"use client"
import { IconArrowAutofitLeftFilled } from "@tabler/icons-react"
import { useRouter } from "next/navigation"

export const BackButton = ({ label = "Volver" }: { label?: string }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="anim-back absolute bg-primary rounded-primarySize px-4 py-2 top-4 left-4 z-50 inline-flex items-center gap-2 text-darkWarm/90 text-sm transition-colors duration-200 group cursor-pointer"
    >
      {/* <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span> */}
      <IconArrowAutofitLeftFilled />
      {/* {label} */}
    </button>
  )
}