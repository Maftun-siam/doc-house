import React, { useState } from 'react';
import Calendar from '../../Components/Calender/Calender'; // Updated import
import ServiceSelector from '../Appointment/ServiceSelector/ServiceSelector ';
import SlotSelector from './SlotSelector/SlotSelector';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState("April 30, 2022");
  const [selectedService, setSelectedService] = useState(null);   /* Name of the service that are selected */
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <Calendar setSelectedDate={setSelectedDate} />
        <ServiceSelector setSelectedService={setSelectedService} />
        {selectedService && (
          <SlotSelector selectedService={selectedService} />
        )}
      </div>
    </div>
  );
};

export default Appointment;
