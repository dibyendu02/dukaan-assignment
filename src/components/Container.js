import React from 'react'
import Navbar from './Navbar'
import Overview from './Overview'

const Container = () => {
  return (
    <div className='grow bg-[#fafafaa5] min-h-screen'>
        <Navbar/>
        <Overview/>
    </div>
  )
}

export default Container