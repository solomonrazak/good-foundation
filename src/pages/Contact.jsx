import React from 'react';
import { FaHouseUser } from "react-icons/fa";
import sampleHeader from '../assets/images/sampleHeader.jpg'
import { FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Map from '../components/special/Map';

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

      <div className="py-20 px-12 flex flex-col md:flex-row justify-between gap-10 md:gap-0 bg-gray-100">
        <div className="space-y-5 md:space-y-10">
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
            <form>
                <p className="text-2xl md:text-4xl mb-5">Send Message</p>
                <div className="flex flex-col gap-3">
                    <input type="text" placeholder="Full Name" className="md:w-[400px] text-black border-2 rounded-md py-2 border-slate-900 outline-none focus:outline-none pl-2 focus:border-blue-200"/>
                    <input type="text" placeholder="Email"  className="md:w-[400px] text-black border-2 rounded-md py-2 border-slate-900 outline-none focus:outline-none focus:border-blue-200 pl-2"/>
                    <input type="text" placeholder="Phone Number"  className="md:w-[400px] text-black border-2 rounded-md py-2 border-slate-900 outline-none focus:outline-none focus:border-blue-200 pl-2"/>
                    <textarea className="md:w-[400px] text-black border-2 rounded-md py-2 border-slate-900 outline-none focus:outline-none focus:border-blue-200 pl-2" placeholder='Enter your message'></textarea>
                </div>
              <button className='w-full bg-green-500 py-2 text-white font-medium rounded-md mt-4'>Send</button>
            </form>
        </div>
      </div>
      <Map />

    </div>
  )
}

export default Contact;