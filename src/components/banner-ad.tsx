"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ProfessionalBannerAdProps {
  slot?: string
  size?: number // Used to control image height
}

interface Ad {
  id: string
  imageUrl: string
  title?: string
  description?: string
  slot?: string
}

const ads: Ad[] = [
  {
    id: "1",
    imageUrl: "/images/socs.jpg",
    title: "Professional Services",
    description: "Discover our premium solutions",
  },
  {
    id: "2",
    imageUrl: "/images/learn.jpg",
    title: "Innovation Hub",
    description: "Leading technology solutions",
  },
]

export default function ProfessionalBannerAd({ slot, size = 80 }: ProfessionalBannerAdProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ads.length)
        setTransitioning(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [visible])

  if (!visible) return null

  const currentAd = ads[index]

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setVisible(false)
  }

  const jumpToAd = (i: number) => {
    setTransitioning(true)
    setTimeout(() => {
      setIndex(i)
      setTransitioning(false)
    }, 300)
  }

  const handleAdClick = () => {
    if (index === 0) {
      window.open("https://soccersm.ai/ai-predictions", "_blank")
    } else if (index === 1) {
      window.open("https://linktr.ee/learnwayapp", "_blank")
    }
  }

  return (
    <div className="relative border-b border-gray-200 bg-black">
      <div className="text-xs text-gray-500 text-center py-1 bg-black font-medium tracking-wide">
        SPONSORED 
      </div>

      <div className="max-w-2xl mx-auto px-3 py-2">
        <div
          onClick={handleAdClick}
          className={cn(
            "relative rounded-xl overflow-hidden group transition-all duration-500 cursor-pointer bg-black shadow-lg border border-gray-700",
            transitioning ? "scale-[0.98] opacity-70" : "scale-100 opacity-100",
            "hover:shadow-xl hover:border-gray-300"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700" />

          <button
            aria-label="Close advertisement"
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-6 h-6 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md border border-gray-600"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="relative p-2">
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl">
                <div
                  className="w-full rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300"
                  style={{ height: size }}
                >
                  <img
                    src={currentAd.imageUrl || "/placeholder.svg"}
                    alt={currentAd.title || "Advertisement"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-80" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
              style={{
                width: transitioning ? "0%" : "100%",
                animation: transitioning ? "none" : "progressBar 4s linear forwards",
              }}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-2">
          {ads.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpToAd(i)}
              aria-label={`View advertisement ${i + 1}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 hover:scale-125",
                i === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        <div className="text-center mt-2 text-xs text-gray-400 font-medium">
          {/* {index + 1} of {ads.length} */}
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
