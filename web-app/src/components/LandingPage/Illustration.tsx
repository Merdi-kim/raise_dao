import React from 'react'
import IllustrationCard from './IllustrationCard'

const Illustration = () => {
  return (
    <div className='w-9/12 h-full flex items-center justify-between ml-[12.5%]'>
        <IllustrationCard image={'assets/idea.png'} text={'Your idea'}/>
        <IllustrationCard image={'assets/box.svg'} text={'The platform'}/>
        <IllustrationCard image={'assets/money.svg'} text={'Funding process'}/>
        <IllustrationCard image={'assets/execution.svg'} text={'Execution'}/>
    </div>
  )
}

export default Illustration