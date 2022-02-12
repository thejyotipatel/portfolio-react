import React from 'react'

const ProjectLists = ({ item }) => {
  const { id, imgUrl, sourceCode, demo, title, description, language } = item
  return (
    <div className='max-w-2xl m-4 sm:m-4 mt-8 rounded-sm shadow-[0_2px_6px_0_hsla(0,0%,0%,0.2)] transition '>
      <div className=' relative max-w-[1000px]  '>
        <img
          src={imgUrl}
          className='w-full rounded-sm block h-auto '
          alt={title}
        />
        <p className=' text-slate-500 mx-4 '>
          {language.map((lag, index) => {
            return (
              <span key={index} className='mr-4 font-medium '>
                #{lag}
              </span>
            )
          })}
        </p>
        <p className=' font-medium max-w-lg mx-4 text-[24px] line-heights-[1.5]  '>
          {title}
        </p>

        <p className='my-2 text-slate-500 mx-4  max-w-lg text-[16px] line-heights-[1.5]  '>
          {description}
        </p>
        <div className='transition-all mx-4 my-4 '>
          <a
            href={demo}
            className='px-4 py-2 my-2 bg-[#00f] text-[#fff] rounded-sm '
            target='_blank'
            rel='noopener noreferrer'
          >
            demo
          </a>
          <a
            href={sourceCode}
            className='px-4 py-2 my-2 ml-2 text-[#00f]   '
            target='_blank'
            rel='noopener noreferrer'
          >
            source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectLists
