import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex flex-col border-2 justify-center items-center gap-8 p-10 m-10 rounded-md border-red-500 w-[90%] mx-auto">
      <div className="flex gap-8">
        
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} className=""/>
          <p className="mt-[4%] font-medium">:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p className="mt-[4%] font-medium">:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p className="mt-[4%] font-medium">:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        
      </div>
      <p className="text-center text-blue-900 font-medium text-2xl">Remains To Event</p>
      </div>
      

    );
  };

  export default ShowCounter;
  