"use client"
import { useState } from "react"
import { IconBrandWhatsapp, IconBrandFacebook, IconLink, IconCheck, IconShare, IconBrandX } from "@tabler/icons-react"
import { contactData } from "@/data/contactData"

interface ShareButtonProps {
  title: string
  description: string
}

export const ShareButton = ({ title, description }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false)

  const getShareData = () => {
    const url = window.location.href
    const encodedUrl = encodeURIComponent(url)
    const encodedText = encodeURIComponent(`¡Me interesa este producto: ${title}! ${description}`)
    return { url, encodedUrl, encodedText }
  }

  const shareLinks = [
    {
      label: "WhatsApp",
      icon: <IconBrandWhatsapp size={24} />,
      getHref: () => {
        const { encodedUrl, encodedText } = getShareData()
        return `https://wa.me/${contactData[0].items[0].value}?text=${encodedText}%20${encodedUrl}`
      },
    },
    {
      label: "Facebook",
      icon: <IconBrandFacebook size={24} />,
      getHref: () => {
        const { encodedUrl } = getShareData()
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
      },
    },
    {
      label: "Twitter / X",
      icon: <IconBrandX size={24} />,
      getHref: () => {
        const { encodedUrl, encodedText } = getShareData()
        return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
      },
    },
  ]

  const copyUrl = async () => {
    try {
      const { url } = getShareData()
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const { url } = getShareData()
      const input = document.createElement("input")
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="fab fab-flower absolute right-0 bottom-0 transition-colors ease-in-out">
      <div tabIndex={0} role="button" className="bg-secundaryColor rounded-full w-12 h-12 grid place-items-center cursor-pointer">
        <IconShare size={20} className="text-primaryColor"/>
      </div>
      <button className="fab-main-action bg-secundaryColor rounded-full w-12 h-12 grid place-items-center cursor-pointer">
        <IconShare size={20} className="text-primaryColor"/>
      </button>
      {shareLinks.map((link) => (
        <button
            key={link.label}
            onClick={(e) => {
                e.preventDefault()
                window.open(link.getHref(), "_blank", "noopener,noreferrer")
            }}
            className="btn btn-circle btn-lg bg-secundaryColor text-primaryColor border-none hover:bg-primaryColor hover:text-secundaryColor group"
            >
            <span className="transition-transform duration-200 group-hover:scale-125">
                {link.icon}
            </span>
        </button>
      ))}
      <button onClick={copyUrl} className="btn btn-circle btn-lg bg-secundaryColor text-primaryColor border-none hover:bg-primaryColor hover:text-secundaryColor group">
        <span className="transition-transform duration-200 group-hover:scale-125">
            {copied ? <IconCheck size={24} /> : <IconLink size={24} />}
        </span>
      </button>
    </div>
  )
}