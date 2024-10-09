import { SearchIcon, Upload } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Input } from './ui/input';

const Navbar = () => {
  return (
    <>
    <div className='w-full'>
    <nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
        <div>
            <ul className="flex gap-9">
                <Link href="/"><li>Streams</li></Link>
                <Link href="/"><li>Artist hub</li></Link>
                <Link href="/dashboard/marketplace"><li>Marketplace</li></Link>
            </ul>
            
        </div>
        <div>
        <ul className="flex items-center gap-5">
            <Link href="/">Support</Link>
            <Link href="/">Download</Link>
            <Link href="/login" className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-4 py-2 rounded-full">Sign up</Link>
        </ul>
        </div>
        
    </nav>
    <div className='w-11/12 m-auto grid grid-cols-12 gap-8 pt-4'>
      <div className="col-span-9 flex items-center space-x-2 rounded-full  bg-[#1D1F1F] h-[50px] px-3">
        <SearchIcon className="h-4 w-4" />
        <Input type="search"  placeholder="Search by artists, songs or albums"  className="w-full rounded-full border-none focus:outline-none  bg-[#1D1F1F] text-white placeholder-gray-400" />
      </div>
      <div className="grid grid-cols-12 mb-10">
        <div className="grid  grid-flow-col col-span-3 space-x-4">
          <button className="bg-transparent col-span-2 text-sm flex items-center space-x-3 border border-pink-500 rounded-full px-4 text-pink-500">
            <span> 3.2 ETH </span><span className='text-white'>Withdraw</span>
          </button>
          <button className="border border-pink-500 items-center flex text-sm rounded-full px-3 py-1 text-white">
            <Upload className="h-3 w-3 mr-2" />
            Mint
          </button>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;