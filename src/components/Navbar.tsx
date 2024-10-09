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
            {/* {account.address && <div className='text-ellipsis font-roboto font-bold border p-2 rounded-2xl overflow-hidden w-32'>{account.address}</div> } */}
        </ul>
        </div>
        
    </nav>
    <div className='w-11/12 m-auto grid grid-cols-12 gap-8 pt-4 pb-5'>
      <div className="col-span-9 flex items-center space-x-2 rounded-full  bg-[#1D1F1F] h-[50px] px-3">
        <SearchIcon className="h-4 w-4" />
        <Input type="search"  placeholder="Search by artists, songs or albums"  className="w-full rounded-full border-none focus:outline-none  bg-[#1D1F1F] text-white placeholder-gray-400" />
      </div>
      <div className="mb-10 col-span-3">
          <button className="bg-transparent text-md flex py-3 px-5 items-center space-x-3 border border-pink-500 rounded-full px-4 text-pink-500">
            <span> 3.2 ETH </span><span className='text-white'>Withdraw</span>
          </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar;