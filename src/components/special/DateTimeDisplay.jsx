const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-2xl md:text-5xl font-medium">{value}</p>
        <span className="text-red-500 text-[17px]">{type}</span>
      </div>
    );
  };
  
  export default DateTimeDisplay;