import React from 'react'
import Navbar from './Navbar'
import Overview from './Overview'
import Transactions from './Transactions'

const Container = () => {
  return (
    <div className='grow bg-[#FAFAFA] min-h-screen'>
        <Navbar/>
        <Overview/>
        <Transactions/>
    </div>
  )
}

export default Container