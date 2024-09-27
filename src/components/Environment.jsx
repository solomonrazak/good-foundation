import React from "react";
import sampleHeader from "../assets/images/sampleHeader.jpg";
import learning from '../assets/images/foundation/learning.JPG'

const Environment = () => {
  return (
    <div className="">
      <div
        className="py-14"
        style={{
          backgroundImage: `url(${learning})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-medium flex md:flex-col text-2xl py-7 px-8"><span>Learning</span><span className="ml-3 md:ml-0">Environment</span></h1>
        <div className="flex flex-col md:flex-row gap-3">
        <div className="md:w-1/2 text-[26px] font-medium text-white p-8">
          
          <p>
            Good Foundation International School, endowed with a singular
            infrastructure of campus, is situated in a pastoral environment
            deeply connected to both cultural and business centers in the
            Municipal.
          </p>
          <div className="w-full h-[1.5px] bg-white mt-10"></div>
        </div>
        <div className="md:w-1/2 text-[18px] text-white p-8">
          <p>
            On the Good Foundation campus, buildings
            and classrooms are intentionally and systematically designed based
            upon research in how students learn and how our brains develop. The
            curriculum is woven into the design of spaces through the use of art
            and artifacts, which act as a visual and experiential text and are a
            core component of students educational experiences at Good Foundation.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
