import { blogData } from '../components/main-blog-data'

const Blog = () => {
  return (
    <>
      <p className=' lowercase flex justify-start items-center mt-[50px] font-medium text-main-color-2 mb-6 '>
        blogs
        <span className=' ml-2 font-normal text-3xl material-icons '>
          trending_flat
        </span>
      </p>

      <div id='blog' className='  grid sm:grid-cols-2 grid-cols-1 sm:m-4'>
        {blogData.map((item) => {
          const { id, title, description, source, tags, readTime } = item
          return (
            <div
              key={id}
              className='m-2 rounded-sm shadow-[0_2px_4px_0_hsla(0,0%,0%,0.2)] hover:shadow-[0_4px_6px_0_hsla(0,0%,0%,0.2)]  transition mb-8 p-4 max-w-[900px]'
            >
              <h1 className='text-[24px] font-normal my-2  line-heights-[1.25]'>
                {title}
              </h1>
              <div className='flex text-gray-500 font-medium my-4 text-[16px] line-heights-[1.5]'>
                <p className='mr-8  '>
                  {tags.map((tag, index) => {
                    return <span key={index}> #{tag}</span>
                  })}
                </p>
                <p className='flex   '>
                  <span className='mr-1 font-normal   material-icons '>
                    import_contacts
                  </span>
                  {readTime}
                </p>
              </div>
              <p className=' text-slate-700 font-medium mb-4 text-[16px] line-heights-[1.5]'>
                {description}
              </p>
              <a
                href={source}
                target='_blank'
                rel='noopener noreferrer'
                className='text-main-color font-medium text-[16px]'
              >
                Read Now
              </a>
            </div>
          )
        })}

        <p className='font-medium max-w-lg text-[16px] line-heights-[1.5]  '>
          Check out my all blogs on
          <a
            className='text-main-color underline font-medium ml-2 hover:no-underline'
            href='https://jyotip.hashnode.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            jyotip.hashnode.dev
          </a>
        </p>
      </div>
    </>
  )
}

export default Blog
