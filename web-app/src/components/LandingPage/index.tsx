import Image from 'next/image'
import React from 'react'
import ActionButton from './ActionButton'
import ExplanationCard from './ExplanationCard'
import Illustration from './Illustration'

const LandingPage = () => {

  const explanations = [
    {
      image:'assets/illustration1.svg',
      text:'Bring your idea that will impact the world and submit it for the community to fund your project'
    },
    {
      image:'assets/illustration2.svg',
      text:'Participate in projects you love and fund them in order to help bring them to life'
    },
    {
      image:'assets/illustration3.svg',
      text:'Help us keep the community funds safe and the platform risk-free by flagging suspicious projects'
    }
  ]

  return (
    <div className='h-full'>
        <div className='w-full h-[40vh] md:h-[80vh] bg-hero-wave bg-no-repeat'>
          <div className='h-full w-full bg-white bg-opacity-80 '>
            <div className='h-[30%] flex items-center justify-center'>
              <h2 
                className='font-bold text-center text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-12'
              > 
                Impact the world today
              </h2>
            </div>
            <div className='h-[50%]'>
              <Illustration/>
            </div>
            <div className='h-[20%]'>
              <ActionButton/>
            </div>
          </div>
        </div>
        <div>
            <div className='flex flex-wrap justify-center p-8'>
              {explanations.map(({image,text}, index) =><ExplanationCard key={index} text={text} image={image}/>)}
            </div>
            <div className='flex flex-col mb-8 justify-center'>
                <div className='text-center  md:pt-2 lg:pt-8'>
                    <p className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-0'>Let us make it happen...</p>
                </div>
                <ActionButton/>
            </div>
            <footer className='h-[15vh] flex justify-between items-center px-8'>
              <div className='h-[110px] w-[110px] rounded-[50%] flex flex-col items-center justify-center'>
                <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl mt-12'>Raise</h2>
                <Image height={200} width={200}  src="/assets/signature.png" alt="" className='h-16 w-44 translate-y-[-10px]' />
              </div>
              <ul>
                <li>About us</li>
                <li>Contacts us</li>
                <li>FAQ</li>
                <li>Careers</li>
              </ul>
            </footer>
        </div>
    </div>
  )
}

export default LandingPage
