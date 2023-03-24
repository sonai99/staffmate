import React from 'react'

const Navbar = () => {
  return (
    <div >

<nav class="p-3 border-gray-200 rounded bg-[#f8fafc]">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
        <span class="ml-4 self-center text-2xl font-bold whitespace-nowrap ">StaffMate</span>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4">Home</a>
        </li>
        <li>
          <a href="/" class="block py-2 pl-3 pr-4">Services</a>
        </li>
        <li>
          <a href="/" class="block py-2 pl-3 pr-4">Pricing</a>
        </li>
        <li>
          <a href="/" class="block py-2 pl-3 pr-4">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar