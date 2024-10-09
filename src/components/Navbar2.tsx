import Link from 'next/link';
import React from 'react'
import { useAccount } from 'wagmi'

const Navbar2 = () => {
    const account = useAccount()
  return (
    <>
    
    <nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
        <Link href="/" className="flex items-center space-x-3">
            <div className="bg-pink-500 rounded-full h-10 w-10"></div>
            <h1 className="text-2xl font-semibold text-pink-400">AudioBox</h1>
        </Link>
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
            {account.address ? <div className='text-ellipsis font-roboto font-bold border p-2 rounded-2xl overflow-hidden w-32'>{account.address}</div> : 
            <Link href="/login"  className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-4 py-2 rounded-full">Sign up</Link>
        }
            </ul>
        </div>
        
    </nav>
   
    </>
  )
}

export default Navbar2;