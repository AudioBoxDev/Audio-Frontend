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
import Faq from "@/components/Faq";
import MusicScene from "@/components/MusicScene";

export default function Home() {
  return (
  <>
    <Navbar2/>
      <Hero/>
    <AudioBoxFeatures/>
    <MusicScene/>
    <AudioCardItem/>

    <Faq/>
    
    <div className="border-[#0E070C] border font-roboto w-11/12 mx-auto rounded-xl text-white py-16 my-16 px-4">
      <div className="grid items-center grid-cols-5 gap-6">
      <div className="col-span-2 pl-16 space-y-9">
        <h1 className="text-7xl md:text-8xl text-[#68BDE4] font-bold leading-tight">
        Stream Support Own
        </h1>
        <p className="text-lg md:text-xl text-white">
        Join our community where your support makes a real difference, and every play, tip, or purchase helps artists thrive.
        </p>
        <div>

        <Link href="/login" className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-6 py-3 rounded-full">Start Listening</Link>
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
