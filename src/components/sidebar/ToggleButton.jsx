

// import React from 'react';
// import { motion } from 'framer-motion';

// const ToggleButton = ({ setOpen }) => {
//   return (
//     <button className="px-3 z-50" onClick={() => setOpen((prev) => !prev)} style={{"zIndex": "1000"}}>
//       <svg width="23" height="23" viewBox="0 0 23 23" className='z-50'>
//         <motion.path
//           strokeWidth="3"
//           stroke="black"
//           strokeLinecap="round"
//           d="M 2 2.5 L 20 2.5"
//           initial={open ? 'open' : 'closed'}
//           animate={open ? 'closed' : 'open'}
//           variants={{
//             closed: { d: 'M 2 2.5 L 20 2.5' },
//             open: { d: 'M 3 16.5 L 17 2.5' },
//           }}
//         />
//         <motion.path
//           strokeWidth="3"
//           stroke="black"
//           strokeLinecap="round"
//           d="M 2 9.423 L 20 9.423"
//           initial={open ? 'open' : 'closed'}
//           animate={open ? 'closed' : 'open'}
//           variants={{
//             closed: { opacity: 1 },
//             open: { opacity: 0 },
//           }}
//         />
//         <motion.path
//           strokeWidth="3"
//           stroke="black"
//           strokeLinecap="round"
//           d="M 2 16.346 L 20 16.346" 
//           initial={open ? 'open' : 'closed'}
//           animate={open ? 'closed' : 'open'}
//           variants={{
//             closed: { d: 'M 2 16.346 L 20 16.346' },
//             open: { d: 'M 3 2.5 L 17 16.346' },
//           }}
//         />
//       </svg>
//     </button>
//   );
// };

// export default ToggleButton;

import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen, open }) => {
  return (
    <button
      className="fixed top-7 right-2 px-3 z-50" // Ensure button is fixed and has a high z-index
      onClick={() => setOpen(prev => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="gray" // Ensure the color contrasts with the background
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
          initial={false}
          animate={open ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="gray" // Ensure the color contrasts with the background
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          initial={false}
          animate={open ? 'open' : 'closed'}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="gray" // Ensure the color contrasts with the background
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
          initial={false}
          animate={open ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
