import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  rows:2  
};


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
    <div className='flex flex-col gap-y-4 justify-center items-center  h-dvh bg-[url("/banner-bg.png")] bg-cover '>
      <h1 className='text-white font-Protest text-6xl '>SKILLS</h1>
      <div className='flex justify-evenly flex-wrap items-center  w-full h-4/6 '>
     <div className='w-full'> 
      <Slider {...settings}>
     {skills.map((skill)=>{
       return(
         
           <div className='  w-48 h-48 bg-slate-900 text-white rounded-xl border-2 flex flex-col justify-evenly gap-y-2 text-xl ' key={skill.id}>
             <div className=' rounded-xl p-2 h-3/4  flex justify-center items-center'>
               <img className='border-2 w-24 h-24 rounded-full object-contain bg-white '
               src={skill.icon} alt="skill" />
             </div>
             <p className='text-center b font-Protest rounded-lg'>{skill.name}</p>
           </div>
         
       )
     })}  
     </Slider>
     </div>
   </div>
   
      </div>

     
  )
}

export default Skills