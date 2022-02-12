import React from 'react'
import mypic from './undraw_programmer_re_owql.svg'

const Home = () => {
  return (
    <div id='home' className=' m-2 mt-16  sm:grid sm:grid-cols-2 items-top '>
      <div className=''>
        <h4 className='line-heights-[1.25] text-[24px] font-[400]'>
          Hi Hi THERE !
        </h4>
        <h1 className='line-heights-[1.125] text-[36px] font-[400] text-[#00f]'>
          I'M JYOTI PATEL
        </h1>
        <p className=' max-w-[400px] w-full text-slate-900 font-[600] line-heights-[1.5] text-[16px] '>
          I love to make websites. I'm excited to create something great with my
          passion by putting my ideas to practice.
        </p>
        <div className='my-8 flex flex-wrap '>
          <a
            href='#about'
            className='font-[500] line-heights-[1.5] text-[20px] border-2 rounded-lg border-slate-900 p-2 mr-4 
            shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] transition hover:shadow-[0_4px_6px_0_hsla(0,0%,0%,0.2)] my-4 mt-1'
          >
            MORE ABOUT ME
          </a>
          <a
            href='#blog'
            className='font-[500] line-heights-[1.5] text-[20px] bg-[#0000ff] rounded-lg text-[#fff] p-2 
            shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] transition hover:shadow-[0_4px_6px_0_hsla(0,0%,0%,0.2)] my-4 mt-1 '
          >
            MY BLOG
          </a>
        </div>
      </div>
      <div className=' hidden sm:inline-flex  justify-center '>
        <img src={mypic} className=' max-w-[320px] ' alt='my pic' />
      </div>
    </div>
  )
}

export default Home
