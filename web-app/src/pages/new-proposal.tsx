import Navbar from '@/components/__modules__/Navbar'
import { db } from '@/lib/database'
import Router from 'next/router'
import { CIDString, Web3Storage } from 'web3.storage'
import { ChangeEvent, FormEvent, useState } from 'react'
import contractAbi from '@/artifacts/contracts/Raise.sol/Raise.json'
import { useContract, useSigner, useAccount } from 'wagmi'
import { contractAddress } from '@/utils'
import { ethers } from 'ethers'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import stringHash from '@sindresorhus/string-hash';
import Image from 'next/image'

interface donationDataTypes {
  title:string, 
  explanation:string, 
  budgetAmount:number,
  images:FileList | null,
  imagesPreview:string[]
}

const NewProposal = () => {

  const [donationData, setDonationData] = useState<donationDataTypes>({
    title:'',
    explanation:'',
    budgetAmount:0,
    images: null,
    imagesPreview:[]
  })

  const { data: signer, isError, isLoading } = useSigner()
  const { address, isConnecting, isDisconnected } = useAccount()

  const contract = useContract({
    address: contractAddress,
    abi: contractAbi.abi,
    signerOrProvider: signer
  })

  const storage = new Web3Storage({token:process.env.NEXT_PUBLIC_STORAGE_KEY!})

  const selectFiles = (e:ChangeEvent<HTMLInputElement> ) => {
    const {files} = e.target 
    const filesArray = Array.from(files!)
    const filesPreviewArray = filesArray.map(el => URL.createObjectURL(el))
    setDonationData({...donationData, imagesPreview: filesPreviewArray, images:files})
  }

  const publishData = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = stringHash(donationData.title)
    if(!donationData.title || donationData.explanation.length < 550  || !donationData.budgetAmount) return window.alert('Missing data')
    let cid:CIDString | undefined
    if(donationData.images) {
      cid = await storage.put(donationData.images)
    }
    await contract?.createProposal(id, ethers.utils.parseEther(`${donationData.budgetAmount}`))
    const collectionReference = db.collection("Proposal");
    await collectionReference.create([
      `${id}`,
      donationData.title,
      donationData.explanation,
      donationData.budgetAmount,
      cid!
    ]);
    Router.push('/home')
  }

  return (
    <div>
      <Navbar/>
      <div className='w-full min-h-screen flex flex-col items-center pb-12'>
        <form onSubmit={publishData} className='w-11/12 sm:w-9/12 lg:w-7/12 mt-10 pt-4 flex flex-col items-center rounded-xl bg-slate-200 border-2 border-slate-300'>
          <input type="text" onChange={(e) => setDonationData({...donationData, title:e.target.value})} placeholder='Your title goes here...' className='outline-none w-11/12 sm:w-5/6 my-4 h-8 rounded-lg p-4'/>
          <textarea 
            placeholder='Describe the problem you are trying to solve and the strategy here' 
            className='outline-none w-11/12 sm:w-5/6 my-4 rounded-lg p-4' 
            cols={30} rows={8}
            onChange={(e) => setDonationData({...donationData, explanation:e.target.value})}
          />
          <input type="file" accept='images/*' multiple onChange={selectFiles} hidden id='fileUpload'/>
          <span>Click here to add images</span>
          <label htmlFor="fileUpload" className='cursor-pointer h-14 w-14 flex items-center justify-center rounded-[50%]'>
            <Image height={200} width={200} src="/assets/add.png" alt="" className='h-full w-full' />
          </label>
          {donationData.imagesPreview.length > 0 && <div className='w-5/6 flex justify-center overflow-scroll py-8'>
            {donationData.imagesPreview.map((el, index) => <Image height={200} width={200}  key={index} src={el} alt='' className='flex-none h-[80px] w-[80px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>)}
          </div>}
          <input 
            type="number" 
            placeholder='Your budget amount goes here...' 
            onChange={(e) => setDonationData({...donationData, budgetAmount:Number(e.target.value)})} 
            className='outline-none w-5/6 h-8 mt-2 rounded-lg p-4'
          />
          <div className='w-5/6 h-24 flex items-center justify-center'>
            { address !== undefined ? <button className='h-8 w-[150px] rounded-lg text-white bg-blue-500 hover:bg-blue-600'>Publish</button> : <ConnectButton/>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProposal