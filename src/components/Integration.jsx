// import React, {useEffect} from "react";
// import found1 from '../assets/images/foundation/found1.JPG';
// import found7 from '../assets/images/foundation/found7.JPG';
// import found9 from '../assets/images/foundation/found9.JPG';
// import found8 from '../assets/images/foundation/found8.JPG';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Integration = () => {
//   useEffect(() => {
//     AOS.init();
//   }, [])
//   return (
//     <div className="py-14 px-8">
//       <h1 className="font-medium text-slate-500 text-2xl my-8 py-3">Integration</h1>
//       <div className="w-3 h-1 rounded-l-full rounded-r-full bg-green-900 mb-7"></div>
//       <div className="flex flex-col md:flex-row gap-7">
//         <div className="md:w-1/2">
//           <p className="text-slate-700 text-5xl leading-[3.7rem] tracking-wide">
//             Interdisciplinarity and Integration Are Central to the Good
//             Foundation Model
//           </p>
//         </div>
//         <div className="md:w-1/2">
//           <p className="text-slate-700 leading-loose pt-4">
//             Students integrate concepts, theories, and methods from multiple
//             disciplines, deepening their understanding of a topic. Students
//             acquire discipline-specific understandings and produce a synthesis
//             across disciplines that allows them to explain concepts and solve
//             problems of greater complexity.
//           </p>
//         </div>
//       </div>
//       <div className="flex md:justify-end">
//         <button className="bg-amber-600 text-white text-[19px] px-4 py-2 font-medium md:mr-10 mt-7">Explore the curriculum</button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
//         <img src={found1} data-aos="fade-up"/>
//         <img src={found7} data-aos="fade-up"/>
//         <img src={found8} data-aos="fade-up"/>
//         <img src={found9} data-aos="fade-up"/>
//       </div>
//     </div>
//   );
// };

// export default Integration;
import React, { useState, useEffect } from "react";
import found1 from '../assets/images/foundation/found1.JPG';
import found7 from '../assets/images/foundation/found7.JPG';
import found8 from '../assets/images/foundation/found8.JPG';
import found9 from '../assets/images/foundation/found9.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Integration = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Create a promise that resolves when all images are loaded
    const imagePromises = [found1, found7, found8, found9].map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;  // To prevent blocking in case of an error
      });
    });

    // Wait for all images to load
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);  // Once images are loaded, update state
    });
  }, []);

  if (!imagesLoaded) {
    // Optionally, you can display a loading spinner or something similar
    return <div>Loading images...</div>;
  }

  // Once the images are loaded, display the page
  return (
    <div className="py-14 px-8">
      <h1 className="font-medium text-slate-500 text-2xl my-8 py-3">Integration</h1>
      <div className="w-3 h-1 rounded-l-full rounded-r-full bg-green-900 mb-7"></div>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="md:w-1/2">
          <p className="text-slate-700 text-5xl leading-[3.7rem] tracking-wide">
            Interdisciplinarity and Integration Are Central to the Good
            Foundation Model
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="text-slate-700 leading-loose pt-4">
            Students integrate concepts, theories, and methods from multiple
            disciplines, deepening their understanding of a topic. Students
            acquire discipline-specific understandings and produce a synthesis
            across disciplines that allows them to explain concepts and solve
            problems of greater complexity.
          </p>
        </div>
      </div>
      <div className="flex md:justify-end">
        <button className="bg-amber-600 text-white text-[19px] px-4 py-2 font-medium md:mr-10 mt-7">
          Explore the curriculum
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <img src={found1} data-aos="fade-up" />
        <img src={found7} data-aos="fade-up" />
        <img src={found8} data-aos="fade-up" />
        <img src={found9} data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Integration;

