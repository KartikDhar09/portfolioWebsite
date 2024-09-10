import React from 'react'

function Home() {
  return (
    <div className='w-full h-dvh flex-grow border-2 border-white flex flex-wrap bg-[url("/banner-bg.png")]  '>
       <div className='w-1/2 border-2 border-white text-white flex flex-col justify-center '>
      <span className='text-6xl border-2 border-white text-center mb-12'> Hey there! </span>
      <span className='text-4xl border-2 border-white text-center mb-4 '> I'm Kartik Dhar</span>
      <p className='border-2 text-center font-Sofadi'>A passionate frontend developer with a keen eye for creating captivating digital experiences. Armed with a toolkit of HTML5, CSS3, JavaScript and ReactJs, I transform static designs into dynamic, responsive websites that users love to interact with. My expertise lies in crafting clean, efficient code and leveraging modern frameworks like React to build scalable web applications. Whether it's optimizing performance, ensuring cross-browser compatibility, or implementing accessible designs, I'm dedicated to delivering high-quality solutions that not only meet but exceed client expectations. With a blend of technical skills and creative problem-solving, I'm here to bring your web projects to life and make your digital presence stand out in today's competitive online landscape.
      </p>
        </div> 
       
       <div className='w-1/2  flex justify-center items-center'>
        <img className='w-3/4  h-3/4  ' src="/header-img.svg" alt="" />
       </div>
    </div>
  )
}

export default Home