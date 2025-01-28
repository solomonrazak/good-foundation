import React from "react";
import sampleHeader from "../assets/images/sampleHeader.jpg";
import charity from "../assets/images/newstaff/Charity-Brown.webp";
import lance from "../assets/images/newstaff/Lancelot-Solomon-Adarkwah.webp";
import linda from "../assets/images/newstaff/Linda-Acheampong.webp";
import margaret from "../assets/images/newstaff/Magaret-Duah.webp";
import eric from "../assets/images/newstaff/Mensah-Eric-Missiso.webp";
import efua from "../assets/images/newstaff/Linda-Afua-Amoah.webp";
import moses from "../assets/images/newstaff/Moses-Sevor.webp";
import prince from "../assets/images/newstaff/Prince-Phillip-Obeng.webp";
import samuel from "../assets/images/newstaff/Samuel-Hotohoe.webp";
import sarah from "../assets/images/newstaff/Sarah-Yaa-Amponsah.webp";
import hams from "../assets/images/newstaff/Saviour-Hams-Azamati.webp";
import seth from "../assets/images/newstaff/Seth-Tieku.webp";
import steph from "../assets/images/newstaff/Stephen-Edusei-Yirenkyi.webp";
import vida from "../assets/images/newstaff/Vida-Danso.webp";
import yaw from "../assets/images/newstaff/Yaw-Frimpong.webp";
import tt from "../assets/images/newstaff/Esther-Amaki-Tetteh.webp";
import esther from "../assets/images/newstaff/Esther-Tetteh-Agudah.webp";
import helena from "../assets/images/newstaff/Helena-Agyemang-Boakye.webp";
import baidoo from "../assets/images/newstaff/Godfred-Baidoo.webp";
import dd from "../assets/images/newstaff/Daniel-Agyarko.webp";
import agnes from "../assets/images/newstaff/Agnes-Boateng.webp";
import ansah from "../assets/images/newstaff/Ansah-Daniel-Sasraku.webp";
import StaffText from "../components/StaffText";
import StaffCard from "../components/StaffCard";

const staffData = [
  { name: "Charity Brown", role: "Teacher", image: charity },
  { name: "Lancelot Solomon Adarkwah", role: "Teacher", image: lance },
  { name: "Linda Acheampong", role: "Teacher", image: linda },
  { name: "Mensh Eric Missiso", role: "Teacher", image: eric },
  { name: "Margaret Duah", role: "Teacher", image: margaret },
  { name: "Linda Efua Amoah", role: "Teacher", image: efua },
  { name: "Moses Sevor", role: "Teacher", image: moses },
  { name: "Prince Phillip Obeng", role: "Teacher", image: prince },
  { name: "Samuel Hotohoe", role: "Teacher", image: samuel },
  { name: "Sarah Yaa Amponsah", role: "Teacher", image: sarah },
  { name: "Saviour Hams Azamati", role: "Teacher", image: hams },
  { name: "Seth Tieku", role: "Teacher", image: seth },
  { name: "Stephen Edusei Yirenkyi", role: "Teacher", image: steph },
  { name: "Vida Danso ", role: "Teacher", image: vida },
  { name: "Yaw Frimpong", role: "Teacher", image: yaw },
  { name: "Esther Amaki Tetteh", role: "Teacher", image: tt },
  { name: "Esther Tetteh Agudah", role: "Teacher", image: esther },
  { name: "Helena Agyemang Boakye", role: "Teacher", image: helena },
  { name: "Godfred Baidoo", role: "Teacher", image: baidoo },
  { name: "Daniel Agyarko", role: "Teacher", image: dd },
  { name: "Agnes Boateng", role: "Teacher", image: agnes },
  { name: "Ansah Daniel Sasraku", role: "Teacher", image: ansah},
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
