import React from 'react'

import './css/custom.css'


const skills=[
{
  id:1,
  name:'JavaScript',
  icon:'/skills_logo/js.png'
  
},
{
  id:2,
  name:'ReactJs',
  icon:'/skills_logo/react.png'
},
{
  id:3,
  name:'Css',
  icon:'/skills_logo/css.png'
},
{
  id:4,
  name:'Tailwind',
  icon:'/skills_logo/tailwind.svg'
},
{
  id:5,
  name:'Html',
  icon:'/skills_logo/html-5.png'
},
{
  id:6,
  name:'C++',
  icon:'/skills_logo/c++.png'
},
{
  id:7,
  name:'Git',
  icon:'/skills_logo/git.png'
},
{
  id:8,
  name:'Github',
  icon:'/skills_logo/github.png'
},
{
  id:9,
  name:'NodeJs',
  icon:'/skills_logo/nodejs.png'
},
{
  id:10,
  name:'MySql',
  icon:'/skills_logo/mysql.png'
},
{
  id:11,
  name:'Python',
  icon:'/skills_logo/python.png'
},
{
  id:12,
  name:'Java',
  icon:'/skills_logo/java.png'
}
]
function Skills() {
  return (
    <div className='flex flex-col gap-y-4 xl:gap-y-12   xl:justify-center  p-4 justify-center items-center  h-dvh bg-[url("/banner-bg.png")] bg-cover '>
      <h1 className='text-white font-Protest md:text-6xl text-4xl text-center w-1/2   underline'>SKILLS</h1>
     <div className='w-4/5 lg:w-1/2 lg:h-1/2 h-1/2 rounded-xl overflow-auto  lg:overflow-visible flex flex-col lg:flex-row justify-center items-center gap-2  lg:gap-4 flex-wrap  md:h-1/2  xl:mb-20 
     ' id="skill"> 
     {skills.map((skill)=>{
    return(
      
        <div className=' bg-slate-900 bg-opacity-70 text-white rounded-xl border-2 flex flex-col aspect-square justify-evenly gap-y-3  text-xl hover:cursor-pointer'  key={skill.id}>
          <div className=' rounded-xl p-4  lg:h-1/4   flex justify-center items-center '>
            <img className='border-2 lg:w-24 w-12 h-12 lg:h-24 rounded-full object-contain bg-white text-justify text-black'
            src={skill.icon} alt={`${skill.name}`} />
          </div>
          <p className='text-center b font-Protest rounded-lg'>{skill.name}</p>
        </div>
      
    )
  })} 
     </div>
   </div>
   

     
  )
}

export default Skills