import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/Images/Home/logo.png"
import { navData } from '@/Data/Home/HomeData'
import Link from 'next/link'
const NavBar = () => {
    
  return (
    <div className='bg-backgroundGreen flex items-center justify-between px-16 py-2 text-white ' >
      <Image src={Logo} className='w-44' alt='Logo'/>
      <div className='flex items-center space-x-12' >
      {/* NAVLINK */}
        <div className='flex space-x-8'>
        {
            navData.map(({link,name},index)=>(
                <Link key={index} href={link}  className='text-lg' >{name}</Link>
            ))
        }
        </div>
        {/* LOGIN/USER */}
        {/* <div className='text-lg font-semibold'>
            {
                false ? <Link href={"/login"} className='bg-backgroundYellow text-black px-6 py-2 rounded-md' >Login</Link>:<div>user</div>
            }
        </div> */}
      </div>
    </div>
  )
}

export default NavBar
