// ServiceSelector.js
import React, { useEffect, useState } from 'react';
import axiosPublic from '../../../Components/hooks/useAxiosPublic';

const ServiceSelector = ({ setSelectedService }) => {
const [services, setServices] = useState([]);

// Getting the services from mongodb database
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosPublic.get('/services');
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {services.length > 0 ? (
        services.map((service) => (
          <button
            key={service.name}
            className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
            onClick={() => setSelectedService(service.name)}
          >
            <span className="mr-2 text-2xl">{service.icon}</span>
            {service.name}
          </button>
        ))
      ) : (
        <p>Loading services...</p>
      )}
    </div>
  );
};

export default ServiceSelector;
