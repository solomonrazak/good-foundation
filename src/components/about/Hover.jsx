import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome';
import MissionandHistory from './MissionandHistory';
import QuickFacts from './QuickFacts';
import Calendar from './Calendar';

const Hover = () => {

    const links = [
        {
            path: "/about/welcome",
            element: <Welcome />,
            name: "Welcome to Good Foundation"
        },
        {
            path: "/about/missionandhistory",
            element: <MissionandHistory />,
            name: "Mission and History"
        },
        {
            path: "achievements",
            element: "",
            name: "Achievements"
        },
        {
            path: "/about/quickfacts",
            element: <QuickFacts />,
            name: "Quick Facts"
        },
        {
            path: "/about/calendar",
            element: <Calendar />,
            name: "Calendar"
        }

    ]
  return (
    <div className="w-screen bg-green-400 absolute top-7 p-5 text-white">
        <div className='w-[100%] mx-auto'>
        <ul className="flex md:text-[13x] lg:text-2xl gap-14 justify-center py-7">
            {links.map((item) => (
                <Link to={item.path}><li key={item.name}>{item.name}</li></Link>
            ))}
        </ul>
        <div className='h-[0.9px] flex w-[90%] justify-center mx-auto bg-white my-6'></div>
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

export default Hover