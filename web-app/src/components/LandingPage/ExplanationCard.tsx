import React from 'react'

const ExplanationCard = ({image, text}) => {
  return (
    <div className='w-[400px] h-full rounded-2xl bg-slate-50 border-[0.5px] border-purple-500'>
        <div className='w-[400px] h-[100px] flex justify-center items-center'>
            <img src={image} alt="" className='h-20 w-20 p-2 rounded-full overflow-hidden bg-pink-300' />
        </div>
        <div className='p-4'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ExplanationCard