import Link from 'next/link'
import React, {FC} from 'react'
import DonorsCount from './DonorsCount'

interface DonationData {
  id: string; 
  //publicKey: PublicKey;
  title: string;
  explanation: string;
  budgetAmount: number;
  images: string[];
  donorsCount: number;
  raisedAmount: number;
}

const DonationCard:FC<DonationData> = ({ data }) => {
  return (
    <div className='w-8/12 h-[16rem] mb-32'>
      <Link href={{ pathname:`/${data.title}`, query: { id : data.title } }}>
      <div className='flex items-center rounded-xl bg-gray-100 shadow-2xl px-2'>
        <img 
          src="https://www.shutterstock.com/image-photo/top-view-diverse-young-volunteers-260nw-1821196490.jpg" 
          alt="" 
          className='h-[270px] w-[270px] rounded-lg my-4 object-cover'
        />
        <div className='h-full w-full text-center p-4'>
            <h3 className='font-bold text-xl mb-4'>{data.title}</h3>
            <p className='ml-8 font-normal text-left text-normal text-gray-800 h-[7.5rem] line-clamp-5'>
               {data.explanation}
            </p>
            <div className='h-10 flex flex-col items-center justify-center my-4'>
              <progress className='w-2/4 h-[1rem]' value="75" max="100"/>
              <div className='font-semibold flex mt-2 text-sm'>
                <div className='flex items-center'>
                  3456 <img src="/assets/eth-logo.png" className='h-3' alt="" />
                </div>
                 / 
                <div className='flex items-center'>
                  34560 <img src="/assets/eth-logo.png" className='h-3' alt="" />
                </div>
              </div>
            </div>
            <div className='flex justify-between pl-8'>
                <DonorsCount/>
                <button className='pb-2 border-gray-400 hover:border-b-2'>Read more</button>
            </div>
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default DonationCard