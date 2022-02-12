import React, { useState } from 'react'

import MobileMenu from './MobileMenu'
const headrData = [
  {
    id: 1,
    text: 'My Work',
    url: '#mywork',
    icon: <span className='material-icons   '>grid_view</span>,
  },
  {
    id: 2,
    text: 'Contact',
    url: '#contact',
    icon: <span className='material-icons   '>headphones</span>,
  },
  {
    id: 3,
    text: 'Blog',
    url: '#blog',
    icon: <span className='material-icons    '>wysiwyg</span>,
  },
  {
    id: 4,
    text: 'About',
    url: '#about',
    icon: <span className='material-icons    '>person</span>,
  },
]
const Header = () => {
  const [isMenu, setIsMenu] = useState(true)

  return (
    <div className=' flex justify-between items-center mt-4  '>
      <div className='   '>
        <a
          href='/'
          translate='no'
          className=' font-[600] text-[24px] capitalize m-2 text-[#0000ff] '
        >
          Jyoti Patel
        </a>
      </div>
      <div className='hidden sm:flex    '>
        <ul className=' m-4 flex justify-between items-center '>
          {headrData.map((item) => {
            const { id, text, url } = item
            return (
              <li key={id} className='sm:mx-4 font-medium uppercase  '>
                <a
                  href={url}
                  className='text-[#000] text-[16px] hover:text-[#0000ff] transition '
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='m-4 fixed right-0 sm:m-0 z-20 sm:hidden flex outline-none '>
        <button
          onClick={() => setIsMenu(!isMenu)}
          className={`hover:text-[#00f] outline-none p-4 bg-[#00000008]  transition ${
            !isMenu && 'text-[#fff] hover:text-[#fff]'
          } `}
        >
          <i className='material-icons  font-bold text-[36px]  '>
            {isMenu ? 'menu' : 'close'}
          </i>
        </button>
      </div>
      {!isMenu && <MobileMenu headrData={headrData} />}
    </div>
  )
}

export default Header
