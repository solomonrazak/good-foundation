import React from "react";
import CountdownTimer from "../components/special/CountdownTimer";
import sampleHeader from "../assets/images/sampleHeader.jpg";

const Event = () => {
  return (
    <div>
      <div
        className="w-full h-[25rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${sampleHeader})`,
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
        <p className="text-3xl font-medium text-gray-600">
          Good Foundation 2024-2025 Academic Year Begins Soon!
        </p>
        <p className="text-[16px] md:text-[18px] text-gray-600 leading-7">
          As the summer comes to an end, excitement fills the air at Good
          Foundation International School. The upcoming 2024-2025 academic year
          promises new beginnings, fresh opportunities, and the chance for every
          student to achieve their fullest potential. Whether you're returning
          to continue your educational journey or joining us for the first time,
          we can't wait to welcome you.
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
          We look forward to <span className="font-medium text-blue-400">seeing you soon!</span>
        </p>
      </div>
      <CountdownTimer />
    </div>
  );
};

export default Event;
