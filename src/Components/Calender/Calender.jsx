import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Imported Calendar from react-calendar
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const CustomCalendar = ({ setSelectedDate }) => { // Renamed to avoid conflict
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate.toDateString()); // Format date as needed
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold">Available Services on {date.toDateString()}</h2>
      <div className="mt-4">
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
