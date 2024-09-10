import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [slideDirection, setSlideDirection] = useState("right");

    const handleTabClick = (tab) => {
        // Determine slide direction
        setSlideDirection(activeTab < tab ? "right" : "left");
        setActiveTab(tab);
    };

    const getSlideClass = () => {
        return slideDirection === "right"
            ? "animate-slideInFromRight"
            : "animate-slideInFromLeft";
    };

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <div className="flex border-b">
                <button
                    className={`py-2 px-4 ${activeTab === 'Overview'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Overview")}
                >
                    Overview
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'Locations'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Locations")}
                >
                    Locations
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'Reviews'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Reviews")}
                >
                    Reviews
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'Business Hours'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Business Hours")}
                >
                    Business Hours
                </button>
            </div>
            {/* Tabs  */}
            <div className={` relative ${getSlideClass()}`}>
                <div className={`${activeTab === "Overview" ? "block" : "hidden"}`}>

                    {/* overview stsrt */}
                    <div className="  min-h-screen">
                        <div className=" mx-auto bg-white p-6 ">
                            {/* About Me Section */}
                            <section className="mb-8">
                                <h2 className="text-2xl text-black font-semibold mb-2 text-left">About Me</h2>
                                <p className="text-gray-700 text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </section>

                            {/* Education and Awards Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Education */}
                                <section className="text-left">
                                    <h3 className="text-xl text-black font-semibold mb-2">Education</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>
                                            <strong>American Dental Medical University</strong> <br />
                                            BDS <br />
                                            1998 - 2003
                                        </li>
                                        <li>
                                            <strong>American Dental Medical University</strong> <br />
                                            MDS <br />
                                            2003 - 2005
                                        </li>
                                    </ul>
                                </section>

                                {/* Awards */}
                                <section className="text-left">
                                    <h3 className="text-xl font-semibold text-black mb-2">Awards</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>
                                            <strong>July 2019 - Humanitarian Award</strong> <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                        </li>
                                        <li>
                                            <strong>March 2011 - Certificate for International Volunteer Service</strong> <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                        </li>
                                        <li>
                                            <strong>May 2008 - The Dental Professional of The Year Award</strong> <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            {/* Work & Experience, Services, Specializations Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                {/* Work & Experience */}
                                <section className="text-left">
                                    <h3 className="text-xl text-black font-semibold mb-2">Work & Experience</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>
                                            <strong>Glowing Smiles Family Dental Clinic</strong> <br />
                                            2010 - Present (5 years)
                                        </li>
                                        <li>
                                            <strong>Comfort Care Dental Clinic</strong> <br />
                                            2007 - 2010 (3 years)
                                        </li>
                                        <li>
                                            <strong>Dream Smile Dental Practice</strong> <br />
                                            2005 - 2007 (2 years)
                                        </li>
                                    </ul>
                                </section>

                                {/* Services */}
                                <section className="text-left">
                                    <h3 className="text-xl font-semibold text-black mb-2">Services</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Tooth cleaning</li>
                                        <li>Root Canal Therapy</li>
                                        <li>Implants</li>
                                        <li>Composite Bonding</li>
                                        <li>Fissure Sealants</li>
                                        <li>Surgical Extractions</li>
                                    </ul>
                                </section>

                                {/* Specializations */}
                                <section className="text-left">
                                    <h3 className="text-xltext-black font-semibold mb-2">Specializations</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Children Care</li>
                                        <li>Dental Care</li>
                                        <li>Oral and Maxillofacial Surgery</li>
                                        <li>Orthodontist</li>
                                        <li>Periodontist</li>
                                        <li>Prosthodontics</li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${activeTab === "Locations" ? "block" : "hidden"}`}>
                    Locations Content
                </div>
                <div className={`${activeTab === "Reviews" ? "block" : "hidden"}`}>
                    Reviews Content
                </div>
                <div className={`${activeTab === "Business Hours" ? "block" : "hidden"}`}>
                    Business Hours Content
                </div>
            </div>
        </div>
    );
};

export default Tabs;
