import React, { useContext, useState } from 'react';
import Calendar from '../../Components/Calender/Calender'; // Updated import
import ServiceSelector from '../Appointment/ServiceSelector/ServiceSelector ';
import SlotSelector from './SlotSelector/SlotSelector';
import { AuthContext } from '../../providers/AuthProvider';
import Popup from './Popup/Popup';
import axiosPublic from '../../Components/hooks/useAxiosPublic';

const Appointment = () => {
  const [name, setName] = useState(''); // Store name
  const [email, setEmail] = useState(''); // Store email
  const [selectedDate, setSelectedDate] = useState("April 30, 2022"); // Set selected date
  const [selectedService, setSelectedService] = useState(null); // Store selected service
  const [selectedSlot, setSelectedSlot] = useState(null); // Store selected slot
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup control state
  const { user } = useContext(AuthContext);

  // Function to handle the selected slot and show popup
  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    setIsPopupOpen(true); // Open popup when a slot is clicked
  };

  // onSubmit function passed to Popup
  const handlePopupSubmit = async (formData) => {
    setName(formData.name);
    setEmail(formData.email);

    const appointmentData = {
      name: user?.name || formData.name, // Use user's name if available, or form name
      email: user?.email || formData.email, // Use user's email if available, or form email
      date: selectedDate,
      service: selectedService,
      slot: selectedSlot
    };

    try {
      const response = await axiosPublic.post('/myappointment', appointmentData);
      console.log("Appointment booked successfully:", response.data);
      alert('Appointment booked successfully!');
      setIsPopupOpen(false); // Close the popup after submission
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <Calendar setSelectedDate={setSelectedDate} />
        <ServiceSelector setSelectedService={setSelectedService} />
        {selectedService && (
          <SlotSelector selectedService={selectedService} handleSlotClick={handleSlotClick} />
        )}
      </div>
      {isPopupOpen && (
        <Popup
          selectedDate={selectedDate}
          selectedTime={selectedSlot}
          onSubmit={handlePopupSubmit}
        />
      )}
    </div>
  );
};

export default Appointment;
