import { IProposalData } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, {FC} from 'react'
import DonorsCount from './DonorsCount'


const ProposalCard:FC<IProposalData> = ({ data }) => {
  return (
    <div className='w-11/12 sm:w-8/12 md:w-11/12 lg:w-8/12 h-[16rem] mb-20'>
      <Link href={{ pathname:`/${data.id}`, query: { id : data.id } }}>
      <div className='flex flex-col md:flex-row items-center rounded-xl bg-gray-100 shadow-2xl px-2'>
        <Image
          height={200} width={200} 
          src="https://i0.wp.com/ketto.blog/wp-content/uploads/2020/10/shutterstock_1735703225-e1603424756464.jpg?fit=547%2C292&ssl=1" 
          alt="" 
          className=' w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-[50%] md:h-[270px] md:w-[270px] md:rounded-lg my-4 object-cover'
        />
        <div className='h-full w-full text-center p-2 sm:p-4'>
            <h3 className='font-mono font-bold text-lg sm:text-2xl mb-4'>{data.title}</h3>
            <p className='ml-8 text-left text-sm md:text-lg text-gray-800 h-[4rem] md:h-[7.5rem] line-clamp-3 md:line-clamp-5'>
               {data.explanation}
            </p>
            <div className='h-10 flex flex-col items-center justify-center my-4'>
              <progress className='w-2/4 h-[1rem]' value={data.raisedAmount} max={data.budgetAmount}/>
              <div className='font-semibold flex mt-2 text-sm'>
                <div className='flex items-center'>
                  {data.raisedAmount} <Image height={20} width={20} src="/assets/eth-logo.png" className='h-3' alt="" />
                </div>
                 / 
                <div className='flex items-center'>
                  {data.budgetAmount} <Image height={20} width={20} src="/assets/eth-logo.png" className='h-3' alt="" />
                </div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between pl-8'>
                <DonorsCount count ={data.donorsCount}/>
                <button className=' w-[80px] mt-4 border-b-2 md:border-b-0 border-slate-300 md:mt-0 pb-2 hover:border-b-2'>Read more</button>
            </div>
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default ProposalCard