
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Dashboardlayout = ({children,}) => {
  return (
    <>
    <div>

    <Sidebar/>

    <div className="ml-52 font-roboto flex flex-col justify-center items-center">
      <Navbar />

      <div className='text-white '>{children}</div>
      </div>
    </div>
    
    </>
  )
}

export default Dashboardlayout