import { SearchIcon, Upload } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Input } from './ui/input';
import { useAccount } from 'wagmi';

const Navbar = () => {

  // const account = useAccount();

  return (
    <>
    <div className='w-full'>
    <nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
        <div>
        <ul className="flex gap-9 font-semibold text-gray-400">
							<Link href="/" className="hover:text-white">
								<li>Streams</li>
							</Link>
							<Link href="/" className="hover:text-white">
								<li>Artist hub</li>
							</Link>
							<Link href="/dashboard/marketplace" className="hover:text-white">
								<li>Marketplace</li>
							</Link>
						</ul>
            
        </div>
        <div>
        <div className="col-span-9 flex items-center space-x-2 rounded-full  bg-[#1D1F1F] h-[50px] px-3">
        <SearchIcon className="h-4 w-4" />
        <Input type="search"  placeholder="Search by artists, songs or albums"  className="w-full rounded-full border-none focus:outline-none  bg-[#1D1F1F] text-white placeholder-gray-400" />
      </div>
        
        </div>
        
    </nav>
    </div>
    </>
  )
}

export default Navbar;