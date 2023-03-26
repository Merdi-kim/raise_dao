import { IExplanationCard } from '@/interfaces'
import React, { FC } from 'react'

const ExplanationCard:FC<IExplanationCard> = ({image, text}) => {
  return (
    <div className='w-[300px] sm:w-[400px] h-full m-4 rounded-2xl bg-slate-50 border-[0.5px] border-purple-500'>
        <div className='sm:h-[100px] flex justify-center items-center'>
            <img src={image} alt="" className='h-14 w-14 mt-2 sm:mt-0 sm:h-20 sm:w-20 p-2 rounded-full overflow-hidden bg-pink-300' />
        </div>
        <div className='p-4'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ExplanationCard