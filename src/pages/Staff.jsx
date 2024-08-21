import React from "react";
import sampleHeader from "../assets/images/sampleHeader.jpg";
import teacher from "../assets/images/teacher.jpg";

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

      <div className="p-10 flex flex-col-reverse md:flex-row gap-8">
        <div className="md:w-[60%]">
            <div className="mb-20">
                <h1 className="text-[20px] font-medium text-blue-900 md:text-[25px] py-4">Senior Leadership Team</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h1 className="text-[20px] font-medium text-blue-900 md:text-[25px] py-4">Teachers</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h1 className="text-[20px] font-medium text-blue-900 md:text-[25px] py-4">Support Staff</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                    <div>
                        <img src={teacher} width={150} height={150} className="object-contain"/>
                        <p className="text-2xl font-medium text-gray-600">Mr Marcus Gavey</p>
                        <p className="text-gray-500 mb-1">Executive HeadTeacher</p>
                        <div className="bg-blue-900 h-1 w-12"></div>
                    </div>
                </div>
            </div>

        </div>
        <div className="p-5 bg-amber-600 text-white rounded-md flex flex-col gap-4 w-full md:w-[40%] md:absolute top-[35rem] right-5">
          <p className="leading-7 font-medium">
            At Good Foundation Junior High School, we believe that our educators
            and staff are the backbone of our commitment to fostering a
            nurturing and enriching learning environment. Our team is composed
            of passionate, experienced, and highly qualified professionals who
            are dedicated to the academic and personal growth of each student.
          </p>

          <p className="leading-7 font-medium">
          Our educators come from diverse backgrounds, bringing a wealth of experience and unique perspectives to the classroom. They are committed to continuous professional development, staying abreast of the latest educational practices, and fostering a collaborative environment that encourages innovation and creativity.
          </p>
          <p className="leading-7 font-medium">
          Together, we strive to create a school community where every student feels valued, supported, and challenged to reach their fullest potential. We are proud to introduce the dedicated staff members who make Good Foundation Junior High School a place of excellence and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
