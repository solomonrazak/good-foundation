import React from "react";
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import VideoClip from "../special/VideoClip";
import AdCom from "./AdCom";
import dzego from "../../assets/files/dzego.pdf";

const MainAdmission = () => {
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
          <p className="text-2xl md:text-4xl font-medium leading-10 text-gray-500">
            Good Foundation International School is now accepting applications
            for the 2024-2025 academic year.
          </p>
          <div className="bg-gray-400 w-[95%] h-[0.8px] my-8"></div>
          <p className="text-slate-700 md:pl-10 leading-8">
            Good Foundation is currently accepting applications for the
            2024-2025 school year. The deadline for applications is September
            31st, 2024. Students who apply by this deadline will be notified on
            October 10, 2024, as to the status of their acceptance. After this
            deadline, Good Foundation Interntional School will continue
            accepting new applications on a rolling basis. To apply to Good
            Foundation, please download our applicatin form
            <a
              href={dzego}
              target="_blank"
              rel="noopener noreferrer"

              className="font-bold cursor-pointer text-blue-600 hover:text-blue-400 pl-2"
            >
              here
            </a>{" "}
            or visit our institution for further assistance and guidance.
          </p>
          <p className="mt-14 font-medium text-blue-400 pl-7 text-[18px] md:text-2xl cursor-pointer">
            Visit our campus for assistance today
          </p>
          <VideoClip />
          <p className="text-[17px] tracking-wide text-slate-700 font-medium">
            Please RSVP for an upcoming event by email to{" "}
            <span className="text-blue-400">admissions@foundation.org</span> or
            call 000-000-000. We look forward to seeing you!
          </p>
        </div>
        <div className="w-full md:w-[35%]">
          <AdCom />
        </div>
      </div>
    </div>
  );
};

export default MainAdmission;
