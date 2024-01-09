import React from 'react'

const Pagination = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6 ">
  
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">
    
    <div className='mx-auto'>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm " aria-label="Pagination" >
        <a href="#" className="relative inline-flex items-center rounded-md px-2 py-2  text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
          <span className=" w-20 text-black pl-2 font-Inter leading-[20px]">Previous</span>
        </a>
        
        
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">1</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">...</a>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-[#146EB4] py-2 px-3  text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md">10</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">11</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">12</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">13</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">14</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">15</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">16</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">17</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50  md:inline-flex">18</a>
        {/* <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">11</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">12</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">13</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">14</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">15</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">16</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">17</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">18</a> */}
        
   
        <a href="#" className="relative inline-flex items-center rounded-md px-2 py-2  text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="w-14 pl-3 text-black font-Inter leading-[20px]">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
        
      </nav>
    </div>
  </div>
</div>
  )
}

export default Pagination