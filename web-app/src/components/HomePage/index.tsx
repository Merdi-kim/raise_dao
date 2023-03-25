import { db } from '@/lib/database'
import { CollectionRecordResponse } from '@polybase/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../__modules__/Navbar'
import ProposalCard from './ProposalCard'

function HomePage() {

  const [data, setData] = useState<CollectionRecordResponse<any>[]>([])

  const fetchData = async() => {
    const collectionReference = db.collection("proposal")
    try{
      const records = await collectionReference.get()
      const { data } = records
      setData(data)
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
        <div className='h-12 w-[550px] flex items-center justify-center rounded-xl px-4 bg-slate-100 border-2 border-slate-200'>
          <input type="text" className='flex flex-1 h-8 bg-transparent outline-none' placeholder='e.g: Helping orphan kids...'/>
          <div className='h-10 w-10 ml-2 p-2 rounded-[50%] bg-slate-200'>
            <img src="/assets/search.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center pt-4 md:pt-12'>
        { data.map((el, index) =><ProposalCard key={index} data={el.data}/>)}
      </div>
      <Link href={'/new-proposal'} className='fixed top-[85vh] md:top-[80vh] right-4 lg:right-20 rounded-[50%] overflow-hidden bg-gray-200 hover:bg-gray-300'> 
        <img src="/assets/add.png" className='h-16 w-16' alt="add icon" />
      </Link>
    </div>
  )
}

export default HomePage