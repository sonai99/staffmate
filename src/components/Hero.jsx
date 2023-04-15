import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
        <section class="bg-[#f8fafc]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">StaffMate</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">StaffMate is an employee management system that allows businesses to easily track and manage their workforce. With StaffMate, employers can keep all of their employee data in one centralized location, making it easy to access and manage employee information such as contact details, job titles, and performance metrics.</p>
            <Link to="/demo" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-[#d1d5db] focus:ring-4 focus:ring-[#e5e5e5] ">
                Demo
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:22ce6dff-b39f-4a1c-87e1-70e45c99ab69/ConfluenceLP_Feature_Documentation.png?cdnVersion=882" alt="mockup" />
        </div>                
    </div>
</section>
    </div>
  )
}

export default Hero
