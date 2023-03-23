import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-full flex sticky top-0 items-center justify-center bg-gray-100'>
      <Link href={'/home'}><h2 className='font-bold'>Raise</h2></Link>
    </div>
  )
}

export default Navbar