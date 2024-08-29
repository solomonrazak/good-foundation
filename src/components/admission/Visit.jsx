import React from "react";
import sampleHeader from "../../assets/images/sampleHeader.jpg";
import AdCom from "./AdCom";


const Visit = () => {
  return (
    <div>
      <div
        className="w-full h-[23rem] p-6 flex items-center"
        style={{
          backgroundImage: `url(${sampleHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-10 text-white font-medium text-2xl">
          <p>VISIT</p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-10 p-10 mt-10">
        <div className="w-full md:[w-65%] mb-8">
          <h1 className="text-[20px] md:text-2xl font-medium text-gray-500 mb-5">
            Experience the Warmth of Good Foundation
          </h1>
          <p className="md:text-[17px] leading-7 text-gray-600 mt-4">
            Visiting Good Foundation International School is more than just a
            campus tour; it's an immersive experience that showcases the heart
            and soul of our institution. From the moment you step onto our
            well-manicured grounds in the Nsawam Central District, you'll be
            greeted by the vibrant energy of our students and staff. The campus
            is designed to be both welcoming and inspiring, with modern
            facilities that reflect our commitment to academic excellence and
            holistic development. As you walk through our state-of-the-art
            classrooms, well-stocked libraries, and cutting-edge laboratories,
            you'll get a firsthand look at the resources we provide to ensure
            that every student reaches their full potential.
          </p>
          <p className="md:text-[17px] leading-7 text-gray-600 mt-4">
            The experience extends beyond just the facilities. Our dedicated
            tour guides, often senior students or staff members, provide
            insights into the daily life at Good Foundation. They share stories
            of academic achievements, extracurricular successes, and the strong
            sense of community that binds everyone at the school. You'll have
            the opportunity to interact with students and teachers, ask
            questions, and even sit in on a class if time permits. This
            engagement offers a deeper understanding of the values that drive
            our educational approach, as well as the warm, supportive
            environment that nurtures our students' growth.
          </p>
          <p className="md:text-[17px] leading-7 text-gray-600 mt-4">
            To ensure that your visit is as smooth and informative as possible,
            we encourage you to book an appointment in advance. Simply <a href="+2356732323" className="text-blue-600 font-medium">call</a> the
            numbers listed on our website, and our friendly staff will assist
            you in scheduling a tour that fits your availability. Whether you're
            a prospective parent, student, or educator, a visit to Good
            Foundation International School promises to be an enriching
            experience. We look forward to welcoming you to our campus and
            showing you why so many families trust us with their children's
            education.
          </p>
        </div>
        <div className="w-full md:w-[35%]">
          <AdCom />
        </div>
      </div>
    </div>
  );
};

export default Visit;
