import React from "react";
import AdCom from "./AdCom";

const Policy = () => {
  return (
    <div  className="flex flex-col-reverse md:flex-row gap-10 p-10 mt-20 mb-10">
      <div className="w-full md:[w-65%]">
        <h1 className="text-2xl md:text-4xl text-gray-600 mb-7 font-medium">
          Nondiscriminatory Policy
        </h1>
        <p className="flex flex-col space-y-5 text-slate-700 leading-7">
        <span>
          Good Foundation International School is committed to providing a
          nurturing, inclusive, and respectful environment that is free from
          unlawful discrimination and harassment. Our school community is built
          on the fundamental dignity and worth of every individual, reflecting
          our deep respect for African values of unity, respect, and communal
          support.
        </span>
        <span>
          In compliance with all applicable laws of the Republic of Ghana and in
          alignment with our core values, Good Foundation International School
          does not discriminate on the basis of ethnicity, religion, sex, age,
          disability, national origin, social or economic status, marital
          status, family responsibilities, or any other legally protected
          characteristic in admissions, financial aid, employment practices, or
          in the administration of any of our educational programs or
          activities, including extracurricular and athletic programs.
        </span>
        <span>
          Our commitment to these principles ensures that every member of the
          Good Foundation International School community is treated with the
          utmost respect, fairness, and equality, fostering an environment where
          all can thrive.
        </span>
        </p>
      </div>
      <div className="w-full md:w-[35%]">
        <AdCom />
      </div>
    </div>
  );
};

export default Policy;
