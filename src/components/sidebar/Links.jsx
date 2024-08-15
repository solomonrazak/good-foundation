import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    open: {
        transition: { staggerChildren: 0.1 },
        display: "flex", // ensures display when open
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
        transitionEnd: {
            display: "none", // hides after animation ends
        }
    }
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
};

const Links = ({ isOpen }) => {
    const items = [
        "Homepage", "Services", "Portfolio", "Contact", "About",
    ];

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="flex flex-col gap-8 items-center text-[30px] font-medium"
        >
            {items.map((item, index) => (
                <motion.a
                    href={`#${item}`}
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;
