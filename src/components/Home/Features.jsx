import React from 'react'
import { FeaturesData } from '@/Data/Home/HomeData'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='bg-backgroundLightAqua flex justify-center items-center flex-col text-textDark py-20 gap-5'>
    <p className='font-semibold text-5xl'>Key Features</p>
    <p className='text-textLightPrimary text-xl '>“Empowering Solar Energy Monitoring with Cutting-Edge Features”</p>
    <div className='flex gap-5 mt-3'>
        {
            FeaturesData.map(({image,alt,title,description},index)=>(
                <div key={index} className='flex flex-col justify-center items-start gap-5 max-w-[360px] p-8 border border-backgroundAqua rounded-xl bg-[#3cab8f0f]'>
                    <Image src={image} alt={alt} />
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
            )) 
        }
    </div>
    </div>
  )
}

export default Features
