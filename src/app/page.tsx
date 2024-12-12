"use client"
import AudioBoxFeatures from "@/components/AudioBoxFeatures";
import AudioCardItem from "@/components/AudioCardItem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import headset from "/public/images/img.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
  <>
    <Navbar2/>
      <Hero/>
    <AudioBoxFeatures/>
    <AudioCardItem/>
    
    <div className="bg-gradient-to-r from-[#991E7035] to-[#333A5670] text-white py-6">
      <div className="grid w-11/12 m-auto items-center grid-cols-5 gap-6">
      <div className="col-span-2 pl-16 space-y-5">
        <h1 className="text-7xl md:text-5xl font-bold leading-tight">
          Stream,Support, and Own it!
        </h1>
        <p className="text-lg md:text-xl text-white">
          Join a community where your support makes a real difference, and every play, tip, or purchase helps artists thrive.
        </p>
        <div>

        <Link href="/login" className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-4 py-2 rounded-full">Get Started</Link>
        </div>
      </div>
      <div className="col-span-3">
        <Image
          className="w-full md:w-96 mx-auto"
          src={headset}
          alt="Headphone"
        />
      </div>
      </div>
    </div>
    <Footer/>
  </>
    
  );
}
