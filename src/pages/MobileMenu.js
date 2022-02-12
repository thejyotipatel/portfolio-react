import React from 'react'
const MobileMenu = ({ headrData }) => {
  return (
    <div className=' z-10 fixed bg-[#00f] top-0 w-full h-full  '>
      <ul className='   mt-[20%] flex flex-col justify-start w-fit h-full mx-auto item-center '>
        <li className=' my-4 font-medium uppercase   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
          <a href='/' className='text-[#fff] text-[1.3rem]    '>
            <span class='material-icons text-slate-200 inline-flex pr-2 '>
              home
            </span>
            home
          </a>
        </li>
        {headrData.map((item) => {
          const { id, text, url, icon } = item
          return (
            <li
              key={id}
              className=' my-4 font-medium uppercase   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '
            >
              <a href={url} className='text-[#fff] text-[1.3rem]    '>
                <i className=' text-slate-200 inline-flex pr-2'>{icon}</i>
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileMenu
