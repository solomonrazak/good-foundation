import React from "react";
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import Community from "./Community";
import kids from "../../assets/images/kids.jpeg";
import VideoClip from "../special/VideoClip";
import cover from "../../assets/images/foundation/cover.JPG";
import mission3 from "../../assets/images/foundation/mission3.JPG";
import mission4 from "../../assets/images/foundation/mission4.JPG";

const MissionandHistory = () => {
  return (
    <div className="">
      <div
        className="w-full h-[23rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>ABOUT</p>
          <p>Mission and History</p>
        </div>
      </div>
      <div className="my-10 px-6 py-10 flex flex-col-reverse md:flex-row gap-5 text-gray-700">
        <p className="text-3xl leading-[3rem] w-full md:w-[70%]">
          Our Mission is to be an institution that is committed to the provision
          of strong basic career-focused education, moral and godly life and
          also training for one to be quick, resolute and effective thinker to
          become competent agents of transformation.
        </p>
        <Community />
      </div>
      <div className="px-10 md:px-20 my-14">
        <div className="flex flex-col md:flex-row gap-14 text-gray-600">
          <img src={mission3} width={550} height={550} className="object-contain" />
          <p className="text-2xl md:text-4xl font-bold">
            Good Foundation was founded in 1991 by Courtney and Steven J. Ross, who
            recognized that preparing students to meet the challenges of an
            increasingly connected and rapidly changing world requires
            innovative models to transform education.
          </p>
        </div>
        <p className="leading-8 text-[20px] font-medium mt-10 text-gray-600">
          Drawing on pedagogical research from leading education experts, the
          Good Foundation Model incorporates a global perspective with integrated, hands-on
          learning and active problem-solving. Ross School is accredited by the
          New York State Association of Independent Schools (NYSAIS) and Middle
          States Association Commission on Elementary and Secondary Schools
          (MSA) and was awarded the first International Credential ever given by
          MSA. MSA has also recognized Ross as a Program of Distinction in
          Global Literacies.
        </p>
      </div>
      <VideoClip />
      <div>
        <img src={mission4} alt=""/>
      </div>
      
    </div>
  );
};

export default MissionandHistory;
