import React from 'react'

const ExplanationCard = () => {
  return (
    <div className='w-[400px] h-full rounded-2xl bg-gray-900 text-white'>
        <div className='w-[400px] h-[100px] flex justify-center items-center'>
            <img src="" alt="" className='h-20 w-20 rounded-full overflow-hidden bg-red-300' />
        </div>
        <div className='p-4'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nulla voluptatibus suscipit dolore soluta
            odit labore delectus aliquid consequuntur omnis ad, reprehenderit sequi repellendus, eos iure voluptatum 
            eum natus sapiente?</p>
        </div>
    </div>
  )
}

export default ExplanationCard