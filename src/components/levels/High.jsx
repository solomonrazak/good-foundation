import React, { useState } from 'react';
import high from '../../assets/images/lower.jpg';
import './levels.css';

const High = () => {

    const [showPop, setShowPop] = useState(false);
  return (
    <div>
         <div className="relative p-6">
      <div className="md:w-[34rem] md:h-96 h-60 relative" style={{ backgroundImage: `url(${high})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div
          className="absolute hidden bg-green-400 right-0 md:flex cursor-pointer w-[25rem] justify-between px-4 py-3 text-[18px] font-medium text-white"
          onMouseEnter={() => setShowPop(true)}
          onMouseLeave={() => setShowPop(false)}
        >
          <p>Junior High School</p>
          <p>+</p>
        </div>
        {showPop && (
          <div className="dummy-text w-[25rem] top-11 h-48 text-[18px] bg-green-400 text-white font-medium p-4" onMouseEnter={() => setShowPop(true)} onMouseLeave={() => setShowPop(false)}>
            <p>With a focus on academic excellence, Good Foundation emphasizes the importance of hands-on experience and preparing students for a dynamic future.</p>
          </div>
        )}
      </div>
      <div className="md:hidden bg-green-400 text-white text-[18px] font-medium p-6">
        <p className="py-6">Junior High School</p>
        <p className='pb-5'>With a focus on academic excellence, Good Foundation emphasizes the importance of hands-on experience and preparing students for a dynamic future.</p>
      </div>
    </div>
    </div>
  )
}

export default High;