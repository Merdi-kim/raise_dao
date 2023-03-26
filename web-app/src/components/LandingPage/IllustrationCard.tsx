import { IIllustrationCard } from '@/interfaces'
import Image from 'next/image'
import React, { FC } from 'react'

const IllustrationCard:FC<IIllustrationCard> = ({text, image}) => {
  return (
    <div className='relative'>
        <Image height={200} width={200}  src={image} alt="" className='h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 p-1 sm:p-4 rounded-[50%] mb-4 bg-slate-200' />
        <span className='hidden sm:block'>{text}</span>
        <Image height={200} width={200}  src="/assets/right-arrow.svg" alt="arrow right" className='h-12 w-[19px] md:w-[20px] lg:w-[40px] absolute top-[1%] md:top-[15%] lg:top-[30%] right-[-90%] md:right-[-70%] lg:right-[-100%]' />
    </div>
  )
}

export default IllustrationCard