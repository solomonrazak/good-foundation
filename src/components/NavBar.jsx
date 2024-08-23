import React, { useState } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import Hover from './about/Hover';
import Sidebar from './sidebar/Sidebar';
import AdmissionHover from './admission/AdmissionHover';

const NavBar = () => {
  const [showHover, setShowHover] = useState(false);
  const [showAdHover, setShowAdHover] = useState(false);

  const handleMouseEnter = () => {
    setShowHover(true);
  };

  const handleMouseLeave = () => {
    setShowHover(false);
  };

  const handleAdHoverEnter = () => {
    setShowAdHover(true);
  }
  const handleAdHoverLeave = () => {
    setShowAdHover(false);
  }

  return (
    <div className='flex justify-between items-center md:px-3 py-2 border-b-4 border-green-400 fixed top-0 w-full bg-white z-40'>
      <Logo />
      <ul className='hidden md:flex gap-8'>
      <NavLink to="">
          <li onMouseEnter={handleMouseEnter}  onClick={() => setShowHover(true)}>
            About
            {showHover && 
              <div className="absolute w-[100vw] left-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Hover />
              </div>
            }
          </li>
        </NavLink>
        <NavLink to="/staff">
        <li>Staff</li>
        </NavLink>
        <NavLink to="">
        <li onMouseEnter={handleAdHoverEnter}>
          Admissions
          {showAdHover && 
          <div  className="absolute w-[100vw] left-0" onMouseEnter={handleAdHoverEnter} onMouseLeave={handleAdHoverLeave}>
            <AdmissionHover />
          </div>
          
          }

        </li>
        </NavLink>
        <li>Events</li>
        <NavLink to="/contact">
        <li>Contact Us</li>
        </NavLink>
      </ul>
      <div>
        <button className='hidden md:block text-white bg-amber-600 px-2 py-1'>Donate</button>
      </div>
      <div className="md:hidden">
      <Sidebar />
      </div>
     

    </div>
  )
}

export default NavBar;