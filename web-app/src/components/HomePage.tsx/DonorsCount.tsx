import React from 'react'

const DonorsCount = () => {
  return (
    <div>
        <div className='flex items-center'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbCP8d5uk42S3HJTpsUeexuliJrcepqtDnN4DEtOkM6tlnbKLMqHbSSuZte0E9bjBNw4&usqp=CAU" alt="" className='h-8 w-8 rounded-[50%] bg-gray-400' />
           <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='h-8 w-8 rounded-[50%] ml-[-18px] bg-gray-400' />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dIm2pJw9ss3AnQ9kFSDYjltejWW_Hhpajmhm9EC8yJy4xETBWCvz9F39cl9GSyBIdm0&usqp=CAU" alt="" className='h-8 w-8 rounded-[50%] ml-[-18px] bg-gray-400'/> 
           <div className='text-sm'> +<span className='font-bold'>243</span> others donations</div>
        </div>
    </div>
  )
}

export default DonorsCount