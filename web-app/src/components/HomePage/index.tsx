import { db } from '@/lib/database'
import { CollectionRecordResponse } from '@polybase/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../__modules__/Navbar'
import DonationCard from './DonationCard'

function HomePage() {

  const [data, setData] = useState<CollectionRecordResponse<any>[]>([])

  const fetchData = async() => {
    const collectionReference = db.collection("case")
    try{
      const records = await collectionReference.get()
      const { data } = records
      setData(data)
      console.log(data)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Navbar/>
      <div className='h-20 w-full flex items-center justify-center'>
        <div className='h-12 w-2/4 flex items-center justify-center rounded-xl px-4 bg-slate-200'>
          <input type="text" className='flex flex-1 h-8 bg-transparent outline-none' placeholder='e.g: Helping orphan kids...'/>
          <div className='h-10 w-10 ml-2 p-2 rounded-[50%] bg-slate-300'>
            <img src="/assets/search.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        { data.map((el, index) =><DonationCard key={index} data={el.data}/>)}
      </div>
      <Link href={'/new-proposal'} className='h-16 w-16 bg-gray-700 fixed top-[80vh] right-20 rounded-[50%]'></Link>
    </div>
  )
}

export default HomePage