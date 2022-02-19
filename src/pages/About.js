import React from 'react'
import pic from './mypic.jpg'

const About = () => {
  return (
    <div id='about' className='m-2 mt-16 grid '>
      <p className=' lowercase flex justify-start items-center font-medium text-[#b32442] mb-6 '>
        about me
        <span className=' ml-2 font-normal text-3xl material-icons '>
          trending_flat
        </span>
      </p>
      <div className='md:flex'>
        <img
          src={pic}
          alt='my pic'
          className=' mx-auto rounded-[100%] max-w-[300px] m-8 shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] '
        />
        <div className=''>
          <p className='mb-8 mx-4 max-w-lg  text-slate-900 font-[600] line-heights-[1.5] text-[16px]'>
            Hi! My name is Jyoti and i completed my bachelor's degree in
            Information Technology. I like technology, programming, and i write
            blog about programing and Take a look at
            <a
              href='https://hashnode.com/@Jyoti-p'
              target='_blank'
              rel='noopener noreferrer'
              className=' text-main-color ml-2 underline '
            >
              My all blogs
            </a>
            . <br />
            I'm excited to create something great with my passion by putting my
            ideas to practice. I'm open for collaborations. I can made for you
            great outstanding UI applications.
          </p>
          {/* <div className='grid grid-cols-1  '>
            <a
              href='#contact'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] py-2  bg-main-color text-[#fff] rounded-sm  w-fit mx-4'
            >
              Contact Me !
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] py-2 bg-[#b32442] text-[#fff] rounded-sm w-fit mt-4 mx-4'
            >
              DOWNLOAD MY CV
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About
