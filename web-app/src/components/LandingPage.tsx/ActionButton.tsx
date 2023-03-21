import Router from 'next/router'
import React from 'react'

const ActionButton = () => {
    const goToHome = () => {
        Router.push('/home')
    }
  return (
    <div onClick={goToHome} className='flex items-center justify-center h-32 w-full'>
        <div className='w-[190px] h-10 rounded-lg flex items-center justify-center cursor-pointer bg-blue-500'>Start here</div>
    </div>
    
  )
}

export default ActionButton