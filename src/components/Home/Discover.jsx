import Image from 'next/image'
import React from 'react'
import Map from "../../../public/Images/Home/Map.png"
const Discover = () => {
  return (
    <div className='flex bg-backgroundAmber items-center justify-between p-16 my-20' >
      <div className='flex flex-col gap-10'>
        <p className='text-5xl font-medium max-w-[90%] '>Experience the power of LOD-1 3D city models to visualize and optimize energy utilization on building surfaces, enabling smarter decisions for urban solar deployment.</p>
        <button className='bg-backgroundGreen py-3 pb-5 rounded-lg px-8 w-fit text-white text-3xl' >Discover Solar Insights</button>
      </div>
      <Image src={Map} className='h-[600px] w-[735px]' alt='map' />
    </div>
  )
}

export default Discover
