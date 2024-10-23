
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.1 },
    display: "flex",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    transitionEnd: { display: "none" },
  },
};

const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const subLinksVariants = {
  open: {
    opacity: 1,
    maxHeight: "500px", 
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    transition: { duration: 0.3 },
  },
};

const Links = ({ isOpen }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleAdmissions = () => setIsAdmissionsOpen(!isAdmissionsOpen);

  const items = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about", hasSubLinks: true, toggle: toggleAbout, isOpen: isAboutOpen, isClickable: false },
    { label: "Staff", to: "/staff" },
    { label: "Admissions", to: "/admission", hasSubLinks: true, toggle: toggleAdmissions, isOpen: isAdmissionsOpen, isClickable: false },
    { label: "Event", to: "/event" },
    { label: "Contact Us", to: "/contact" },
    { label: "Curriculum", to: "/curriculum" },
  ];

  const aboutSubLinks = [
    { label: "Welcome", to: "/about/welcome" },
    { label: "Mission", to: "/about/missionandhistory" },
    { label: "Achievements", to: "/about/achievements" },
    { label: "Quick Facts", to: "/about/quickfacts" },
    { label: "Calendar", to: "/about/calendar" },
  ];

  const admissionsSubLinks = [
    { label: "Admissions", to: "/admissions/main-admission" },
    { label: "Apply", to: "/admissions/apply" },
    { label: "Visit", to: "/admissions/visit" },
    { label: "Nondiscriminatory Policy", to: "/admissions/nondiscriminatorypolicy" },
  ];

  return (
    <motion.div
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    variants={variants}
    className="flex flex-col gap-5 items-start text-[20px] font-medium pl-10"
  >
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <Link to={item.to} onClick={item.hasSubLinks ? item.toggle : undefined}>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={item.hasSubLinks ? "cursor-pointer flex items-center" : ""}
          >
            {item.label}
            {item.hasSubLinks && (
              <motion.span
                className="ml-2"
                animate={{ rotate: item.isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
               <IoIosArrowDown />
              </motion.span>
            )}
          </motion.div>
        </Link>

        {item.hasSubLinks && (
          <motion.div
            initial="closed"
            animate={item.isOpen ? "open" : "closed"}
            variants={subLinksVariants}
            className="overflow-hidden flex flex-col pl-1 gap-2"
          >
            {(item.label === "About" ? aboutSubLinks : admissionsSubLinks).map((subLink, subIndex) => (
              <Link key={subIndex} to={subLink.to}>
                <motion.div
                  className="text-[18px] font-normal"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {subLink.label}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </React.Fragment>
    ))}
  </motion.div>
  );
};

export default Links;

