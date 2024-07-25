
// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useAnimate, useCycle } from 'framer-motion';
// import aburi from "../assets/images/schools/aburi.png";
// import accragirls from "../assets/images/schools/accragirls.png";
// import adisadel from "../assets/images/schools/adisadel.png";
// import botwe from "../assets/images/schools/botwe.png";
// import ksts from "../assets/images/schools/ksts.png";
// import louis from "../assets/images/schools/louis.png";
// import owass from "../assets/images/schools/owass.png";
// import peters from "../assets/images/schools/peters.png";
// import prempeh from "../assets/images/schools/prempeh.png";
// import roses from "../assets/images/schools/roses.png";
// import thomas from "../assets/images/schools/thomas.png";
// import wesleygirls from "../assets/images/schools/wesleygirls.png";
// import presec from "../assets/images/schools/presec.png";

// import { motion, useTransform, useScroll } from "framer-motion";


// const images = [aburi, accragirls, ksts, presec, owass, adisadel, roses, botwe, louis, prempeh, thomas, wesleygirls, peters];


// const SecondarySchool = () => {


  
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });
  

  
//   return (
//     <div className="p-6">
//       <p className="text-4xl md:text-6xl text-gray-600">
//         Graduates from Good Foundation International School attend the most
//         prestigious Secondary Institutions across the country.
//       </p>
//       <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default SecondarySchool;


import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aburi from "../assets/images/schools/aburi.png";
import accragirls from "../assets/images/schools/accragirls.png";
import adisadel from "../assets/images/schools/adisadel.png";
import botwe from "../assets/images/schools/botwe.png";
import ksts from "../assets/images/schools/ksts.png";
import louis from "../assets/images/schools/louis.png";
import owass from "../assets/images/schools/owass.png";
import peters from "../assets/images/schools/peters.png";
import prempeh from "../assets/images/schools/prempeh.png";
import roses from "../assets/images/schools/roses.png";
import thomas from "../assets/images/schools/thomas.png";
import wesleygirls from "../assets/images/schools/wesleygirls.png";
import presec from "../assets/images/schools/presec.png";

const images = [aburi, accragirls, ksts, presec, owass, adisadel, roses, botwe, louis, prempeh, thomas, wesleygirls, peters];

const SecondarySchool = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -5000]);

  return (
    <div className="p-10">
      <p className="text-4xl md:text-6xl text-gray-600">
        Graduates from Good Foundation International School attend the most
        prestigious Secondary Institutions across the country.
      </p>
      <section ref={targetRef} className="h-[100vh] bg-white">
        <div className=" top-0 flex h-screen items-center overflow-hidden gap-5">
          <motion.div style={{ x }} className="flex gap-4">
            {images.map((image, index) => (
              <motion.img 
                src={image} 
                key={index} 
                width={130} 
                height={100} 
                className="object-cover" 
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecondarySchool;

