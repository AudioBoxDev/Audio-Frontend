import Link from 'next/link'
import React from 'react'

const SidebarItems = ({ icon: Icon, label, to }:any) => {
  return (
   
    <div className="text-base items-center text-gray-400 hover:text-pink-500 cursor-pointer">
     <Link href={`${to}`} className='flex space-x-3 tems-center'>
      <Icon className="w-4 h-4" />
      <span className='font-roboto text-base font-normal leading-[18.75px] text-left'>{label}</span>
    </Link>
    </div>
  )
}

export default SidebarItems