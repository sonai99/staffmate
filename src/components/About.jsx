import React from 'react'
import about from "./about.jpeg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="bg-[#f8fafc]">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full border-1 rounded-lg drop-shadow-lg" src={about} alt="dashboard" />
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"><span class="text-5xl text-blue-700 font-extrabold border-b-4">Keep a track!</span></h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg ">Using StaffMate, employers can create custom reports and generate insights about their workforce, enabling them to make more informed decisions and improve employee productivity. StaffMate also provides tools for scheduling and time-tracking, making it easy to ensure that employees are working the right hours and getting paid accurately.</p>
            <Link to="/demo" class="inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Check Demo
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default About
