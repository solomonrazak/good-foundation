import React, {useState} from 'react';
import { PopupWidget } from "react-calendly";
import { IoCall } from "react-icons/io5";
import mission1 from '../assets/images/foundation/mission1.JPG';
import mission2 from '../assets/images/foundation/mission2.JPG';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";


const Mission = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpenSchedule = () => {
    setIsOpen(true); // If using state variable
  };

  function openSchedule(){
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/solomonrazak99'
      
     
    });
    return false;
  }
  return (
    
    <div className="bg-white py-20 px-7">
        <h1 className="text-slate-800 font-bold mb-10">Mission</h1>
        <div className="w-3 h-1 rounded-l-full rounded-r-full bg-green-900 mb-7"></div>
        <div>
            <p className="text-slate-600 font-medium text-[22px]">Our Mission is to be an institution that is committed to the provision of strong basic career-focused education, moral and godly life
                and also training for one to be quick, resolute and effective thinker to become competent agents of transformation.
            </p>
            <div className="w-full h-[0.5px] bg-slate-300 my-8 mr-6"></div>
            <div className="space-y-5">
              <img src={mission1}alt=""/>
              <img src={mission2} alt=""/>
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <p className="text-2xl md:text-5xl text-gray-700 italic mt-8 flex md:flex-col"><span>Take Action</span><span className="pl-2">...</span></p>
            <div className="flex flex-col md:flex-row gap-3 mt-5 md:mt-0 md:gap-6 md:justify-end md:mr-10">
              <div>
                <button className="bg-amber-600 text-white w-40 md:h-20 md:w-20 p-2 font-medium" onClick={handleOpenSchedule}>Book</button>
                {isOpenNow && (
       
<div style={{ position: 'relative', left: '10px' }}>
  <PopupWidget
    url="https://calendly.com/solomonrazak99"
    rootElement={document.getElementById("root")}
    text="Click here to Book a Meeting!"
    textColor="#ffffff"
    color="#00a2ff"
  />
</div>
      )}
                </div>
                <button className="bg-amber-600 text-white w-40 md:h-20 md:w-20 p-2 font-medium">Apply</button>
                <Button className="bg-amber-600 text-white w-40 md:h-20 md:w-20 p-2 font-medium rounded-none" onPress={onOpen}>Give</Button>
                <Modal
                className="mx-5"
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: -150,
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
            </div>
        </div>

    </div>
  
  )
}

export default Mission;