import React from 'react'
import Image from 'next/image';
import { CirclePlay, Headset, Music, Play, SearchIcon, Upload } from 'lucide-react';
import image from "/public/images/Group1.png"
import RecentlyPlayed from '@/components/RecentPlayed';
import Trending from '@/components/Trending';

 const Stream = () => {
  return (
   <>
      <div className="w-11/12 m-auto text-white">
      <div className="grid grid-cols-12 gap-8">
        
        <div className="col-span-9">
          
          <div className=" bg-gradient-to-r gap-x-9 items-center flex justify-between from-[#4B0B3E] to-[#274749] text-white p-8 h-[280px] rounded-lg mb-8">
            <div className='w-[288px]'>
            <h1 className="text-2xl font-bold text-white mb-2">Unlock Exclusive Music NFTs</h1>
            <p className="text-base mb-4 text-[#91A2A4]">
              Explore our NFT marketplace. Support your favorite artists while owning a piece of music history.
            </p>
            </div>
           
            <div className="">
              <Image src={image} alt="Music" width={260} height={228} />
            </div>
          </div>

         
          <div className="text-white">
            <h2 className="text-base font-bold mb-4">Category</h2>
            <div className="flex space-x-3 text-sm flex-wrap">
              <button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">Pop music</button>
              <button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">Hip Hop music</button>
              <button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">Rock music</button>
              <button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">R&B music</button>
              <button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">Electronic music</button>
              <button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">Country music</button>
            </div>
          </div>
          
          <RecentlyPlayed/>
          <Trending/>
        </div>

      
        <div className="bg-custom-gradient space-y-2 col-span-3 h-[400px] p-6 rounded-3xl">
          <h2 className="text-base">Welcome Back</h2>
          <h1 className="text-white font-bold text-5xl">Wini</h1>
          <div className="text-gray-400">
            <h3 className="font-semibold text-sm text-white mb-4">Your Music Milestones</h3>
            <ul className='text-sm space-y-2'>
              <li className="text-gray-500 space-x-3 flex items-center"><Play className="w-4 h-4" /> <div className="text-white flex flex-col"><span>Total Stream Count:</span> <span className='text-[#666C6C]'>56 hours</span> </div></li>
              <li className="text-gray-500 space-x-3 flex items-center"><Music className="w-4 h-4"/><div className="text-white flex flex-col">Songs Bought: </div> 12</li>
              <li className="text-gray-500 space-x-3 flex items-center"><CirclePlay className="w-4 h-4"/> <div className="text-white flex flex-col"><span>Albums Bought:</span> <span className='text-[#666C6C]'>3</span></div></li>
              <li className='text-gray-500 space-x-3 flex items-center'><Headset className="w-4 h-4"/> <div className="text-white flex flex-col"><span>Streaming Points:</span> <span className='text-[#666C6C]'>5200 points</span></div> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 
   </>
  )
}

export default Stream;
