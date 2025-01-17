import React from "react";
import { NavLink } from "react-router-dom";
import './css/custom.css'
function Header() {
  return (
   <div className="sticky top-0">
     <div
      className='w-full flex flex-wrap justify-between p-2 bg-img text-gray-400
    bg-[url("/banner-bg.png")]'
    >
      <NavLink to="/" className='' >
        <span className="text-2xl font-normal font-Maamli text-white  ">
          KARTIK DHAR
        </span>
      </NavLink>

      <ul className="hidden lg:flex flex-wrap  flex-grow lg:justify-end justify-evenly  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "text-purple-600 underline" : "text-gray-400 no-underline"}  `
          }
        >
          <li className="mx-16 md:mt-2 text-md font-normal    font-Protest md:hover:text-white">
            ABOUT
          </li>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            ` ${isActive ? "text-purple-600 underline" : "text-gray-400 no-underline"}  `
          }
        >
          <li className="mx-16 md:mt-2 text-md font-normal   font-Protest md:hover:text-white">
            SKILLS
          </li>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            ` ${isActive ? "text-purple-600 underline" : "text-gray-400 no-underline"}  `
          }
        >
          <li className="mx-16 md:mt-2 text-md font-normal    font-Protest md:hover:text-white">
            PROJECTS
          </li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${isActive ? "text-purple-600 underline" : "text-gray-400 no-underline"}  `
          }
        >
          <li className="mx-16 md:mt-2 text-md font-normal    font-Protest md:hover:text-white">
            CONTACT ME
          </li>
        </NavLink>
      </ul>
      <div  className="lg:hidden">
        <img src="menu.svg" alt="" />
      </div>
    </div>
   </div>
  );
}

export default Header;
