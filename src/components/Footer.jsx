import React from 'react'

const Footer = () => {
  return (

    <div class="bg-[#f8fafc]">
<footer class=" bg-[#f8fafc]">
    <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm  sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">StaffMate</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
        <li>
            <a href="/" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="/" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
</div>
  )
}

export default Footer