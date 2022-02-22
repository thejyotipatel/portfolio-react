import React from 'react'
import mypic from './mypic.jpg'

const Home = () => {
  return (
    <div
      id='home'
      className=' m-2 mt-16  sm:grid sm:grid-cols-2 items-top max-h-[calc(70vh)] '
    >
      <div className='pb-16 sm:pb-0'>
        <h4 className='line-heights-[1.25] text-[24px] uppercase font-[400]'>
          Hi THERE!, welcome
        </h4>
        <h1 className='line-heights-[1.125] text-[36px] uppercase font-[400] text-main-color'>
          I'M JYOTI PATEL
        </h1>
        {/* <p className=' max-w-[400px] w-full text-slate-900 font-[600] line-heights-[1.5] text-[16px] '>
          I'm excited to create something great with my passion by putting my
          ideas to practice.
        </p> */}
        {/* <div className='my-8 flex flex-wrap '>
          <a
            href='#about'
            className='font-[500] line-heights-[1.5] text-[16px] border-2 rounded-lg border-slate-900 px-4 py-2 mr-4 
            shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] transition   my-4 mt-1'
          >
            MORE ABOUT ME
          </a>
          <a
            href='#blog'
            className='font-[500] line-heights-[1.5] px-4 py-2 text-[16px] bg-main-color rounded-lg text-[#fff] p-2 
            shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] transition   my-4 mt-1 '
          >
            MY BLOG
          </a>
        </div> */}
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
