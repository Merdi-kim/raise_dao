import React, { FC, useEffect, useState } from 'react'
import { Web3File, Web3Storage } from 'web3.storage'
import Navbar from '../__modules__/Navbar'
import contractAbi from '@/artifacts/contracts/Raise.sol/Raise.json'
import { useContract, useSigner } from 'wagmi'
import { contractAddress } from '@/utils'
import { ethers } from 'ethers'
import { db } from '@/lib/database'
import Router from 'next/router'
import { IDetailsPage } from '@/interfaces'
import Image from 'next/image'

const DetailsPage= ({data, proposalId}:IDetailsPage) => {

  const [images, setImages] = useState<Web3File[]>([])
  const [amount, setAmount] = useState('0')

  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    address: contractAddress,
    abi: contractAbi.abi,
    signerOrProvider: signer
  })

  const storage = new Web3Storage({token:process.env.NEXT_PUBLIC_STORAGE_KEY!})
  
  const retrieveImages = async(cid:string) => {
    const res = await storage.get(`${cid}`)
    if (!res?.ok) {
      throw new Error(`failed to get ${cid} - [${res?.status}] ${res?.statusText}`)
    }
    const files = await res.files()
    setImages(files)
  }

  useEffect(() => {
    if(data.id !==undefined) {
      retrieveImages(data.images)
    }
  },[data.id, data.images, retrieveImages])

  

  const donate = async() => {
    if(amount <= '0') return window.alert('Cannot donate 0 ETH')
    await contract?.fundProposal(Number(proposalId), {value: ethers.utils.parseEther(`${amount}`)})
    const collectionReference = db.collection("proposal");
    await collectionReference
    .record(data.id)
    .call("updateStatistics", [Number(amount)]);
    Router.push('/home')
  }

  return (
    <div>
      <Navbar/>
      <div className=' bg-[url("https://i0.wp.com/ketto.blog/wp-content/uploads/2020/10/shutterstock_1735703225-e1603424756464.jpg?fit=547%2C292&ssl=1")] bg-cover'>
        <div className='h-full w-full flex justify-center bg-white bg-opacity-80'>
        <div className=' w-11/12 md:w-9/12 lg:w-7/12 p-4 pb-12 bg-white'>
          <h1 className='text-center font-bold text-xl md:text-3xl lg:text-4xl my-8'>{data.title}</h1>
          <p className='px-1 md:px-4 lg:px-8 text-sm md:text-lg'>
            {data.explanation}
          </p>
          {data.images?.length > 0 && <div className='overflow-scroll flex justify-center py-8'>
            {images.map((el, index) => <Image height={200} width={200} key={index} src={`https://ipfs.io/ipfs/${el.cid}`} alt="" className='flex-none h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>)}
          </div>}
          <div className='w-full sm:w-3/4 sm:ml-[12.5%] h-40 pt-2 flex flex-col items-center rounded-lg bg-slate-100'>
            <Image height={200} width={200} src="/assets/arrow-down.svg" className='h-8' alt="" />
            <input 
              type="number" 
              onChange={(e) => setAmount(e.target.value)} 
              className='bg-gray-200 w-[250px] mt-2 mb-4 h-6 rounded-lg outline-none p-4'
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