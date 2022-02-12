import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import MyWork from './pages/MyWork'

const App = () => {
  return (
    <div className='border-t-[6px] border-t-[#0000ff] '>
      <div className='  max-w-6xl bg-white text-slate-900  sm:mx-auto '>
        <Header />
        <Home />
        <MyWork />
      </div>
    </div>
  )
}

export default App
