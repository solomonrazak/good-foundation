import React from "react";
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import VideoClip from "../special/VideoClip";
import AdCom from "./AdCom";

const Apply = () => {
  return (
    <div>
      <div
        className="w-full h-[23rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${sampleHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>ADMISSIONS</p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 p-10 mt-10">
        <div className="w-full md:[w-65%]">
          <p className="text-slate-700 text-[17px] flex flex-col md:flex-row gap-4">
            <span>Have you already Download your admission forms?</span>{" "}
            <span className="font-bold text-blue-500 cursor-pointer hover:text-blue-400">
              Click here to downlaod and complete application
            </span>
          </p>
          <VideoClip />
        </div>
        <div className="w-full md:w-[35%]">
          <AdCom />
        </div>
      </div>
    </div>
  );
};

export default Apply;