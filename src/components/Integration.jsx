import React from "react";

const Integration = () => {
  return (
    <div className="py-14 px-8">
      <h1 className="font-medium text-slate-500 text-2xl my-8 py-3">Integration</h1>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="md:w-1/2">
          <p className="text-slate-700 text-5xl leading-[3.7rem] tracking-wide">
            Interdisciplinarity and Integration Are Central to the Good
            Foundation Model
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="text-slate-700 leading-loose">
            Students integrate concepts, theories, and methods from multiple
            disciplines, deepening their understanding of a topic. Students
            acquire discipline-specific understandings and produce a synthesis
            across disciplines that allows them to explain concepts and solve
            problems of greater complexity.
          </p>
        </div>
      </div>
      <div className="flex md:justify-end">
        <button className="bg-amber-600 text-white px-4 py-2 font-medium md:mr-10 mt-5">Explore the curriculum</button>
      </div>
    </div>
  );
};

export default Integration;
