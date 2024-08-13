import React from "react";
import logo from "../../../assets/footerLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] pt-24 py-10">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Doc House" className=" mr-2" />
              
            </div>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.
            </p>
            <button className="bg-orange-400 text-white py-2 px-4 rounded-md">
              Appointment
            </button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Departments</a></li>
              <li><a href="#">Online Payment</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
          </div>
          
          {/* Doc House Services */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Doc House Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#">Pediatric Clinic</a></li>
              <li><a href="#">Diagnosis Clinic</a></li>
              <li><a href="#">Cardiac Clinic</a></li>
              <li><a href="#">Laboratory Analysis</a></li>
              <li><a href="#">Gynecological Clinic</a></li>
              <li><a href="#">Personal Counseling</a></li>
              <li><a href="#">Dental Clinic</a></li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Working Hours</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Monday - 10 am to 7 pm</li>
              <li>Tuesday - 10 am to 7 pm</li>
              <li>Wednesday - 10 am to 7 pm</li>
              <li>Thursday - 10 am to 7 pm</li>
              <li>Friday - 10 am to 7 pm</li>
              <li>Saturday - 10 am to 7 pm</li>
              <li>Sunday - 10 am to 7 pm</li>
            </ul>
          </div>
          
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600">
          <p>Copyright © 2022 - All right reserved by Doc House Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
