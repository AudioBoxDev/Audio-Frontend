"use client"
import AudioCardItem from "@/components/AudioCardItem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
  <>
    <Navbar2/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-red-500">AudioBox Onchain</h2>
      <Hero/>
      <ConnectButton/>
    </div>
    <AudioCardItem/>
    <Footer/>
  </>
    
  );
}
