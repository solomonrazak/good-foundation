import React from "react";
import { Link } from "react-router-dom";

const AdCom = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl text-gray-600 mb-10">Admissions</h1>
      <p className="flex flex-col gap-4 mt-4 text-blue-800">
        <Link>
          <span className="hover:text-blue-400">Inquire and Apply</span>
        </Link>
        <Link>
          <span className="hover:text-blue-400">Visit</span>
        </Link>
        <Link>
          <span className="hover:text-blue-400">Social Media</span>
        </Link>
        <Link>
          <span className="hover:text-blue-400">Non Discriminatory Policy</span>
        </Link>
      </p>
    </div>
  );
};

export default AdCom;
