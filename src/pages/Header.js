import { useContextGlobal } from '../context/appContext'
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
  const { menu, menuState } = useContextGlobal()

  return (
    <div className=' flex justify-between items-center mt-4  '>
      <div className='   '>
        <a
          href='https://thejyotipatel.github.io/portfolio-react/'
          translate='no'
          className=' font-[600] text-[24px] capitalize m-2 text-main-color '
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
                  className='text-[#000] text-[16px] hover:text-main-color transition '
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
          onClick={menuState}
          className={`hover:text-main-color outline-none p-1 inline-flex rounded-sm bg-main-color/10  transition ${
            menu && 'text-[#fff] hover:text-main-color-100 bg-transparent '
          } `}
        >
          <i className='material-icons  font-bold text-[36px]     '>
            {menu ? 'close' : 'menu'}
          </i>
        </button>
      </div>
      {menu && <MobileMenu headrData={headrData} />}
    </div>
  )
}

export default Header
