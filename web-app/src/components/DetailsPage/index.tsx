import React, { useEffect, useState } from 'react'
import { Web3File, Web3Storage } from 'web3.storage'
import Navbar from '../__modules__/Navbar'

const DetailsPage = ({data}) => {

  const [images, setImages] = useState<Web3File[]>([])

  const storage = new Web3Storage({token:process.env.NEXT_PUBLIC_STORAGE_KEY!})
  
  const retrieveImages = async() => {
    const res = await storage.get('bafybeihcfs7yuari4rintgg2wn4ua2cgusfuretud7idigo3qb3skbl524')
    if (!res?.ok) {
      throw new Error(`failed to get ${data.images} - [${res?.status}] ${res?.statusText}`)
    }
    const files = await res.files()
    setImages(files)
  }

  useEffect(() => {
    retrieveImages()
  }, [])

  return (
    <div>
      <Navbar/>
      <div className='h-full w-full flex justify-center'>
        <div className=' w-7/12 p-4'>
          <h1 className='text-center font-bold text-3xl my-8'>{data.title}</h1>
          <p className='px-8'>
            {data.explanation}
          </p>
          {data.images?.length > 0 && <div className='overflow-scroll flex justify-center py-8'>
            {images.map((el, index) => <img key={index} src={`https://ipfs.io/ipfs/${el.cid}`} alt="" className='flex-none h-[250px] w-[250px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>)}
          </div>}
          <div className='w-full h-36 flex items-center justify-center'>
            <button className='bg-green-600 text-white w-[250px] h-[50px] rounded-lg hover:bg-green-700'>Donate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage