import React, { useState, useEffect } from 'react';
import high from '../../assets/images/lower.jpg';
import found3 from '../../assets/images/foundation/found3.JPG'
import './levels.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const High = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    const [showPop, setShowPop] = useState(false);
  return (
    <div>
         <div className="relative p-6" data-aos="fade-up">
      <div className="md:w-[34rem] md:h-96 h-60 relative" style={{ backgroundImage: `url(${found3})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div
          className="absolute hidden bg-amber-600 right-0 md:flex cursor-pointer w-[25rem] justify-between px-4 py-3 text-[18px] font-medium text-white"
          onMouseEnter={() => setShowPop(true)}
          onMouseLeave={() => setShowPop(false)}
        >
          <p>Junior High School</p>
          <p>+</p>
        </div>
        {showPop && (
          <div className="dummy-text w-[25rem] top-11 h-48 text-[18px] bg-amber-600 text-white font-medium p-4" onMouseEnter={() => setShowPop(true)} onMouseLeave={() => setShowPop(false)} style={{ backgroundColor: "rgba(217, 119, 6, 1)" }}>
            <p>With a focus on academic excellence, Good Foundation emphasizes the importance of hands-on experience and preparing students for a dynamic future.</p>
          </div>
        )}
      </div>
      <div className="md:hidden bg-amber-600 text-white text-[18px] font-medium p-6">
        <p className="py-6">Junior High School</p>
        <p className='pb-5'>With a focus on academic excellence, Good Foundation emphasizes the importance of hands-on experience and preparing students for a dynamic future.</p>
      </div>
    </div>
    </div>
  )
}

export default High;