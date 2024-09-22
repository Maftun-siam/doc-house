// SlotSelector.js
import React from 'react';

const slots = {
  "Teeth Orthodontics": [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "11:00 AM - 12:00 PM"
  ],
  "Cosmetic Dentistry": [
    "10:05 AM - 11:30 AM",
  ],
  "Teeth Cleaning": [
    "8:00 AM - 9:00 AM"
  ]
};

const SlotSelector = ({ selectedService, handleSlotClick }) => {
  const availableSlots = slots[selectedService] || [];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">
        Available slots for {selectedService}
      </h3>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {availableSlots.length > 0 ? (
          availableSlots.map((slot, index) => (
            <button
              key={index}
              className="nowSlot px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => handleSlotClick(slot)}
            >
              {slot}
            </button>
          ))
        ) : (
          <p>No slots available.</p>
        )}
      </div>
    </div>
  );
};

export default SlotSelector;
