import { IDonorsCount } from '@/interfaces'
import React, { FC } from 'react'

const DonorsCount:FC<IDonorsCount> = ({count}) => {
  return (
    <div>
        <div className='flex items-center'>
           <img src="/assets/user.png" alt="" className='h-8 w-8 rounded-[50%]' />
           <img src="/assets/user.png" alt="" className='h-8 w-8 rounded-[50%] ml-[-18px] bg-gray-100' />
           <img src="/assets/user.png" alt="" className='h-8 w-8 rounded-[50%] ml-[-18px] bg-gray-100'/> 
           <div className='text-sm'> +<span className='font-bold'>{count}</span> others donations</div>
        </div>
    </div>
  )
}

export default DonorsCount