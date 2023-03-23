import React from 'react'
import Navbar from '../__modules__/Navbar'

const DetailsPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-full w-full flex justify-center'>
        <div className=' w-7/12 p-4'>
          <h1 className='text-center font-bold text-3xl my-8'>Helping to plant 200 trees to avoid erosion in rural areas</h1>
          <p className='px-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati minima autem non et rem perferendis in!
            Aliquam sit fugiat eius iusto ipsa tempore, nihil, a quam sunt harum, natus iste?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, fuga doloribus quam beatae at, 
            temporibus nam libero ipsam eius aliquid voluptatum dolores? Nostrum enim assumenda autem, debitis nisi 
            dolore laboriosam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam cumque tempora ducimus
            dolorem in illum eos, amet saepe odio culpa nobis magnam? Neque eveniet fugit maiores porro reiciendis 
            {/*atque delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit, eaque beatae ullam 
            debitis cum ducimus nesciunt voluptatibus? Dignissimos saepe minus iure ipsa illo provident id suscipit 
            eum natus aliquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam libero eius, alias 
            quasi in fuga itaque sunt ducimus omnis non totam molestias blanditiis, repellat quod dolore quo officia 
            illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi vel alias ab 
            explicabo repudiandae quisquam dolores, quasi impedit ipsum sunt quas, cumque odio laboriosam sit? 
            Molestias dolore pariatur sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorum. 
            Nobis ea iusto quibusdam libero, sunt ipsam odio eius rerum ratione sapiente ex explicabo amet perferendis 
  facere aliquam aliquid dignissimos!*/}
          </p>
          <div className='overflow-scroll flex py-8'>
            <img src="" alt="" className='flex-none h-[250px] w-[250px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>
            <img src="" alt="" className='flex-none h-[250px] w-[250px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>
            <img src="" alt="" className='flex-none h-[250px] w-[250px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>
            <img src="" alt="" className='flex-none h-[250px] w-[250px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>
            <img src="" alt="" className='flex-none h-[250px] w-[250px] rounded-lg overflow-hidden mx-4 bg-gray-300'/>
          </div>
          <div className='w-full h-36 flex items-center justify-center'>
            <button className='bg-green-600 text-white w-[250px] h-[50px] rounded-lg hover:bg-green-700'>Donate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage