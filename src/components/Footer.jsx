import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <Logo />
        <div className="flex ">
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
