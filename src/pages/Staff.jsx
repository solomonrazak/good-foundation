// import React from "react";
// import sampleHeader from "../assets/images/sampleHeader.jpg";
// import teacher from "../assets/images/teacher.jpg";
// import charity from "../assets/images/newstaff/Charity-Brown.webp";
// import lance from "../assets/images/newstaff/Lancelot-Solomon-Adarkwah.webp";
// import StaffText from "../components/StaffText";
// import StaffCard from "../components/StaffCard";

// const staffData = [
//   { name: "Mr Marcus Gavey", role: "Executive HeadTeacher", image: teacher },
//   { name: "Charity Brown", role: "Teacher", image: charity },
//   { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
//   // Add more staff members as needed
// ];

// const Staff = () => {
//   return (
//     <div>
//       <div
//         className="w-full h-[25rem] p-6 flex items-center"
//         style={{
//           backgroundImage: `url(${sampleHeader})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="flex flex-col gap-10 text-white font-medium text-2xl">
//           <p>OUR STAFF</p>
//           <p>THE STAFF TEAM AT GOOD FOUNDATION</p>
//         </div>
//       </div>

//       <div className="p-10 flex flex-col-reverse md:flex-row gap-8">
//         <div className="md:w-[60%]">
//           <div className="mb-20">
//             <h1 className="text-[20px] font-medium text-blue-900 md:text-[25px] py-4">
//               Staff Team
//             </h1>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <div>
//                 <img
//                   src={teacher}
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//                 <p className="text-2xl font-medium text-gray-600">
//                   Mr Marcus Gavey
//                 </p>
//                 <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
//                 <div className="bg-blue-900 h-1 w-12"></div>
//               </div>
//               <div>
//                 <img
//                   src={teacher}
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//                 <p className="text-2xl font-medium text-gray-600">
//                   Mr Marcus Gavey
//                 </p>
//                 <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
//                 <div className="bg-blue-900 h-1 w-12"></div>
//               </div>
//               <div>
//                 <img
//                   src={teacher}
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//                 <p className="text-2xl font-medium text-gray-600">
//                   Mr Marcus Gavey
//                 </p>
//                 <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
//                 <div className="bg-blue-900 h-1 w-12"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="p-5 bg-amber-600 text-white rounded-md flex flex-col gap-4 w-full md:w-[40%] md:absolute top-[35rem] right-5">
//           <StaffText />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Staff;

import React from "react";
import sampleHeader from "../assets/images/sampleHeader.jpg";
import teacher from "../assets/images/teacher.jpg";
import charity from "../assets/images/newstaff/Charity-Brown.webp";
import lance from "../assets/images/newstaff/Lancelot-Solomon-Adarkwah.webp";
import StaffText from "../components/StaffText";
import StaffCard from "../components/StaffCard";

const staffData = [
  { name: "Mr Marcus Gavey", role: "Executive HeadTeacher", image: teacher },
  { name: "Charity Brown", role: "Teacher", image: charity },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  // Add more staff members as needed
];

const Staff = () => {
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
          <p>OUR STAFF</p>
          <p>THE STAFF TEAM AT GOOD FOUNDATION</p>
        </div>
      </div>

      <div className="p-10 flex flex-col-reverse md:flex-row gap-14">
        <div className="md:w-[65%]">
          <div className="mb-20">
            <h1 className="text-[20px] font-medium text-blue-900 md:text-[25px] py-4">
              Staff Team
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {staffData.map((staff, index) => (
                <StaffCard
                  key={index}
                  name={staff.name}
                  role={staff.role}
                  image={staff.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[35%] md:absolute top-[30rem] right-5">
          <StaffText />
        </div>
      </div>
    </div>
  );
};

export default Staff;

