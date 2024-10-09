import React from 'react'
import Group2 from '/public/images/Group2.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <div  className='bg-gradient-to-r py-32 -mt-24 from-[#5519188A] to-[#37072E8A] h-screen' >
            <div className='grid w-11/12 m-auto items-center grid-cols-2 gap-10'>
            <div className="col-span-1 space-y-5">
              <h1 className="text-7xl md:text-5xl text-white font-bold leading-tight">
              Stream Music, Own the Experience!
              </h1>
              <p className="text-lg md:text-xl text-white">
              Share your favorite tunes. No middlemen, no hassle—just pure blockchain magic!
              </p>
              <div>

              <Link href="/dashboard" className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-5 py-4 rounded-3xl">Start Listening</Link>
              </div>
            </div>
            <div className='col-span-1'>
              <Image src={Group2} alt='' className='h-[400px] w-[500px]'/>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default Hero