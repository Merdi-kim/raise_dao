import React from 'react'
import ActionButton from './ActionButton'
import ExplanationCard from './ExplanationCard'

const LandingPage = () => {
  return (
    <div className='h-full'>
        <div className='w-full h-[100vh] bg-hero-wave bg-no-repeat'>
          <div className='h-[80%] w-full'>
            <div className='pt-[2rem]'>
              <svg viewBox="0 0 500 500">
                <path id="curve" fill='transparent' d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text >
                  <textPath xlinkHref="#curve" className='text-[2.5rem] font-bold'>
                    Impact the world today
                  </textPath>
                </text>
              </svg>
              <img src="/assets/tree.png" alt="" className='absolute w-[80vw] h-[50vh] top-[14rem] left-[11rem]'/>
              
            </div>
          </div>
          <ActionButton/>
        </div>
        <div className='h-[100vh]'>
            <div className='h-[45vh] flex justify-between p-8'>
              <ExplanationCard/>
              <ExplanationCard/>
              <ExplanationCard/>
            </div>
            <div className='h-[40vh]'>
                <div className='text-center pt-8'>
                    <p className='text-9xl'>Let's make it happen...</p>
                </div>
                <ActionButton/>
            </div>
            <footer className='h-[15vh] flex justify-between items-center px-8'>
                <img src="" alt="" className='h-[110px] w-[110px] rounded-[50%] bg-black' />
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