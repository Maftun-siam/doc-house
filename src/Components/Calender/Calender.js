// Calendar.js
import React, { useState } from 'react';

const Calendar = ({ setSelectedDate }) => {
  const [date, setDate] = useState("April 30, 2022");

  const handleDateClick = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold">Available Services on {date}</h2>
      <div className="mt-4">
        {/* Add your calendar component or logic here */}
        {/* Example: */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleDateClick("April 30, 2022")}
        >
          April 30, 2022
        </button>
      </div>
    </div>
  );
};

export default Calendar;
