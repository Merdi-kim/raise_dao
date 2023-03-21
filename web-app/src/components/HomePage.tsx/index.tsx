import React from 'react'
import DonationCard from './DonationCard'

function HomePage() {
  return (
    <div>
      <div className='h-20 w-full flex sticky top-0 items-center justify-center bg-gray-100'>
        <h2 className='font-bold'>Raise</h2>
      </div>
      <div className='h-20 w-full flex items-center justify-center'>
        <div className='h-12 w-2/4 flex items-center justify-center rounded-xl px-4 bg-slate-200'>
          <input type="text" className='flex flex-1 h-8 bg-transparent outline-none' placeholder='e.g: Helping orphan kids...'/>
          <div className='h-10 w-10 ml-2 p-2 rounded-[50%] bg-slate-300'>
            <img src="/assets/search.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
      </div>
    </div>
  )
}

export default HomePage