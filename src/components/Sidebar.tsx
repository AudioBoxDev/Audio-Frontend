import React from 'react'
import SidebarItems from './SidebarItems';
import { Upload, TrendingUp,Bolt,Settings, Star, CirclePlus, MicVocal, Music, FileMusic, Wallet, ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ isOpen, toggleClose }: any) => {
  const pathname = usePathname();
  return (
    <>
    {isOpen && (
				<div
					onClick={toggleClose}
					className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
				></div>
			)}
			<div 
				className={`bg-custom-gradient z-30 overflow-y-scroll  lg:translate-x-0 scrollbar-hide lg:block transform transition-transform duration-300  fixed h-screen ${
					isOpen ? "translate-x-0" : "-translate-x-96"
				} bg-black text-white text-base p-5`}
			>
      <div className="flex">
					<Link href="/" className="flex items-center space-x-3 mb-10">
						<div className="bg-pink-500 rounded-full h-10 w-10"></div>
						<h1 className="text-xl font-semibold text-pink-400">AudioBlocks</h1>
					</Link>
					
						<ArrowBigLeft
							onClick={toggleClose}
							className="lg:hidden ml-5 mt-3 block cursor-pointer"
							size={16}
						/>
					
				</div>

      
      <nav className="space-y-4">
        <div className="flex items-center space-x-3 text-pink-500">
          <Bolt className="w-4 h-4" />
          <span>Discover</span>
        </div>
        <div className="space-y-6">
          <SidebarItems icon={Wallet} label="Wallet" to="/dashboard" isActive={pathname === "/dashboard"} />
          <SidebarItems icon={Music} label="Playlist" to="/dashboard" />
          <SidebarItems icon={FileMusic} label="Album" to="/dashboard/album" isActive={pathname === "/dashboard/album"}/>
          <SidebarItems icon={MicVocal} label="Artist" to="/dashboard"  />
        </div>

        
        <div className="pt-8 space-y-4">
          <h2 className="text-xs text-gray-500 mb-4">DISCOVERY</h2>
          <div className="space-y-6">
            <SidebarItems icon={TrendingUp} label="Trending" to="/dashboard" isActive={pathname === "/dashboard"} />
            <SidebarItems icon={Star} label="Popular" to="/dashboard" isActive={pathname === "/dashboard"}/>
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