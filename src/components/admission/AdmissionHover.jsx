import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        path: "/about/welcome",
        element: "",
        name: "Admissions"
    },
    {
        path: "/about/missionandhistory",
        element: "",
        name: "Apply"
    },
    {
        path: "achievements",
        element: "",
        name: "Visit"
    },
    {
        path: "/about/quickfacts",
        element: "",
        name: "Nondiscriminatory Policy"
    },
   

]

const AdmissionHover = () => {
  return (
    <div className="w-screen bg-amber-600 absolute top-6 p-5 text-white">
        <div className='w-[100%] mx-auto'>
        <ul className="flex md:text-[13x] lg:text-2xl gap-14 justify-between py-7 px-5">
            {links.map((item) => (
                <Link to={item.path}><li key={item.name}>{item.name}</li></Link>
            ))}
        </ul>
        <div className='h-[0.9px] flex w-[97%] justify-center mx-auto bg-white my-6'></div>
        </div>
        <div className="flex flex-col items-end justify-center px-5">
            
            <p className="flex flex-col gap-3 font-medium">
                <span className="my-4 text-[20px] font-medium pr-20">Community</span>
                <span>Alumi</span>
                <span>Speaker Series</span>
                <span>Job Opportunities</span>
                <span>Departments</span>
                <span>Staff</span>
            </p>
        </div>

    </div>
  )
}

export default AdmissionHover;