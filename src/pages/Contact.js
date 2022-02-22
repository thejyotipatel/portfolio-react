import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='my-8 mt-16'>
      <p className=' lowercase flex justify-start items-center font-medium text-main-color-2 mb-6 '>
        contact me
        <span className=' ml-2 font-normal text-3xl material-icons '>
          trending_flat
        </span>
      </p>

      <p className='font-normal text-center  text-[24px] line-heights-[1.5] text-gray-700   '>
        LET'S GET IN TOUCH
      </p>
      {/* <br /> */}
      {/* Say Hi! or contact me on social media. */}
      <div className='my-8  '>
        <p className='text-center mb-2'>
          <a
            className='text-main-color underline font-medium ml-2 hover:no-underline'
            href='https://github.com/thejyotipatel'
            target='_blank'
            rel='noopener noreferrer'
          >
            GITHUB
          </a>
          <a
            className='text-main-color underline font-medium mx-2 hover:no-underline'
            href='https://twitter.com/thejyotipatel'
            target='_blank'
            rel='noopener noreferrer'
          >
            TWITTER
          </a>
        </p>
        <p className='text-main-color   font-medium ml-2 text-center '>
          jyotip99755@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Contact
