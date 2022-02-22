import React from 'react'
import pic from './mypic.jpg'

const About = () => {
  return (
    <div id='about' className='m-2 mt-16 grid '>
      <p className=' lowercase flex justify-start items-center font-medium text-main-color-2 mb-6 '>
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
          <p className='mb-8 mx-4 max-w-lg  text-slate-700 font-[600] line-heights-[1.5] text-[16px]'>
            Hi! My name is{' '}
            <span className='font-medium text-[18px] text-gray-800'>
              Jyoti Patel
            </span>{' '}
            and know programming languages
            <span className='mx-2 text-main-color font-medium'>
              HTML, CSS, SCSS, JavaScript, Reactjs, Taiwaind CSS,
            </span>
            and continue to expand what I learn. I'm excited to create something
            great with my passion by putting my ideas to practice. I'm open for
            collaborations.
          </p>
          <a
            href='#contact'
            className='m-4 p-2 bg-main-color-2 text-white font-medium capitalize rounded-sm  '
          >
            contact me
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
