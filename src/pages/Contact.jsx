import React from 'react';
import { FaHouseUser } from "react-icons/fa";
import sampleHeader from '../assets/images/sampleHeader.jpg'
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
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
          <p>ABOUT</p>
          <p>Student Calendar</p>
        </div>
      </div>

      <div className="p-8 flex flex-col md:flex-row justify-between">
        <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800">Need Any Help? Contact Us Now!</h2>
            <div className="flex items-center gap-6">
                
                <FaHouseUser  className="text-green-500 text-[25px]"/>
                
                <div>
                    <p className="text-slate-700 md:text-[20px] font-medium">Address</p>
                    <p className="text-slate-700 md:text-[20px]">
                        <span>Road 1234, GRA Street Market Circle</span>
                    </p>
                </div>

            </div>

            <div className="flex items-center gap-6">
                
                <FaPhone  className="text-green-500 text-[25px]"/>
                
                <div>
                    <p className="text-slate-700 md:text-[20px] font-medium">Phone</p>
                    <p className="text-slate-700 md:text-[20px]">
                        <span>+233 456 466 355</span>
                    </p>
                </div>

            </div>

            <div className="flex items-center gap-6">
                
                <MdMarkEmailRead  className="text-green-500 text-[25px]"/>
                
                <div>
                    <p className="text-slate-700 md:text-[20px] font-medium">Email</p>
                    <p className="text-slate-700 md:text-[20px]">
                        <span>info@goodfoundation.com</span>
                    </p>
                </div>

            </div>

        </div>
        <div>
            <form></form>
        </div>
      </div>

    </div>
  )
}

export default Contact;