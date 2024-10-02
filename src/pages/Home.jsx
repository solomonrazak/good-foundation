import React,{useEffect} from "react";
import Header from "../components/Header";
import Grid from "../components/Grid";
import SecondarySchool from "../components/SecondarySchool";
import Lower from "../components/levels/Lower";
import Middle from "../components/levels/Middle";
import High from "../components/levels/High";
import Boarding from "../components/levels/Boarding";
import Environment from "../components/Environment";
import Integration from "../components/Integration";
import Mission from "../components/Mission";

import AlumSlider from "../components/special/infinitecarousel/AlumSlider";
import VideoClip from "../components/special/VideoClip";
import calendar from "../assets/images/foundation/calendar.JPG";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-full">
      <Header />
      <Grid />
      <SecondarySchool />
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
        <Lower />
        <Middle />
        <High />
        <Boarding />
      </div>
      <div data-aos="fade-up">
      <Environment />
      </div>
      <div data-aos="fade-up">
      <Integration />
      </div>
     

      <AlumSlider />
      <img src={calendar} alt="" />
      <div data-aos="fade-up">
      <VideoClip />
      </div>
     
      <Mission />
    </div>
  );
};

export default Home;
