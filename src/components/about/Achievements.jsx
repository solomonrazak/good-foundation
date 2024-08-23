import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import award1 from "../../assets/images/award1.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdOutlineArrowRight } from "react-icons/md";
import { achievementUUIDs } from "./AchievementDetail";

const Achievements = () => {
  const [showMore, setShowMore] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
    setHideButton(true);
  };

  const navigate = useNavigate();

  const handleReadMore = (id) => {
    if (id) {
      navigate(`/about/achievements/${id}`);
    } else {
      console.log("INVALID ID: ", id);
    }
  };
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
          <p>ABOUT</p>
          <p>Achievements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-5 mt-10 mb-7 gap-10">
        <div className="flex flex-col md:flex-row bg-gray-100 p-4 gap-5 items-center border-t-4 rounded-md border-t-green-500">
          <img src={award1} className="w-full h-72 md:w-50%" />
          <div>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegCalendarDays /> January 20, 2024
            </p>
            <p className="text-2xl font-medium text-slate-900">
              Good Foundation wins the Presidential Award
            </p>
            <button
              className="flex items-center text-green-800"
              onClick={() => handleReadMore(achievementUUIDs.award1)}
            >
              Read More
              <MdOutlineArrowRight className="mt-1" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-100 p-4 gap-5 items-center border-t-4 rounded-md border-t-green-500">
          <img src={award1} className="w-full h-72 md:w-50%" />
          <div>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegCalendarDays /> January 20, 2024
            </p>
            <p className="text-2xl font-medium text-slate-900">
              Good Foundation wins the Presidential Award
            </p>
            <button className="flex items-center text-green-800">
              Read More
              <MdOutlineArrowRight className="mt-1" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-gray-100 p-4 gap-5 items-center border-t-4 rounded-md border-t-green-500">
          <img src={award1} className="w-full h-72 md:w-50%" />
          <div>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegCalendarDays /> January 20, 2024
            </p>
            <p className="text-2xl font-medium text-slate-900">
              Good Foundation wins the Presidential Award
            </p>
            <button className="flex items-center text-green-800">
              Read More
              <MdOutlineArrowRight className="mt-1" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-100 p-4 gap-5 items-center border-t-4 rounded-md border-t-green-500">
          <img src={award1} className="w-full h-72 md:w-50%" />
          <div>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegCalendarDays /> January 20, 2024
            </p>
            <p className="text-2xl font-medium text-slate-900">
              Good Foundation wins the Presidential Award
            </p>
            <button className="flex items-center text-green-800">
              Read More
              <MdOutlineArrowRight className="mt-1" />
            </button>
          </div>
        </div>
        {showMore && (
          <>
            <div className="flex flex-col md:flex-row bg-gray-100 p-4 gap-5 items-center border-t-4 rounded-md border-t-green-500">
              <img src={award1} className="w-full h-72 md:w-50%" />
              <div>
                <p className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaRegCalendarDays /> January 20, 2024
                </p>
                <p className="text-2xl font-medium text-slate-900">
                  Good Foundation wins the Presidential Award
                </p>
                <button className="flex items-center text-green-800">
                  Read More
                  <MdOutlineArrowRight className="mt-1" />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-gray-100 p-4 gap-5 items-center border-t-4 rounded-md border-t-green-500">
              <img src={award1} className="w-full h-72 md:w-50%" />
              <div>
                <p className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaRegCalendarDays /> January 20, 2024
                </p>
                <p className="text-2xl font-medium text-slate-900">
                  Good Foundation wins the Presidential Award
                </p>
                <button className="flex items-center text-green-800">
                  Read More
                  <MdOutlineArrowRight className="mt-1" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {!hideButton && (
        <div className="flex justify-center my-5">
          <button
            className="px-2 bg-amber-600 text-white py-1 rounded-md font-medium text-[15px] hover:bg-amber-500"
            onClick={handleLoadMore}
          >
            Load More Achievements
          </button>
        </div>
      )}
    </div>
  );
};

export default Achievements;
