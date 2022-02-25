import React from 'react'

const EmailBox = () => {
  return (
    <div className='bg-main-color/10  max-w-full'>
      <p className='font-normal text-center  text-[26px] line-heights-[1.5] text-gray-900  pt-8 '>
        LET'S GET IN TOUCH
      </p>
      <form className='   mx-auto sm:max-w-[500px]   w-full flex-col rounded-sm p-4'>
        <div className='flex flex-col sm:flex-row'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='rounded-sm bg-transparent outline-none w-full pb-0  py-8   font-medium border-b-gray-800 border-b-2 hover:border-b-main-color transition sm:mr-8 '
          />

          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='rounded-sm bg-transparent outline-none w-full pb-0  py-8   font-medium border-b-gray-800 border-b-2 hover:border-b-main-color transition  '
          />
        </div>

        <input
          type='email'
          name='email'
          placeholder='example@gmail.com'
          className='rounded-sm bg-transparent outline-none w-full pb-0  py-8   font-medium border-b-gray-800 border-b-2 hover:border-b-main-color transition  '
        />
        {/* text box */}

        <textarea
          name='message'
          placeholder='Write you message here'
          cols='100'
          rows='5'
          className='rounded-sm bg-transparent outline-none w-full pb-0  py-8 max-w-[500px] font-medium border-b-gray-800 border-b-2 hover:border-b-main-color transition  '
        ></textarea>
        <br />
        <button
          type='submit'
          className='px-5 py-2 sm:w-fit  w-full my-8 text-gray-100  capitalize font-medium text-[16px]    rounded-sm bg-main-color hover:bg-main-color-2  transition'
        >
          send
        </button>
      </form>
    </div>
  )
}

export default EmailBox
