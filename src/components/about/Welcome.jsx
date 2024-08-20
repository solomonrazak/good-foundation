import React from "react";
import founder from "../../assets/images/founder.jpg";
import Community from "./Community";

const Welcome = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-32 px-10 gap-14 md:gap-20 pb-14">
      <div className="md:w-[70%]">
        <h1 className="text-2xl md:text-5xl font-medium text-gray-600">Welcome to Good Foundation</h1>
        <div className="h-[0.07px] w-full bg-gray-400 my-10"></div>
        <div className="w-full flex flex-col md:flex-row gap-10 my-10">
          <p className="w-full md:w-1/2 text-[16px] text-gray-700 leading-8">
            Good Foundation gains so much of its strength from our collective efforts and
            from all of us supporting the highest and best potential of our
            students and ourselves. I cant think of a more exciting place to be
            than at Good Foundation. As all schools and communities strive to engage
            students with meaningful, rigorous, and safe educational
            experiences, Foundation mission positions us to be leaders in shaping the
            future of early childhood through high school education. Our
            reliance on teaching, thinking, and other generative processes
            engages the unique talents of each student and ultimately produces
            graduates who are successful in todays knowledge-generation,
            information-management economy and prepared for the challenges and
            opportunities of life.
          </p>
          <img
            src={founder}
            width={100}
            height={80}
            className="w-full md:w-1/2 h-auto max-h-80"
          />
        </div>
        <div className="w-full leading-8 text-[16px]">
          <p>
            Good Foundation guiding principle is to educate the whole child for
            the whole world. We center our educational programs around a
            narrative of cultural history, which we call the "Spiral Curriculum"
            and that ties each of the traditional academic disciplines to one
            another in their interconnected development over the course of human
            history. This interdisciplinary approach provides both essential
            thinking skills and background knowledge for successful leadership
            in the future. As we imagine a global future that calls for clear
            and discerning thinkers, able to engage in the world through
            multiple disciplines, with new technologies, and a deep
            understanding of humanity and history, the Spiral Curriculum
            provides all Good Foundatin graduates with a durable foundation for future
            leadership and success in work and in life. At Good Foundation, we embrace each
            students interests and strengths through our project-based learning
            experiences, elective programs, and advanced programs in Science,
            Art, STEM, and Wellness. As a result, Foundation graduates thrive where
            the route to success requires wisdom rooted in foundational
            knowledge. From the Spiral Curriculum to the resilience and
            confidence developed through years of encountering and working at
            challenging and relevant academic programs and growth experiences,
            our alumni are set up to live robust and fulfilling lives. One of
            the distinctions of Ross is the quality of our departments. The
            stewardship and recruitment of our departments are critically important
            to our success. Under the leadership of General Marcus, our
            students are looked after by some of the leading secondary schools in the
            country. I invite you to explore our website and
            learn more about the remarkable opportunities Good Foundation offers and I hope
            you will visit our Institution to experience firsthand what makes Good Foundation
            such a unique and welcoming educational center.
          </p>
        </div>
        <p className="my-10 font-bold text-gray-700 text-[16px]">General Marcus, Head of School</p>
      </div>
      <Community />
     
    </div>
  );
};

export default Welcome;
