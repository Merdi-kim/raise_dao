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
    <div className='w-8/12 h-[16rem] my-4'>
      <Link href={{ pathname:`/${data.title}`, query: { id : data.title } }}>
      <div className='flex items-center rounded-xl bg-gray-200 px-2'>
        <img 
          src="https://www.shutterstock.com/image-photo/top-view-diverse-young-volunteers-260nw-1821196490.jpg" 
          alt="" 
          className='h-[240px] w-[270px] object-cover'
        />
        <div className='h-full p-4'>
            <h3 className='font-bold text-xl mb-4'>{data.title}</h3>
            <p className='ml-8 font-normal text-normal line-clamp-5'>
               {data.explanation}
            </p>
            <div className='h-12 bg-gray-300 my-4'>
                {/*think about the graph to show payment process */}
            </div>
            <div className='flex justify-between'>
                <DonorsCount/>
                <button>Read more</button>
            </div>
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default DonationCard