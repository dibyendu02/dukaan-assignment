import React from 'react'

const Overview = () => {
  return (
    <div>
        <div className='p-5 flex justify-between'>
            <h1 className='text-xl font-medium'>Overview</h1>
            <select className='p-2 bg-white border-2 rounded-md text-[#4D4D4D] font-medium'>
                <option>Last Month</option>
            </select>
        </div>
        <div className='flex p-5  gap-5 '>
            <div className='rounded-lg grow flex flex-col space-y-4 p-5 bg-white' style={{boxShadow: "2px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
                <h1 className='flex space-x-2 items-center text-[#4D4D4D]'>
                    Online orders
                </h1>
                <h1 className='text-dark text-3xl font-medium grow'>231</h1>
            </div>
            <div className='rounded-lg grow flex flex-col space-y-4 p-5 bg-white' style={{boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
                <h1 className='flex space-x-2 items-center text-[#4D4D4D]'>
                    Amount received
                </h1>
                <h1 className='text-dark text-3xl font-medium grow'>₹23,92,312.19</h1>
            </div>
        </div>
    </div>
  )
}

export default Overview