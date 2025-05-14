import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
      <div>
    <h1 className='p-2 bg-pink-300 rounded text-center font-bold'>  KING CHUKS GROUP OF SCHOOLS</h1>

    <div className='bg-pink-200 logdiv'>
      <Image 
      src="/images/logo.jpg"
      alt='Logo Image'
      width={100}
      height={100}
      priority
      className='m-auto rounded-full md:w-[150px]'
      />
    </div>
    <Image 
    src="/images/kcsP2.jpeg"
    height={400}
    width={1000}
    priority
    alt='heroPix'
    className='object-cover mb-3 bg-black w-[100%] h-[50%]'

    
    />


        </div>
  )
}

export default Home