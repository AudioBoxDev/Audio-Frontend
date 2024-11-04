import React from 'react'
import SidebarItems from './SidebarItems';
import { Upload, TrendingUp,Bolt,Settings, Star, CirclePlus, MicVocal, Music, FileMusic, Wallet } from 'lucide-react';
import Link from 'next/link';
import UploadModal from './UploadModal';


const Sidebar = () => {
  return (
    <>
    <div className="bg-custom-gradient overflow-y-scroll fixed h-screen w-[214px)] bg-black text-white text-base p-5">
     
      <Link href="/" className="flex items-center space-x-3 mb-10">
        <div className="bg-pink-500 rounded-full h-10 w-10"></div>
        <h1 className="text-2xl font-semibold text-pink-400">AudioBox</h1>
      </Link>

      
      <nav className="space-y-4">
        <div className="flex items-center space-x-3 text-pink-500">
          <Bolt className="w-4 h-4" />
          <span>Discover</span>
        </div>
        <div className="space-y-6">
          <SidebarItems icon={Wallet} label="Wallet" to="/dashboard" />
          <SidebarItems icon={Music} label="Playlist" to="/dashboard" />
          <SidebarItems icon={FileMusic} label="Album" to="/dashboard/album" />
          <SidebarItems icon={MicVocal} label="Artist" to="/dashboard"  />
        </div>

        
        <div className="pt-8 space-y-4">
          <h2 className="text-xs text-gray-500 mb-4">DISCOVERY</h2>
          <div className="space-y-6">
            <SidebarItems icon={TrendingUp} label="Trending" to="/dashboard" />
            <SidebarItems icon={Star} label="Popular" to="/dashboard" />
            <UploadModal/>
          </div>
        </div>

        
        <div className="pt-8 space-y-3" >
          <h2 className="text-xs text-gray-500 mb-4">MY PLAYLIST</h2>
          <SidebarItems icon={CirclePlus} label="Create New" />
          <ul className="space-y-5 mt-4 text-base text-gray-500">
            <li className="cursor-pointer hover:text-pink-500">Playlist 1</li>
            <li className="cursor-pointer hover:text-pink-500">Playlist 2</li>
            <li className="cursor-pointer hover:text-pink-500">Playlist 3</li>
          </ul>
        </div>

        <div className='flex pt-24 items-center text-base text-gray-500 space-x-3  cursor-pointer hover:text-pink-500"'>
            <Settings className="w-4 h-4" />
            <span>Settings</span>
        </div>
      </nav>
    </div>
    
    </>
  )
}

export default Sidebar