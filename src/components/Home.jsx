import React from 'react'
import './CSS/Home.css'

function Home() {
  return (
    <div className='w-full h-dvh flex-grow border-t-2  flex-col md:flex-row flex flex-wrap bg-[url("/banner-bg.png")] justify-center items-center 
    custom-scroll
    '>
       <div className='md:w-1/2 text-white  flex flex-col items-center justify-center  '>
      <span className='text-3xl md:text-6xl text-center mb-6 font-Protest'> Hey there! </span>
      <span className='text-2xl md:text-4xl text-center mb-4 font-Protest bg-gradient-to-r from-purple-400 to-pink-600 text-transparent
      bg-clip-text'> I'm Kartik Dhar | Frontend Developer</span>
      <p className=' text-sm md:text-lg font-Sofadi text-start  px-8 md:m-4  '>I specialize in creating attractive digital experiences using HTML5, CSS3, JavaScript, and ReactJs. I transform static designs into dynamic, responsive websites with clean, efficient code and modern frameworks. My expertise includes optimizing performance, ensuring cross-browser compatibility, and implementing accessible designs. I’m committed to delivering high-quality solutions that surpass client expectations. With a mix of technical skill and creativity, I enhance your web projects and boost your digital presence.
      </p>
        </div> 
       
       <div className='md:w-1/3  flex justify-center items-center '>
        <img className='w-3/4  h-3/4 ' src="/header-img.svg" alt="" />
       </div>
    </div>
  )
}

export default Home