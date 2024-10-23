import React from "react";
import CountdownTimer from "../components/special/CountdownTimer";
import sampleHeader from "../assets/images/sampleHeader.jpg";
import jersey1 from "../assets/images/foundation/jersey1.JPG";
import cover from "../assets/images/foundation/cover.JPG";
import cooking from "../assets/images/foundation/cooking.JPG";
import career from "../assets/images/foundation/career.JPG";
import custome from "../assets/images/foundation/custome.JPG";
const Event = () => {
  return (
    <div>
      <div
        className="w-full h-[25rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>Upcoming Event</p>
          <p>2024-2024 Academic Year begins</p>
        </div>
      </div>
      <div className="flex flex-col p-8 space-y-5">
        <p className="text-[30px] md:text-[2rem] lg:text-[3rem] text-red-500 font-medium">
          Upcoming Event!!!
        </p>
        <p className="text-3xl font-medium text-gray-600">
          Good Foundation celebrates 20 years of excellence!!
        </p>
        <p className="text-[16px] md:text-[18px] text-gray-600 leading-7">
          As we celebrate our 20th anniversary, Good Foundation International
          School looks back with pride on two decades of nurturing students and
          fostering academic growth. Since our inception, we have been dedicated
          to providing quality education, helping our students realize their
          full potential, and building a community grounded in values and
          excellence.
        </p>
        <p className="text-[16px] md:text-[18px] text-gray-600 leading-7">
          This milestone marks not only the achievements of our past but also
          the promise of a bright future. We are excited to share this
          celebration with you and invite you to join us for special events
          throughout the year as we continue to inspire and educate the next
          generation. We look forward to{" "}
          <span className="font-medium text-blue-400">seeing you soon!</span>
        </p>

        <p className="text-[16px] md:text-[18px] text-gray-600 leading-7">
          To keep track of the days leading up to the start of the new academic
          year, we've added a countdown timer to our website. This timer will
          allow you to see just how many days, hours, minutes, and seconds are
          left before the first day of school. It's a great way to build
          anticipation and ensure that everyone is prepared for what lies ahead.
        </p>
        <p className="text-[16px] md:text-[18px] text-gray-600 leading-7">
          Be sure to check the timer regularly and stay informed about all the
          exciting activities we have planned for the start of the school year.
          We look forward to{" "}
          <span className="font-medium text-blue-400">seeing you soon!</span>
        </p>
      </div>
      <h1 className="text-[25px] md:text-[2rem] text-red-500 font-medium pl-8 my-5 lg:text-[3rem]">
        Coming Up later this Term!!
      </h1>
      <div className="px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          style={{
            backgroundImage: `url(${jersey1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-w-full h-[25rem] flex justify-center items-center"
        >
          <p className="text-amber-500 font-bold text-[3.3rem] text-center">
            Rep Your Jersey
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${cooking})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-w-full h-[25rem] flex justify-center items-center"
        >
          <p className="text-amber-500 font-bold text-[3.3rem] text-center">
            Foundation Cooking Day
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${custome})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-w-full h-[25rem] flex justify-center items-center"
        >
          <p className="text-amber-500 font-bold text-[3.3rem] text-center">
            Traditional Custome Day
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${career})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-w-full h-[25rem] flex justify-center items-center"
        >
          <p className="text-amber-500 font-bold text-[3.3rem] text-center">
            Career Day
          </p>
        </div>
      </div>
      {/* <CountdownTimer /> */}
    </div>
  );
};

export default Event;
