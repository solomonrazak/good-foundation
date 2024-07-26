import React, { useState } from 'react';
import lower from '../../assets/images/lower.jpg';
import './levels.css';


const Lower = () => {
  const [showPop, setShowPop] = useState(false);

  return (
    <div className="relative p-6">
      <div className="md:w-[34rem] md:h-96 h-60 relative" style={{ backgroundImage: `url(${lower})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div
          className="absolute hidden bg-amber-600 right-0 md:flex cursor-pointer w-[25rem] justify-between px-4 py-3 text-[18px] font-medium text-white"
          onMouseEnter={() => setShowPop(true)}
          onMouseLeave={() => setShowPop(false)}
        >
          <p>Lower School</p>
          <p>+</p>
        </div>
        {showPop && (
          <div className="dummy-text w-[25rem] top-11 h-48 text-[18px] bg-amber-600 text-white font-medium p-4" onMouseEnter={() => setShowPop(true)} onMouseLeave={() => setShowPop(false)}>
            <p>Good Foundation Students learn, grow, play, and explore in a safe, bucolic environment.</p>
          </div>
        )}
      </div>
      <div className="md:hidden bg-amber-600 text-white text-[18px] font-medium p-6">
        <p className="py-6">Lower School</p>
        <p className='pb-5'>Good Foundation Students learn, grow, play, and explore in a safe, bucolic environment.</p>
      </div>
    </div>
  );
};

export default Lower;
