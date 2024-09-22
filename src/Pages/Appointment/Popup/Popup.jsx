import React, { useState } from "react";

const Popup = ({ selectedDate, selectedTime, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleForm = (e) => {
    e.preventDefault();

    // Send data to parent component
    onSubmit({
      name,
      email,
    });

    // Reset form fields
    setName('');
    setEmail('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => onSubmit({ name: '', email: '' })} // Close the modal when 'X' is clicked
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Book Appointment</h3>
        <p className="py-4">Selected Date: {selectedDate}</p>
        <p>Selected Time: {selectedTime}</p>

        <form onSubmit={handleForm} className="mt-4">
          <div className="form-control mb-2">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
