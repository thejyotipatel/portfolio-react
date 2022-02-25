import React from 'react'
import mypic from './mypic.jpg'

const Home = () => {
  return (
    <div
      id='home'
      className=' m-2 mt-16  sm:grid sm:grid-cols-2 items-top max-h-[calc(70vh)] '
    >
      <div className='pb-16 mt-[100px] sm:pb-0'>
        <h4 className='line-heights-[1.25] text-[24px] uppercase font-[400]'>
          Hi THERE!, welcome
        </h4>
        <h1 className='line-heights-[1.125] text-[36px] uppercase font-[400] text-main-color'>
          I'M JYOTI PATEL
        </h1>
      </div>
      <div className=' hidden sm:inline-flex  justify-center '>
        <img
          src={mypic}
          alt='my pic'
          className=' mx-auto rounded-[100%] max-w-[300px] m-8 shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] '
        />
      </div>
    </div>
  )
}

export default Home
