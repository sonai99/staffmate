import React from 'react'

function Header({setIsAdding}) {
  return (
    <header class="bg-[#f8fafc] flex flex-col ml-4">
        <h1 class="text-2xl font-extrabold text-center mt-2">Keep a track of your employees with <span class="text-5xl text-blue-700 font-extrabold border-b-4">StaffMate</span></h1>
        <div>
            <button onClick={()=>{setIsAdding(true)}} class='ml-4 mb-4 mt-4 items-center text-white bg-blue-700  rounded-lg text-sm px-5 py-2.5 text-center'>Add Employee</button>
        </div>
    </header>
  )
}

export default Header