import React, { useState } from 'react';
import middle from '../../assets/images/middle.jpg';
import './levels.css';
import found4 from '../../assets/images/foundation/found4.JPG';
const Middle = () => {

    const [showPop, setShowPop] = useState(false);
  return (
    <div className="relative p-6">
      <div className="md:w-[34rem] md:h-96 h-60 relative" style={{ backgroundImage: `url(${found4})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div
          className="absolute hidden bg-amber-600 right-0 md:flex cursor-pointer w-[25rem] justify-between px-4 py-3 text-[18px] font-medium text-white"
          onMouseEnter={() => setShowPop(true)}
          onMouseLeave={() => setShowPop(false)}
        >
          <p>Upper Primary</p>
          <p>+</p>
        </div>
        {showPop && (
          <div className="dummy-text w-[25rem] top-11 h-48 text-[18px] bg-amber-600 text-white font-medium p-4" onMouseEnter={() => setShowPop(true)} onMouseLeave={() => setShowPop(false)} style={{ backgroundColor: "rgba(217, 119, 6, 1)" }}>
            <p>Through their experiences at Good Foundation, students begin a lifelong journey of self-discovery, personal growth, and the pursuit of interests and passions that can shape their future educational and career paths.</p>
          </div>
        )}
      </div>
      <div className="md:hidden bg-amber-600 text-white text-[18px] font-medium p-6">
        <p className="py-6">Upper Primary</p>
        <p className='pb-5'>Through their experiences at Good Foundation, students begin a lifelong journey of self-discovery, personal growth, and the pursuit of interests and passions that can shape their future educational and career paths.</p>
      </div>
    </div>
  )
}

export default Middle;