import React from 'react'

const Footer = () => {
  return (
    <div className='m-4 mt-16   '>
      <button
        className='m-4 mb-1 p-2 font-medium w-fit text-gray-50 rounded-sm bg-main-color-2'
        onClick={() => window.scrollTo(0, 0)}
      >
        Top
      </button>
      <p className='text-center text-gray-500'> ©2022 Jyoti Patel.</p>
    </div>
  )
}

export default Footer
