import React from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Ratio from '../assets/images/Ratio.gif';
import Electives from '../assets/images/Electives.gif';
import { LiaChalkboardTeacherSolid } from "react-icons/lia"

const Grid = () => {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-6 md:grid-cols-10 md:grid-rows-8 gap-4 p-6">
      <div className="border-2 border-dashed border-orange-400 rounded-md md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-3 p-16 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div>
          <LiaGraduationCapSolid className="text-5xl text-orange-400"/>
          <p></p>
          </div>
        <p className="text-[20px] font-medium text-gray-500">320 students</p>
        </div>
      </div>
      <div className="border-2 border-dashed border-green-400 rounded-md md:col-start-5 md:col-span-2 md:row-start-1 md:row-span-4 p-14">
        <div className="flex flex-col justify-center items-center gap-5">
        <SiHomeassistantcommunitystore className="text-5xl text-green-400"/>
        <p className="text-[20px] font-medium text-gray-500 text-center">25 communities represented</p>
        </div>
       
      </div>
      <div className="border-2 border-dashed border-blue-400 rounded-md md:col-start-7 md:col-span-4 md:row-start-1 md:row-span-4 p-14">
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <img src={Ratio} width={80} className="object-cover"/>
        <p className="text-[20px] font-medium text-gray-500 text-center md:mt-7">7:1 student to teacher ratio</p>
        </div>
      </div>
      <div className="border-2 border-dashed border-violet-400 rounded-md md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-5 p-14">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:mt-14">
        <LiaChalkboardTeacherSolid className="text-6xl text-violet-400"/>
        <p className="text-[25px] font-medium text-gray-500 text-center">40+ teachers</p>
        </div>
        
      </div>
      <div className="border-2 border-dashed border-red-400 rounded-md md:col-start-5 md:col-span-4 md:row-start-5 md:row-span-4 p-14">
        <p className="text-[20px] font-medium text-gray-500 text-center">12 studnets in the average class</p>
      </div>
      <div className="border-2 border-dashed border-indigo-950 rounded-md md:col-start-9 md:col-span-2 md:row-start-5 md:row-span-4 p-14">
        <div className="flex flex-col gap-3 items-center">
          <img src={Electives} width={80} className="object-cover"/>
        <p className="text-[20px] font-medium text-gray-500 text-center">50+ subjects</p>
        </div>
       
      </div>
    </div>
  );
};

export default Grid;
