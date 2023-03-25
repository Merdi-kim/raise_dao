import React from 'react'
import IllustrationCard from './IllustrationCard'

const Illustration = () => {
  return (
    <div className='w-9/12 h-full flex items-center justify-between ml-[12.5%]'>
        <IllustrationCard image={'/'} text={'Your idea'}/>
        <IllustrationCard image={'/'} text={'The platform'}/>
        <IllustrationCard image={'/'} text={'Funding process'}/>
        <IllustrationCard image={'/'} text={'Execution'}/>
    </div>
  )
}

export default Illustration