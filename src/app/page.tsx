"use client"

import { useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { useAccount } from "wagmi"

import AudioBoxFeatures from "@/components/AudioBoxFeatures"
import AudioCardItem from "@/components/AudioCardItem"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar2 from "@/components/Navbar2"
import Faq from "@/components/Faq"
import MusicScene from "@/components/MusicScene"
import GoToTopButton from "@/components/GoToTopButton"
import  BannerAd  from "@/components/banner-ad"

import headset from "/public/images/img.png"
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails"

export default function Home() {
  const router = useRouter()
  const { artistProfileDetails } = uploadProfileDetails()
  const { isConnected } = useAccount()
  const token = Cookies.get("audioblocks_jwt")?.trim()

  const redirectPath = useMemo(() => {
    return artistProfileDetails ? "/dashboard" : "/dashboard/profile"
  }, [artistProfileDetails])

  const getStarted = async () => {
    try {
      if (token) {
        router.push(redirectPath)
      } else {
        if (!isConnected) {
          toast.error("Please connect your wallet")
        } else {
          toast.error("Please sign the Authentication message")
        }
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred")
    }
  }

  return (
    <>
      <Navbar2 />
      <Hero />
      <AudioBoxFeatures />
      <MusicScene />
      <AudioCardItem />
      <Faq />

      <div className="bg-gradient-to-r border border-[#1B1B1B] m-auto w-11/12 rounded-xl mb-9 text-white py-6">
        <div className="grid w-11/12 m-auto items-center md:grid-cols-5 grid-cols-12 gap-6">
          <div className="md:col-span-2 col-span-12 md:text-left text-center md:pl-16 space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Stream, Support, and Own it!
            </h1>
            <p className="text-lg md:text-xl">
              Join a community where your support makes a real difference, and every play, tip, or purchase helps artists thrive.
            </p>
            <button
              onClick={getStarted}
              className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-6 py-3 rounded-full"
            >
              Get Started
            </button>
          </div>

          <div className="md:col-span-3 col-span-12">
            <Image src={headset} alt="Headphones illustration" className="w-full md:w-96 mx-auto" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="mb-4">
          <BannerAd slot="bottom-banner" size={50} />
        </div>


      <div className="bg-[#471439] text-white py-4">
                <div className="container mx-auto flex items-center justify-center space-x-2">
          <span className="text-sm font-bold">Powered by</span>
          <Image src="/images/lisk.png" alt="Lisk logo" width={48} height={48} />
          <span className="text-sm font-bold">Lisk</span>
        </div>
      </div>

      <GoToTopButton />
      <Footer />
    </>
  )
}
