import React from 'react'

function Header() {
  return (
    <div className='w-full flex flex-wrap justify-between p-2 bg-img text-gray-600
    bg-[url("/banner-bg.png")]'>
    <span className='text-2xl font-normal font-Protest text-white o'>KARTIK DHAR</span>
    <ul className='flex flex-wrap  flex-grow justify-center'>
        <li className='mx-8 text-md font-normal  hover:cursor-pointer hover:underline font-Protest hover:text-white text-stroke'>HOME</li>
        <li className='mx-8 text-md font-normal  hover:cursor-pointer hover:underline font-Protest hover:text-white'>SKILLS</li>
        <li className='mx-8 text-md font-normal  hover:cursor-pointer hover:underline font-Protest hover:text-white'>PROJECTS</li>
        <li className='mx-8 text-md font-normal  hover:cursor-pointer hover:underline font-Protest hover:text-white'>CONTACT ME</li>
    </ul>
    </div>
  )
}

export default Header