import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import MyWork from './pages/MyWork'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './pages/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='border-t-[6px] border-main-color '>
      <div className=' max-w-5xl bg-white text-slate-900 m-4 mb-0 sm:m-0 sm:mx-auto '>
        <Header />
        <Home />
        <MyWork />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
