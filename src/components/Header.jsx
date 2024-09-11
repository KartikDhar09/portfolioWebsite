import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div
      className='w-full flex flex-wrap justify-center md:justify-between p-2 bg-img text-gray-400
    bg-[url("/banner-bg.png")]'
    >
      <NavLink to="/">
        <span className="text-2xl font-normal font-Protest text-white">
          KARTIK DHAR
        </span>
      </NavLink>

      <ul className="flex flex-wrap  flex-grow md:justify-end justify-evenly  ">
        <NavLink
          to="/about"
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
    </div>
  );
}

export default Header;
