import React from "react";
import cover from "../../assets/images/foundation/cover.JPG";

import { Link } from "react-router-dom";

import fact1 from "../../assets/images/foundation/fact1.JPG";

const QuickFacts = () => {
  return (
    <div className="my-5">
      <div
        className="w-full h-[25rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>ABOUT</p>
          <p>Quick Facts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 my-10">
        <div className="p-10 order-2 md:order-1">
          <h1 className="text-gray-600 font-medium text-2xl">
            Established in 1991
          </h1>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>

          <h1 className="text-gray-600 font-medium text-2xl pb-8">
            GRADE LEVELS
          </h1>
          <p className="text-[16px] font-medium text-gray-600">
            Day Students: Nursry to JHS3
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Final Year students - preparing for BECE
          </p>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>

          <h1 className="text-gray-600 font-medium text-2xl pb-8">LOCATION</h1>
          <p className="text-[16px] font-medium text-gray-600">
            All Students are situated on one campus with constant security
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Nsawam Central , Nsawam-Adoagyiri Constituency
          </p>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>

          <h1 className="text-gray-600 font-medium text-2xl pb-8">STUDENTS</h1>
          <p className="text-[16px] font-medium text-gray-600">
            Number of Students (Nursery to Kindergaten 2; PG): 320
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Number of Students (Primary 1 to Primary 2; PG): 420
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Number of Students (JHS 1 to JHS 3; PG): 620
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Communities Represented: 25
          </p>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>

          <h1 className="text-gray-600 font-medium text-2xl pb-8">CLASSROOM</h1>
          <p className="text-[16px] font-medium text-gray-600">
            Average Class Size: 12
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Student to Teacher Ratio: 7:1
          </p>
        </div>

        <div className="p-10 order-3 md:order-2">
          <h1 className="text-gray-600 font-medium text-2xl pb-8">TERMS</h1>
          <p className="text-[16px] font-medium text-gray-600">
            Three terms, plus a two-week Field Academy (Grades 7 to 12) and
            six-week Summer Boarding Program
          </p>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>

          <h1 className="text-gray-600 font-medium text-2xl pb-8">
            SCHOOL CALENDAR
          </h1>
          <p className="text-[16px] font-medium text-gray-600">
            2024 to 2025 Academic Year: September 5 to June 13
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            Semester: 1 9/3 to 12/20
          </p>
          <p className="text-[16px] font-medium text-gray-600">
            <span>Thanksgiving Recess: 11/25 to 11/29 </span>
          </p>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>

          <h1 className="text-gray-600 font-medium text-2xl pb-8">SUBJECTS</h1>
          <p className="text-[16px] font-medium text-gray-600">
            Over 100 elective classes such as Architecture, E-Commerce, Advanced
            Topics in Psychology, Design Thinking, Metal and Wood Fabrication,
            Advanced Literature and Textual Analysis, Environmental Science, and
            more
          </p>
        </div>

        <div className="px-10 py-5 order-1 md:order-3 ">
          <div className="w-full ">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-600 mb-10">
              About
            </h1>
            <p className="flex flex-col gap-4 mt-4 text-blue-800">
              <Link to="/about/welcome">
                <span className="hover:text-blue-400">
                  Welcome to Good Foundation
                </span>
              </Link>
              <Link>
                <span className="hover:text-blue-400">Mission and History</span>
              </Link>
              <Link>
                <span className="hover:text-blue-400">Achievements</span>
              </Link>
              <Link>
                <span className="hover:text-blue-400">Quick Facts</span>
              </Link>
              <Link>
                <span className="hover:text-blue-400">Calendar</span>
              </Link>
            </p>
          </div>
          <div className="bg-gray-300 h-[0.8px] w-full my-8"></div>
        </div>
      </div>

      <img src={fact1} alt="" />
    </div>
  );
};

export default QuickFacts;
