import React from 'react';
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import Community from './Community';

const Calendar = () => {
  return (
    <div className="">
         <div
        className="w-full h-[25rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${sampleHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>ABOUT</p>
          <p>Student Calendar</p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:justify-between p-10 gap-14">
        <div>
            <h1 className="text-[25px] pb-5">2024-2045 ACADEMIC YEAR</h1>
            <p className="text-blue-600 hover:text-blue-400 text-[17px] cursor-pointer">2024-2025 Student Calendar</p>
        </div>
        <Community />
      </div>
    </div>
  )
};

export default Calendar;