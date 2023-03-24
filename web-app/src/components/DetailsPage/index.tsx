import React, { useEffect, useState } from 'react'
import { Web3File, Web3Storage } from 'web3.storage'
import Navbar from '../__modules__/Navbar'
import contractAbi from '@/artifacts/contracts/Raise.sol/Raise.json'
import { useContract, useSigner } from 'wagmi'
import { contractAddress } from '@/utils'
import { ethers } from 'ethers'
import Router from 'next/router'

const DetailsPage = ({data}) => {

  const [images, setImages] = useState<Web3File[]>([])
  const [amount, setAmount] = useState('0')

  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    address: contractAddress,
    abi: contractAbi.abi,
    signerOrProvider: signer
  })

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

  const donate = async() => {
    if(amount <= '0') return window.alert('Cannot donate 0 ETH')
    await contract?.fundProposal('hfdd', {value: ethers.utils.parseEther(`${amount}`)})
    //update database
    Router.push('/home')
  }

  return (
    <div>
      <Navbar/>
      <div className=' bg-[url("https://i0.wp.com/ketto.blog/wp-content/uploads/2020/10/shutterstock_1735703225-e1603424756464.jpg?fit=547%2C292&ssl=1")] bg-cover'>
        <div className='h-full w-full flex justify-center bg-white bg-opacity-80'>
        <div className=' w-7/12 p-4 pb-12 bg-white'>
          <h1 className='text-center font-bold text-4xl my-8'>{data.title}</h1>
          <p className='px-8'>
            {data.explanation}
          </p>
          {data.images?.length > 0 && <div className='overflow-scroll flex justify-center py-8'>
            {images.map((el, index) => <img key={index} src={`https://ipfs.io/ipfs/${el.cid}`} alt="" className='flex-none h-[200px] w-[200px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>)}
          </div>}
          <div className='w-3/4 ml-[12.5%] h-40 pt-2 flex flex-col items-center rounded-lg bg-slate-100'>
            <img src="assets/arrow-down.svg" className='h-8' alt="" />
            <input 
              type="number" 
              onChange={(e) => setAmount(e.target.value)} 
              className='bg-gray-200 w-[270px] mt-2 mb-4 h-6 rounded-lg outline-none p-4'
              placeholder='Donate ETH - Enter amount...'
            />
            <button onClick={donate} className='bg-green-600 text-white w-[200px] h-[40px] rounded-lg hover:bg-green-700'>Donate</button>
          </div>
        </div>
        </div>
  
      </div>
    </div>
  )
}

export default DetailsPage