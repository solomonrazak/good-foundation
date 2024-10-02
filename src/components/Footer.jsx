import React, {useEffect} from "react";
import gfis from '../assets/images/gfis.png'
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-green-400 p-12 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 mb-8" data-aos="fade-up">
        <h1 className="text-xl col-span-3 font-bold text-white md:col-span-2">Good Foundation International School</h1>
        <div className="hidden md:flex gap-4 text-white text-2xl md:col-span-1 ml-40">
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 md:my-16" >
      <div className="flex flex-col md:col-span-2 text-white">
        <h1 className="font-bold mb-5">ABOUT</h1>
        <p>Good founcation International School is an academic institution that is commited to the provision of strong basic
          career-focused education, moral and godly life and also training for one to be quick, resolute and effective thinker to
          become competent agents of transformation.
        </p>
        <div className="mt-7">
          <p>18 GoodFriedn Drive</p>
          <p>Nsawam Municpal</p>
        </div>
      </div>
      <div className="text-white">
        <h1 className="font-bold mb-5">Contact</h1>
        <div className="leading-7">
        <p>Junior High School: 000 000 000</p>
        <p>Basic School: 000 000 000</p>
        <p>Pre-School: 000 000 000</p>
        <p>Email Us:info@gfis.school</p>
        </div>
      </div>
      <div className="md:ml-10 text-white">
        <h1 className="font-bold text-white mb-5">Quick Links</h1>
        <div className="leading-7">
        <p>Contact</p>
        <p>Apply</p>
        <p>Visit</p>
        <p>Donate</p>
        </div>
      </div>
      </div>
      <div className="w-full h-[1.5px] bg-white my-8"></div>
      <div className="flex md:hidden mb-3">
        <p className="text-white">Social Links: </p>
        <div className="flex items-center text-white gap-3 px-2">
        <FaFacebookF />
          <FaYoutube />
          <FaLinkedin />

        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center text-white text-sm">
        <img src={gfis} width={40} height={40} className="text-white hidden md:block"/>
        <p>Copyright&copy; Good Foundation International School</p>
        
        </div>
        <p className="text-xs text-white mt-3">Developed by Super Simple - Dexter Inc.</p>
        
      </div>
    </div>
  );
};

export default Footer;
