import React from 'react'

const EmailBox = () => {
  return (
    <div className='bg-main-color/10  max-w-full'>
      <p className='font-normal text-center  text-[24px] line-heights-[1.5] text-gray-700  pt-8 '>
        LET'S GET IN TOUCH
      </p>
      <form className='   mx-auto sm:max-w-[500px] w-full flex-col rounded-sm p-4'>
        <div className='flex flex-col sm:flex-row m-2'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='rounded-sm  bg-transparent outline-none max-w-[400px] py-2 font-medium border-b-gray-800 border-b-2 hover:border-b-main-color transition sm:m-5 my-2 px-2 pb-0'
          />

          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='rounded-sm outline-none  max-w-[400px] py-2 font-medium  bg-transparent border-b-gray-800 border-b-2 hover:border-b-main-color transition sm:m-5 my-2  pb-0'
          />
        </div>
        <div className='flex flex-col sm:flex-row m-2'>
          <input
            type='email'
            name='email'
            placeholder='example@gmail.com'
            className='rounded-sm max-w-[400px] outline-none  bg-transparent py-2 font-medium border-b-gray-800 border-b-2 hover:border-b-main-color transition sm:m-5 my-2 pb-0'
          />
        </div>
        {/* text box */}
        <div className='flex flex-col sm:flex-row '>
          <textarea
            name='message'
            placeholder='Write you message here'
            cols='100'
            rows='4'
            className='rounded-sm  outline-none  py-2 font-medium border-b-gray-800 border-b-2 mx-2 bg-transparent hover:border-b-main-color transition sm:m-5 w-full  pb-0'
          ></textarea>
        </div>

        <button
          type='submit'
          className='px-4 py-1 sm:w-fit  w-full sm:m-5 my-8 ml-2 text-gray-100  capitalize font-medium text-[16px]  max-w-[400px] rounded-sm bg-main-color hover:bg-main-color-2  transition'
        >
          send
        </button>
      </form>
    </div>
  )
}

export default EmailBox
