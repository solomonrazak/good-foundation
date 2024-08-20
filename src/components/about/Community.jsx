import React from 'react';
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="w-full md:w-[30%]">
    <h1 className="text-2xl md:text-3xl font-medium text-gray-600 mb-10">About</h1>
    <p className="flex flex-col gap-4 mt-4 text-blue-800">
        <Link to="/about/welcome"><span className="hover:text-blue-400">Welcome to Good Foundation</span></Link>
        <Link><span className="hover:text-blue-400">Mission and History</span></Link>
        <Link><span className="hover:text-blue-400">Achievements</span></Link>
        <Link><span className="hover:text-blue-400">Quick Facts</span></Link>
        <Link><span className="hover:text-blue-400">Calendar</span></Link>
    </p>
  </div>
  )
}

export default Community