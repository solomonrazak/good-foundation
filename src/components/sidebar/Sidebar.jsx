import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div>
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={variants}
        className="fixed top-0 right-0 w-[50%] h-full bg-white py-5 px-5"
      >
        <div className="h-[100%] my-auto items-center flex justify-center">
        <Links isOpen={open} />
        </div>
      </motion.div>
      <div className="z-50">
      <ToggleButton setOpen={setOpen} variants={variants}/>
      </div>
    </motion.div>
  );
};

export default Sidebar;
