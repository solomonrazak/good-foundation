import React from 'react';
import gfis from '../assets/images/gfis.png';

const Logo = () => {
  return (
    <div>
        <div className="flex items-center">
            <img src={gfis} width={80} height={100} className="object-cover"/>
            <h1 className="font-medium tracking-wider md:hidden lg:block text-green-400 ml-[-10px] text-xl">Good Foundation</h1>
        </div>

    </div>
  )
}

export default Logo;