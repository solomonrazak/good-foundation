import React from 'react';

const Mission = () => {
  return (
    <div className="bg-gray-100 py-20 px-7">
        <h1 className="text-slate-800 font-bold mb-10">Mission</h1>
        <div className="w-3 h-1 rounded-l-full rounded-r-full bg-green-900 mb-7"></div>
        <div>
            <p className="text-slate-600 font-medium text-[22px]">Our Mission is to be an institution that is committed to the provision of strong basic career-focused education, moral and godly life
                and also training for one to be quick, resolute and effective thinker to become competent agents of transformation.
            </p>
            <div className="w-full h-[0.5px] bg-slate-300 my-8 mr-6"></div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <p className="text-2xl md:text-5xl text-gray-700 italic mt-8 flex md:flex-col"><span>Take Action</span><span className="pl-2">...</span></p>
            <div className="flex flex-col md:flex-row gap-3 mt-5 md:mt-0 md:gap-6 md:justify-end md:mr-10">
                <button className="bg-amber-600 text-white w-40 md:h-20 md:w-20 p-2 font-medium">Visit</button>
                <button className="bg-amber-600 text-white w-40 md:h-20 md:w-20 p-2 font-medium">Apply</button>
                <button className="bg-amber-600 text-white w-40 md:h-20 md:w-20 p-2 font-medium">Give</button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Mission;