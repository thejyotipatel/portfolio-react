import React from 'react'
import EmailBox from '../components/EmailBox'

const Contact = () => {
  return (
    <div id='contact' className='my-8 mt-16'>
      <p className=' lowercase flex justify-start items-center font-medium text-main-color-2 mb-6 '>
        contact me
        <span className=' ml-2 font-normal text-3xl material-icons '>
          trending_flat
        </span>
      </p>

      {/* <br /> */}
      {/* Say Hi! or contact me on social media. */}
      {/* <EmailBox /> */}
      <div className='my-8 py-8 mx-auto max-w-[500px] '>
        <p className='font-normal text-center  text-[26px] line-heights-[1.5] text-gray-900  pt-8 '>
          LET'S GET IN TOUCH
        </p>
        <div className='text-center mb-2'>
          <a
            href='mailto:jyotip99755@gmail.com'
            className='text-main-color underline font-medium mx-2 my-4 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            jyotip99755@gmail.com
          </a>
        </div>

        {/* <h1 className='font-normal my-4 text-center text-[26px]'>Find me on</h1> */}
        <div className='text-center mb-2'>
          <a
            className='text-main-color underline font-medium hover:no-underline mx-2'
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
        </div>
      </div>
    </div>
  )
}

export default Contact
