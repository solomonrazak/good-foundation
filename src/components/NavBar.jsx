import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Hover from "./about/Hover";
import Sidebar from "./sidebar/Sidebar";
import AdmissionHover from "./admission/AdmissionHover";

import { IoCall } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const NavBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [showHover, setShowHover] = useState(false);
  const [showAdHover, setShowAdHover] = useState(false);

  const handleMouseEnter = () => {
    setShowHover(true);
  };

  const handleMouseLeave = () => {
    setShowHover(false);
  };

  const handleAdHoverEnter = () => {
    setShowAdHover(true);
  };
  const handleAdHoverLeave = () => {
    setShowAdHover(false);
  };

  return (
    <div className="flex justify-between items-center md:px-3 py-2 border-b-4 border-green-400 fixed top-0 w-full bg-white z-40">
      

     
      <NavLink to="/">
      <Logo />
      </NavLink>
      <ul className="hidden md:flex gap-8 font-medium">
        
          <li
            onMouseEnter={handleMouseEnter}
            onClick={() => setShowHover(true)}
          >
            About
            {showHover && (
              <div
                className="absolute w-[100vw] left-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Hover />
              </div>
            )}
          </li>
        
        <NavLink to="/staff">
          <li>Staff</li>
        </NavLink>
        
          <li onMouseEnter={handleAdHoverEnter}>
            Admissions
            {showAdHover && (
              <div
                className="absolute w-[100vw] left-0"
                onMouseEnter={handleAdHoverEnter}
                onMouseLeave={handleAdHoverLeave}
              >
                <AdmissionHover />
              </div>
            )}
          </li>
        
        <NavLink to="/event">
          <li>Events</li>
        </NavLink>

        <NavLink to="/contact">
          <li>Contact Us</li>
        </NavLink>
      </ul>
      <div>
        <Button
          className="hidden md:block text-white bg-amber-600 px-2 py-1 rounded-none"
          onPress={onOpen}
        >
          Donate
        </Button>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent className="bg-gray-100">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-2xl text-amber-600">
                  Support Our Cause
                </ModalHeader>
                <ModalBody className="text-gray-600 font-medium">
                  <p>
                    Thank you for choosing to support Good Foundation
                    International School! Your donation will go a long way in
                    helping us continue to provide quality education. To donate,
                    please call our donation line and follow the simple
                    instructions provided by our team.
                  </p>
                  <a href="tel:+233536732323" className="block w-full">
                  <button className="flex w-full bg-green-500 justify-center gap-5 items-center text-white py-2 rounded-md mt-4">Click here to call <IoCall /></button>
                  </a>
                  <p className="mt-4">Every contribution makes a difference. Thank you for your generosity!</p>
                 
                 
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default NavBar;
