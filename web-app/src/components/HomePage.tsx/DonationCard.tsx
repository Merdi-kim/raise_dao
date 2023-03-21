import Link from 'next/link'
import React from 'react'
import DonorsCount from './DonorsCount'

const DonationCard = () => {
  return (
    <div className='w-8/12 h-[16rem] my-4'>
      <Link href={'/hgf'}>
      <div className='flex items-center rounded-xl bg-gray-200 px-2'>
        <img 
          src="https://www.shutterstock.com/image-photo/top-view-diverse-young-volunteers-260nw-1821196490.jpg" 
          alt="" 
          className='h-[240px] w-[270px] object-cover'
        />
        <div className='h-full p-4'>
            <h3 className='font-bold text-xl mb-4'>Helping to plant 200 trees to avoid erosion in rural areas</h3>
            <p className='ml-8 font-normal text-normal'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sequi exercitationem eveniet 
               perspiciatis distinctio vero? Adipisci asperiores hic, ex iure recusandae, minima, ea minus ipsa 
               ullam illo architecto. Eos ?
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