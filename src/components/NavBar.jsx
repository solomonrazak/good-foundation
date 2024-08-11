import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-3 py-2 border-b-4 border-green-400'>
      <Logo />
      <ul className='flex gap-8'>
        <li>About</li>
        
        <li>Teachers</li>
        <li>Admissions</li>
        <li>Events</li>
      </ul>
      <div>
        <button className='text-white bg-amber-600 px-2 py-1'>Donate</button>
      </div>

    </div>
  )
}

export default NavBar;