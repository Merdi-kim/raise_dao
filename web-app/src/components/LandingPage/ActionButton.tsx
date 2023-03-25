import Router from 'next/router'
import React from 'react'

const ActionButton = () => {
    const goToHome = () => {
        Router.push('/home')
    }
  return (
    <div className='flex items-center justify-center h-32 w-full'>
        <button onClick={goToHome} className='w-[190px] h-10 rounded-lg flex items-center justify-center cursor-pointer text-white bg-purple-500 hover:bg-purple-700 hover:rotate-1'>Start here</button>
    </div>
    
  )
}

export default ActionButton