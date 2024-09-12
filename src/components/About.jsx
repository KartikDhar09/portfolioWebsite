import React from 'react'
import './css/custom.css'

function About() {
  return (
    
    <div id='about' className=' w-full h-dvh flex-grow  flex-col lg:flex-row flex flex-wrap bg-[url("/banner-bg.png")] md:bg-cover  xl:bg-auto bg-no-repeat justify-center items-center 
    '>
       <div className='md:w-1/2 text-white  flex flex-col items-center justify-center  '>
     <div className=' flex flex-col justify-center  items-center'>
     <span className='text-3xl md:text-3xl xl:text-6xl mb-6 font-Protest   '> Welcome to My Portfolio  </span>
      <span className='text-2xl xl:text-3xl  text-center mb-4 md:mb-0 font-mono font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent
      bg-clip-text inline-block'> I'm Kartik Dhar  </span>
      <span className='text-2xl xl:text-4xl  text-center mb-2 md:mb-0 font-Protest bg-gradient-to-r from-purple-400 to-blue-600 text-transparent
      bg-clip-text inline-block p-0 m-0 animate-logo '>Frontend Developer</span>
      <p className=' text-xs md:text-lg font-mono text-center   px-4 md:pl-8  lg:pl-14  md:m-4 '>I specialize in creating attractive digital experiences using HTML5,CSS3,JavaScript and ReactJs.I transform static designs into dynamic, responsive websites with clean, efficient code and modern frameworks.My expertise includes optimizing performance,ensuring cross-browser compatibility and implementing accessible designs.I’m committed to delivering high-quality solutions that surpass client expectations.With a mix of technical skill and creativity,I enhance your web projects and boost your digital presence .
      </p>
     </div>
        </div> 
       
       <div className='md:w-1/3  flex justify-center items-center '>
        <img className='w-3/4  h-3/4 ' src="/header-img.svg" alt="" />
       </div>
    </div>
  
  )
}

export default About