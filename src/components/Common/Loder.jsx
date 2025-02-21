import React from 'react'

const Loder = ({loading}) => {
    if(!loading){
        return null;
    }
  return (
    <div className='flex w-full h-full flex-1 justify-center items-center'>
    <div className="spinner"></div>
    </div>
  )
}

export default Loder
