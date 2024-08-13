import React from "react";

const ContactForm = () => {
  return (
    <div style={{ maxWidth: '1127px' }} className="bg-[#07332F] text-white p-10  pt-20 rounded-lg mt-16  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contact With Us</h2>
          <p className="mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inve ntore veritatis et quasi.
          </p>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span>+88 01750 14 14 14</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5V9a9 9 0 00-9-9H5a9 9 0 00-9 9v11h5"
              />
            </svg>
            <span>Dhanmondi, Dhaka, Bangladesh</span>
          </div>
        </div>
        
        {/* Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#FFFFFF] bg-opacity-5 p-3 rounded-md text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#FFFFFF] bg-opacity-5 p-3 rounded-md text-white"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-[#FFFFFF] bg-opacity-5 p-3 rounded-md text-white"
            />
            <input
              type="text"
              placeholder="Doctor Name"
              className="bg-[#FFFFFF] bg-opacity-5 p-3 rounded-md text-white"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              className="bg-[#FFFFFF] bg-opacity-5 p-3 rounded-md text-white"
            />
            <input
              type="time"
              className="bg-[#FFFFFF] bg-opacity-5 p-3 rounded-md text-white"
            />
          </div>
          <button className="bg-[#F7A582] text-white p-3 rounded-md w-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
