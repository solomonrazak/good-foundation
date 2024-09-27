import React, { useState } from 'react';
import boarding from '../../assets/images/boarding.jpg';
import './levels.css';
import found5 from '../../assets/images/foundation/found5.JPG';

const Boarding = () => {

    const [showPop, setShowPop] = useState(false);
  return (
    <div className="relative p-6">
    <div className="md:w-[34rem] md:h-96 h-60 relative" style={{ backgroundImage: `url(${found5})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div
        className="absolute hidden bg-amber-600 right-0 md:flex cursor-pointer w-[25rem] justify-between px-4 py-3 text-[18px] font-medium text-white"
        onMouseEnter={() => setShowPop(true)}
        onMouseLeave={() => setShowPop(false)}
      >
        <p>Boarding School</p>
        <p>+</p>
      </div>
      {showPop && (
        <div className="dummy-text w-[25rem] top-11 h-48 text-[18px] bg-amber-600 text-white font-medium p-4" onMouseEnter={() => setShowPop(true)} onMouseLeave={() => setShowPop(false)} style={{ backgroundColor: "rgba(217, 119, 6, 1)" }}>
          <p>Being a boarding student at Ross is an exciting experience that introduces students to other cultures, prepares young people for the increased independence and responsibility of college academics, and sparks lifelong friendships.</p>
        </div>
      )}
    </div>
    <div className="md:hidden bg-amber-600 text-white text-[18px] font-medium p-6">
      <p className="py-6">Boarding School</p>
      <p className='pb-5'>Being a boarding student at Ross is an exciting experience that introduces students to other cultures, prepares young people for the increased independence and responsibility of college academics, and sparks lifelong friendships.</p>
    </div>
  </div>
  )
}

export default Boarding