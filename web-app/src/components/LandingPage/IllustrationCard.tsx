import React from 'react'

const IllustrationCard = ({text, image}) => {
  return (
    <div>
        <img src={image} alt="" className='h-20 w-20 p-4 rounded-[50%] mb-4 bg-slate-200' />
        <span>{text}</span>
    </div>
  )
}

export default IllustrationCard