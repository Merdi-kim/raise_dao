import React from 'react'

const IllustrationCard = ({text, image}) => {
  return (
    <div className='relative'>
        <img src={image} alt="" className='h-20 w-20 p-4 rounded-[50%] mb-4 bg-slate-200' />
        <span>{text}</span>
        <img src="assets/right-arrow.svg" alt="arrow right" className='h-12 absolute top-[30%] right-[-100%]' />
    </div>
  )
}

export default IllustrationCard