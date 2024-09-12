import React, { useState } from 'react';

const doctors = [
  {
    name: 'Dr. Ruby Perrin',
    qualification: 'MBBS, MD - General Medicine',
    rating: 4.5,
    reviews: 35,
    location: 'Dhanmondi, Dhaka, Bangladesh',
    specialties: ['Dental Filling', 'Teeth Whitening'],
    image: 'https://via.placeholder.com/150', // replace with actual image URL
  },
  {
    name: 'Dr. John Doe',
    qualification: 'MBBS, MD - Dermatology',
    rating: 4.0,
    reviews: 20,
    location: 'Banani, Dhaka, Bangladesh',
    specialties: ['Skin Care', 'Laser Treatment'],
    image: 'https://via.placeholder.com/150',
  },
  // Add more doctors here if needed
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-96 mx-auto">
      <div className="flex items-start">
        <img
          className="w-24 h-24 rounded-lg bg-gray-200"
          src={doctor.image}
          alt={doctor.name}
        />
        <div className="ml-4">
          <h2 className="font-bold text-xl">{doctor.name}</h2>
          <p className="text-gray-500">{doctor.qualification}</p>
          <div className="flex items-center my-2">
            <span className="text-yellow-400">&#9733;</span>
            <span className="ml-1">{doctor.rating}</span>
            <span className="text-gray-400 ml-2">({doctor.reviews})</span>
          </div>
          <p className="text-gray-500 text-sm">
            <span className="inline-block mr-1">&#128205;</span>
            {doctor.location} - <a href="#" className="text-orange-500">Get Directions</a>
          </p>
          <div className="flex mt-4 space-x-2">
            {doctor.specialties.map((specialty, index) => (
              <button
                key={index}
                className="text-sm px-2 py-1 border rounded-md text-gray-700"
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 bg-gray-300 rounded-full p-2 focus:outline-none"
      >
        &#8592;
      </button>

      <div className="w-full max-w-md">
        <DoctorCard doctor={doctors[currentIndex]} />
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 bg-gray-300 rounded-full p-2 focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
