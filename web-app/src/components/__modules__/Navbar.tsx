import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-full flex sticky top-0 items-center justify-center bg-gray-100'>
      <Link href={'/home'}>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl mt-12'>Raise</h2>
          <Image height={200} width={200} src="/assets/signature.png" alt="" className='h-16 w-44 translate-y-[-10px]' />
        </div>
      </Link>
    </div>
  )
}

export default Navbar