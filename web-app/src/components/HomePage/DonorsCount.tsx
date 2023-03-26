import { IDonorsCount } from '@/interfaces'
import Image from 'next/image'
import React, { FC } from 'react'

const DonorsCount:FC<IDonorsCount> = ({count}) => {
  return (
    <div>
        <div className='flex items-center'>
           <Image src="/assets/user.png" height={200} width={200} alt="" className='h-8 w-8 rounded-[50%]' />
           <Image src="/assets/user.png" height={200} width={200} alt="" className='h-8 w-8 rounded-[50%] ml-[-18px] bg-gray-100' />
           <Image src="/assets/user.png" height={200} width={200} alt="" className='h-8 w-8 rounded-[50%] ml-[-18px] bg-gray-100'/> 
           <div className='text-sm'> +<span className='font-bold'>{count}</span> others donations</div>
        </div>
    </div>
  )
}

export default DonorsCount