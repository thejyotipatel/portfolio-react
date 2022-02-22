import React from 'react'
import project from '../components/main-projects-data'
import ProjectLists from '../components/ProjectLists'

const MyWork = () => {
  return (
    <div id='mywork' className='m-2 mt-16 '>
      <p className=' lowercase flex justify-start items-center font-medium text-main-color-2 mb-6 '>
        my work
        <span className=' ml-2 font-normal text-3xl material-icons '>
          trending_flat
        </span>
      </p>
      <div className='flex justify-start items-center max-w-2lg sm:m-4'>
        <p className='font-medium max-w-lg text-[16px] line-heights-[1.5]  '>
          These are some of my project that i have worked on and check out my
          all projects on
          <a
            className='text-main-color underline font-medium ml-2 hover:no-underline'
            href='https://github.com/jyotip101/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GITHUB
          </a>
        </p>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 justify-betbeen '>
        {project.map((item) => {
          return <ProjectLists key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default MyWork
