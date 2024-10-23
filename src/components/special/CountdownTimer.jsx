// import React, { useState } from 'react';
// import { useCountDown } from '../../hooks/useCountDown.js';


// import ExpiredNotice from './ExpiredNotice';
// import ShowCounter from './ShowCounter';


// const eventComing = new Date('2024-12-31T23:59:59');

// const CountdownTimer = ({targetDate}) => {
//   const [upcomingEvent, setUpcomingEvent] = useState(eventComing);
//   const [days, hours, minutes, seconds] = useCountDown(upcomingEvent);

//   if (days + hours + minutes + seconds <= 0) {
//     return <ExpiredNotice />;
//   } else {
//     return (
//       <ShowCounter
//         days={days}
//         hours={hours}
//         minutes={minutes}
//         seconds={seconds}
//       />
//     );
//   }
// };
// export default CountdownTimer;